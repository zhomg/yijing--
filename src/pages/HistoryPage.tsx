import { useDivination } from '../hooks/useDivination';
import { HexagramDisplay } from '../components/HexagramDisplay';
import { ResultDetail } from '../components/ResultDetail';
import { Trash2, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { formatTime } from '../utils/hexagramUtils';
import { DivinationResult } from '../hooks/useDivination';
import { useTheme } from '../hooks/useTheme';

interface HistoryItemProps {
  result: DivinationResult;
  index: number;
}

const HistoryItem = ({ result, index }: HistoryItemProps) => {
  const [expanded, setExpanded] = useState(false);
  const { theme } = useTheme();

  const textColor = theme === 'light' ? '#1d1d1f' : '#ffffff';
  const textSecondaryColor = theme === 'light' ? '#86868b' : 'rgba(255, 255, 255, 0.7)';
  const hoverBg = theme === 'light' ? '#fafafa' : 'rgba(255, 255, 255, 0.05)';
  const borderColor = theme === 'light' ? '#e5e5e5' : 'rgba(255, 255, 255, 0.1)';

  return (
    <div className="bg-elevated rounded-2xl overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-4 flex items-center gap-4 transition-colors"
        style={{ backgroundColor: 'transparent' }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = hoverBg;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
      >
        <span className="text-sm w-8" style={{ color: textSecondaryColor }}>{index + 1}</span>
        <div className="text-3xl">{result.hexagram.symbol}</div>
        <div className="flex-1 text-left">
          <div className="font-bold" style={{ color: textColor }}>第{result.hexagram.id}卦 · {result.hexagram.name}</div>
          <div className="flex items-center gap-2 text-sm" style={{ color: textSecondaryColor }}>
            <Clock className="w-4 h-4" />
            {formatTime(result.timestamp)}
          </div>
        </div>
        {expanded ? (
          <ChevronUp className="w-5 h-5" style={{ color: textSecondaryColor }} />
        ) : (
          <ChevronDown className="w-5 h-5" style={{ color: textSecondaryColor }} />
        )}
      </button>

      {expanded && (
        <div className="px-4 pb-4 space-y-4">
          <div className="border-t pt-4" style={{ borderColor: borderColor }}>
            <HexagramDisplay hexagram={result.hexagram} className="" />
          </div>
          <ResultDetail hexagram={result.hexagram} />
        </div>
      )}
    </div>
  );
};

export const HistoryPage = () => {
  const { history, clearHistory } = useDivination();
  const { theme } = useTheme();

  const textColor = theme === 'light' ? '#1d1d1f' : '#ffffff';
  const textSecondaryColor = theme === 'light' ? '#86868b' : 'rgba(255, 255, 255, 0.7)';
  const dangerColor = '#dc2626';

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4" style={{ color: textColor }}>
          卜卦历史
        </h1>
        <p className="text-lg" style={{ color: textSecondaryColor }}>
          回顾您的卜卦记录
        </p>
      </div>

      {history.length > 0 && (
        <div className="flex justify-end">
          <button
            onClick={clearHistory}
            className="flex items-center gap-2 px-4 py-2 transition-colors"
            style={{ color: dangerColor }}
          >
            <Trash2 className="w-4 h-4" />
            清空历史
          </button>
        </div>
      )}

      {history.length > 0 ? (
        <div className="space-y-4">
          {history.map((result, index) => (
            <HistoryItem key={index} result={result} index={index} />
          ))}
        </div>
      ) : (
        <div className="bg-elevated rounded-2xl p-12 text-center">
          <div className="text-8xl mb-6 opacity-50">
            📜
          </div>
          <p className="text-lg" style={{ color: textSecondaryColor }}>
            暂无卜卦记录
          </p>
          <p className="text-sm mt-2" style={{ color: textSecondaryColor }}>
            前往卜卦页面开始您的第一次卜卦
          </p>
        </div>
      )}
    </div>
  );
};
