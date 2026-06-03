import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-3 rounded-full transition-all duration-300 hover:scale-110"
      style={{
        backgroundColor: theme === 'light' ? '#f5f5f7' : 'rgba(255, 255, 255, 0.1)',
        border: theme === 'light' ? '1px solid #d2d2d7' : '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
      }}
      aria-label="切换主题"
    >
      {theme === 'light' ? (
        <Moon 
          className="w-5 h-5" 
          style={{ color: '#1d1d1f' }}
        />
      ) : (
        <Sun 
          className="w-5 h-5" 
          style={{ color: '#fbbf24' }}
        />
      )}
    </button>
  );
};
