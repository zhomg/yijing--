import { GeneratedLine } from '../utils/hexagramUtils';
import { useTheme } from '../hooks/useTheme';

interface LineDisplayProps {
  lines: GeneratedLine[];
  isAnimating?: boolean;
}

export const LineDisplay = ({ lines, isAnimating = false }: LineDisplayProps) => {
  const { theme } = useTheme();
  const textSecondaryColor = theme === 'light' ? '#86868b' : 'rgba(255, 255, 255, 0.7)';

  return (
    <div className="flex flex-col items-center gap-4">
      {lines.map((line, index) => (
        <div
          key={line.position}
          className={`flex items-center gap-4 transition-all duration-500 ${
            isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}
          style={{ animationDelay: `${index * 200}ms` }}
        >
          <span className="text-sm w-8 text-right font-medium" style={{ color: textSecondaryColor }}>
            {line.position}
          </span>
          <div className="w-56">
            {line.type === 'yang' ? (
              <div className="yang-line"></div>
            ) : (
              <div className="yin-line"></div>
            )}
          </div>
          <span className="text-sm w-8 text-left font-medium" style={{ color: textSecondaryColor }}>
            {line.type === 'yang' ? '阳' : '阴'}
          </span>
        </div>
      ))}
    </div>
  );
};
