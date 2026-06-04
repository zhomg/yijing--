import { BookOpen, History, Compass } from 'lucide-react';
import { useDivination } from '../hooks/useDivination';
import { DivinationButton } from '../components/DivinationButton';
import { HexagramDisplay } from '../components/HexagramDisplay';
import { LineDisplay } from '../components/LineDisplay';
import { ResultDetail } from '../components/ResultDetail';
import { BackgroundPattern } from '../components/BackgroundPattern';
import { useTheme } from '../hooks/useTheme';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export const HomePage = ({ onNavigate }: HomePageProps) => {
  const { currentResult, isDivining, startDivination, clearResult } = useDivination();
  const { theme } = useTheme();

  const textColor = theme === 'light' ? '#1d1d1f' : '#ffffff';
  const textSecondaryColor = theme === 'light' ? '#86868b' : 'rgba(255, 255, 255, 0.7)';
  const bgSecondary = theme === 'light' ? '#f5f5f7' : 'rgba(255, 255, 255, 0.05)';
  const bgSecondaryHover = theme === 'light' ? '#e5e5e5' : 'rgba(255, 255, 255, 0.1)';
  const borderColor = theme === 'light' ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.1)';
  const taijiFill = theme === 'light' ? '#1d1d1f' : '#ffffff';
  const taijiPathFill = theme === 'light' ? '#ffffff' : '#1a1a2e';

  return (
    <div className="relative py-8">
      <BackgroundPattern />
      
      {/* Hero Section - Full Viewport Height */}
      <section className="relative z-10">
        <div className="w-full max-w-3xl mx-auto">
          {/* Initial State - Empty / Before Divination */}
          {!currentResult && !isDivining && (
            <div className="text-center space-y-12">
              {/* Taiji Logo */}
              <div className="flex justify-center">
                <div className="w-28 h-28 animate-taiji-spin">
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <circle cx="12" cy="12" r="10" fill={taijiFill} />
                    <path d="M12 2a10 10 0 0 1 0 20 5 5 0 0 1 0-10 5 5 0 0 0 0-10" fill={taijiPathFill} />
                    <circle cx="12" cy="7" r="3" fill={taijiFill} />
                    <circle cx="12" cy="17" r="3" fill={taijiPathFill} />
                    <circle cx="12" cy="7" r="1" fill={taijiPathFill} />
                    <circle cx="12" cy="17" r="1" fill={taijiFill} />
                  </svg>
                </div>
              </div>
              
              {/* Headline */}
              <div className="space-y-5">
                <h1 className="text-4xl md:text-5xl font-semibold tracking-tight" style={{ color: textColor }}>
                  每日一卦
                </h1>
                <p className="text-lg md:text-xl max-w-xl mx-auto leading-relaxed" style={{ color: textSecondaryColor }}>
                  观天之道，执天之行，尽矣
                </p>
              </div>
              
              {/* Primary CTA */}
              <div className="pt-2">
                <DivinationButton onClick={startDivination} isLoading={false} />
              </div>
            </div>
          )}
          
          {/* Divining State - Loading */}
          {isDivining && (
            <div className="text-center space-y-8">
              <div className="flex justify-center">
                <div className="w-28 h-28 animate-taiji-spin">
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <circle cx="12" cy="12" r="10" fill={taijiFill} />
                    <path d="M12 2a10 10 0 0 1 0 20 5 5 0 0 1 0-10 5 5 0 0 0 0-10" fill={taijiPathFill} />
                    <circle cx="12" cy="7" r="3" fill={taijiFill} />
                    <circle cx="12" cy="17" r="3" fill={taijiPathFill} />
                    <circle cx="12" cy="7" r="1" fill={taijiPathFill} />
                    <circle cx="12" cy="17" r="1" fill={taijiFill} />
                  </svg>
                </div>
              </div>
              <p className="text-lg" style={{ color: textSecondaryColor }}>正在为您起卦...</p>
            </div>
          )}
          
          {/* Result State - After Divination */}
          {currentResult && !isDivining && (
            <div className="space-y-10 animate-fade-in">
              {/* Result Content */}
              <div className="grid md:grid-cols-2 gap-10 items-start">
                <HexagramDisplay hexagram={currentResult.hexagram} />
                <div className="space-y-8">
                  <div className="p-6 rounded-2xl bg-elevated">
                    <h3 className="text-lg font-semibold mb-6 text-center" style={{ color: textColor }}>
                      今日卦象
                    </h3>
                    <LineDisplay lines={currentResult.lines} />
                  </div>
                </div>
              </div>
              
              <ResultDetail hexagram={currentResult.hexagram} />
              
              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button
                  onClick={startDivination}
                  className="btn-primary px-8 py-3.5 text-base font-medium"
                >
                  再卜一卦
                </button>
                <button
                  onClick={clearResult}
                  className="btn-secondary px-8 py-3.5 text-base font-medium"
                >
                  回到首页
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* Features Section - Only show before divination */}
      {!currentResult && !isDivining && (
        <section className="py-12 mt-8 border-t relative z-10" style={{ borderColor: borderColor }}>
          <div>
            <div className="grid md:grid-cols-3 gap-10">
              <button
                onClick={() => onNavigate('divination')}
                className="group text-left transition-all hover:opacity-70"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 group-hover:transition-colors" 
                  style={{ backgroundColor: bgSecondary }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = bgSecondaryHover;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = bgSecondary;
                  }}
                >
                  <Compass className="w-5.5 h-5.5" style={{ color: textColor }} />
                </div>
                <h3 className="text-base font-semibold mb-2" style={{ color: textColor }}>
                  更多卜卦
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: textSecondaryColor }}>
                  随时进行多次起卦，探索不同可能性
                </p>
              </button>
              
              <button
                onClick={() => onNavigate('learn')}
                className="group text-left transition-all hover:opacity-70"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 group-hover:transition-colors"
                  style={{ backgroundColor: bgSecondary }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = bgSecondaryHover;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = bgSecondary;
                  }}
                >
                  <BookOpen className="w-5.5 h-5.5" style={{ color: textColor }} />
                </div>
                <h3 className="text-base font-semibold mb-2" style={{ color: textColor }}>
                  易经学习
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: textSecondaryColor }}>
                  深入学习六十四卦，理解每卦的含义
                </p>
              </button>
              
              <button
                onClick={() => onNavigate('history')}
                className="group text-left transition-all hover:opacity-70"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 group-hover:transition-colors"
                  style={{ backgroundColor: bgSecondary }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = bgSecondaryHover;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = bgSecondary;
                  }}
                >
                  <History className="w-5.5 h-5.5" style={{ color: textColor }} />
                </div>
                <h3 className="text-base font-semibold mb-2" style={{ color: textColor }}>
                  卜卦历史
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: textSecondaryColor }}>
                  记录您的每次起卦，追踪变化过程
                </p>
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
