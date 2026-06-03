import { Home, Compass, BookOpen, History } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navItems = [
  { id: 'home', label: '首页', icon: Home },
  { id: 'divination', label: '卜卦', icon: Compass },
  { id: 'learn', label: '学习', icon: BookOpen },
  { id: 'history', label: '历史', icon: History },
];

export const Navigation = ({ currentPage, onNavigate }: NavigationProps) => {
  const { theme } = useTheme();

  const bgNav = theme === 'light' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(26, 26, 46, 0.8)';
  const borderColor = theme === 'light' ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.1)';
  const activeBg = theme === 'light' ? '#f5f5f7' : 'rgba(255, 255, 255, 0.1)';
  const activeColor = '#f59e0b';
  const inactiveColor = theme === 'light' ? '#86868b' : 'rgba(255, 255, 255, 0.6)';
  const hoverBg = theme === 'light' ? '#fafafa' : 'rgba(255, 255, 255, 0.05)';
  const textColor = theme === 'light' ? '#1d1d1f' : '#ffffff';

  return (
    <nav
      className="px-6 py-2 backdrop-blur-md border-b"
      style={{
        backgroundColor: bgNav,
        borderColor: borderColor
      }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <div 
            className="font-bold text-sm tracking-tight cursor-pointer"
            style={{ color: textColor }}
            onClick={() => onNavigate('home')}
          >
            zhomg
          </div>
          
          {/* Navigation */}
          <div className="flex gap-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all duration-200"
                  style={{
                    backgroundColor: isActive ? activeBg : 'transparent',
                    color: isActive ? activeColor : inactiveColor
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = hoverBg;
                      e.currentTarget.style.color = textColor;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = inactiveColor;
                    }
                  }}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className="font-medium text-xs">{item.label}</span>
                </button>
              );
            })}
          </div>
          
          {/* Spacer for balance */}
          <div className="w-12"></div>
        </div>
      </div>
    </nav>
  );
};
