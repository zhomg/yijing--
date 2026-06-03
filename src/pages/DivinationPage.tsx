import { HexagramDisplay } from '../components/HexagramDisplay';
import { LineDisplay } from '../components/LineDisplay';
import { DivinationButton } from '../components/DivinationButton';
import { ResultDetail } from '../components/ResultDetail';
import { useDivination } from '../hooks/useDivination';
import { useTheme } from '../hooks/useTheme';

export const DivinationPage = () => {
  const { currentResult, isDivining, startDivination } = useDivination();
  const { theme } = useTheme();

  const textColor = theme === 'light' ? '#1d1d1f' : '#ffffff';
  const textSecondaryColor = theme === 'light' ? '#86868b' : 'rgba(255, 255, 255, 0.7)';

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4" style={{ color: textColor }}>
          卜卦
        </h1>
        <p className="text-lg" style={{ color: textSecondaryColor }}>
          静心思考您的问题，然后开始卜卦
        </p>
      </div>

      <div className="flex justify-center">
        <DivinationButton onClick={startDivination} isLoading={isDivining} text="开始卜卦" />
      </div>

      {isDivining && (
        <div className="flex justify-center">
          <div className="bg-elevated rounded-2xl p-12">
            <div className="text-center">
              <div className="text-6xl mb-4 animate-pulse">✨</div>
              <p className="text-xl" style={{ color: textColor }}>正在生成卦象...</p>
            </div>
          </div>
        </div>
      )}

      {currentResult && !isDivining && (
        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <HexagramDisplay hexagram={currentResult.hexagram} />
            
            <div className="bg-elevated rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-6 text-center" style={{ color: textColor }}>
                六爻爻画
              </h3>
              <LineDisplay lines={currentResult.lines} />
            </div>
          </div>

          <ResultDetail hexagram={currentResult.hexagram} />
        </div>
      )}

      {!currentResult && !isDivining && (
        <div className="bg-elevated rounded-2xl p-12 text-center">
          <div className="text-8xl mb-6 opacity-50">
            ☰
          </div>
          <p className="text-lg" style={{ color: textSecondaryColor }}>
            点击上方按钮开始您的卜卦之旅
          </p>
        </div>
      )}
    </div>
  );
};
