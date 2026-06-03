import { Hexagram } from '../data/hexagrams';
import { useTheme } from '../hooks/useTheme';

interface HexagramDisplayProps {
  hexagram: Hexagram;
  className?: string;
}

export const HexagramDisplay = ({ hexagram, className = '' }: HexagramDisplayProps) => {
  const { theme } = useTheme();

  const textColor = theme === 'light' ? '#1d1d1f' : '#ffffff';
  const textSecondaryColor = theme === 'light' ? '#86868b' : 'rgba(255, 255, 255, 0.7)';
  const accentColor = '#f59e0b';
  const borderColor = theme === 'light' ? '#e5e5e5' : 'rgba(255, 255, 255, 0.1)';

  return (
    <div className={`bg-elevated rounded-2xl p-7 ${className}`}>
      <div className="flex flex-col items-center">
        <div className="text-6xl mb-4 animate-float">
          {hexagram.symbol}
        </div>
        <h2 className="text-lg font-medium mb-1" style={{ color: textSecondaryColor }}>
          第{hexagram.id}卦
        </h2>
        <h1 className="text-3xl font-semibold mb-2" style={{ color: textColor }}>
          {hexagram.name}
        </h1>
        <p className="text-base mb-5" style={{ color: accentColor }}>
          {hexagram.pinyin}
        </p>
        <div className="w-full h-px mb-5" style={{ backgroundColor: borderColor }} />
        <p className="text-base font-medium mb-2" style={{ color: textColor }}>
          卦辞
        </p>
        <p className="text-center text-base leading-relaxed" style={{ color: textColor }}>
          {hexagram.description}
        </p>
      </div>
    </div>
  );
};
