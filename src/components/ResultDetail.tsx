import { Hexagram } from '../data/hexagrams';
import { Check, X, BookOpen } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

interface ResultDetailProps {
  hexagram: Hexagram;
}

export const ResultDetail = ({ hexagram }: ResultDetailProps) => {
  const { theme } = useTheme();

  const textColor = theme === 'light' ? '#1d1d1f' : '#ffffff';
  const textSecondaryColor = theme === 'light' ? '#86868b' : 'rgba(255, 255, 255, 0.7)';
  const accentColor = '#f59e0b';
  const greenColor = '#16a34a';
  const redColor = '#dc2626';
  const bgSecondary = theme === 'light' ? '#f5f5f7' : 'rgba(255, 255, 255, 0.05)';

  return (
    <div className="space-y-6">
      <div className="bg-elevated rounded-2xl p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ color: textColor }}>
          <BookOpen className="w-4.5 h-4.5" style={{ color: accentColor }} />
          卦象详解
        </h3>
        <p className="leading-relaxed text-base" style={{ color: textColor }}>
          {hexagram.meaning}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-elevated rounded-2xl p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ color: greenColor }}>
            <Check className="w-4.5 h-4.5" />
            适宜事宜
          </h3>
          <ul className="space-y-2">
            {hexagram.suitable.map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-sm" style={{ color: textColor }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: greenColor }} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-elevated rounded-2xl p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ color: redColor }}>
            <X className="w-4.5 h-4.5" />
            忌讳事宜
          </h3>
          <ul className="space-y-2">
            {hexagram.unsuitable.map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-sm" style={{ color: textColor }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: redColor }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-elevated rounded-2xl p-6">
        <h3 className="text-lg font-semibold mb-4" style={{ color: textColor }}>
          六爻详解
        </h3>
        <div className="space-y-3.5">
          {hexagram.lines.map((line) => (
            <div key={line.position} className="p-4 rounded-xl" style={{ backgroundColor: bgSecondary }}>
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-sm" style={{ color: accentColor }}>
                  第{line.position}爻
                </span>
                <span className="text-xs" style={{ color: textSecondaryColor }}>
                  {line.position % 2 === 1 ? '阳位' : '阴位'}
                </span>
              </div>
              <p className="font-medium text-sm mb-1" style={{ color: textColor }}>
                {line.text}
              </p>
              <p className="text-sm" style={{ color: textSecondaryColor }}>
                {line.meaning}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
