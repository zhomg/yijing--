import { useState } from 'react';
import { hexagrams } from '../data/hexagrams';
import { HexagramDisplay } from '../components/HexagramDisplay';
import { ResultDetail } from '../components/ResultDetail';
import { Search, BookOpen } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export const LearnPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedHexagram, setSelectedHexagram] = useState(hexagrams[0]);
  const { theme } = useTheme();

  const filteredHexagrams = hexagrams.filter(hexagram => 
    hexagram.name.includes(searchTerm) || 
    hexagram.pinyin.includes(searchTerm.toLowerCase()) ||
    hexagram.id.toString().includes(searchTerm)
  );

  const textColor = theme === 'light' ? '#1d1d1f' : '#ffffff';
  const textSecondaryColor = theme === 'light' ? '#86868b' : 'rgba(255, 255, 255, 0.7)';
  const accentColor = '#f59e0b';
  const bgSecondary = theme === 'light' ? '#f5f5f7' : 'rgba(255, 255, 255, 0.05)';

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4" style={{ color: textColor }}>
          易经学习
        </h1>
        <p className="text-lg" style={{ color: textSecondaryColor }}>
          深入了解六十四卦的智慧
        </p>
      </div>

      <div className="bg-elevated rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <Search className="w-5 h-5" style={{ color: accentColor }} />
          <input
            type="text"
            placeholder="搜索卦名、拼音或序号..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 border rounded-lg px-4 py-2"
            style={{ 
              backgroundColor: bgSecondary, 
              borderColor: theme === 'light' ? '#d2d2d7' : 'rgba(255, 255, 255, 0.2)',
              color: textColor
            }}
          />
        </div>

        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-16 gap-2">
          {filteredHexagrams.map((hexagram) => (
            <button
              key={hexagram.id}
              onClick={() => setSelectedHexagram(hexagram)}
              className="p-3 rounded-lg transition-all duration-300"
              style={
                selectedHexagram.id === hexagram.id
                  ? { background: `linear-gradient(135deg, ${accentColor} 0%, #d97706 100%)`, color: '#fff' }
                  : { backgroundColor: bgSecondary, color: textColor }
              }
            >
              <div className="text-xl mb-1">{hexagram.symbol}</div>
              <div className="text-sm font-medium">{hexagram.name}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <HexagramDisplay hexagram={selectedHexagram} />
        
        <div className="space-y-6">
          <div className="bg-elevated rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5" style={{ color: accentColor }} />
              <h3 className="text-xl font-bold" style={{ color: textColor }}>卦序与分类</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg p-4" style={{ backgroundColor: bgSecondary }}>
                <p className="text-sm" style={{ color: textSecondaryColor }}>卦序</p>
                <p className="text-2xl font-bold" style={{ color: accentColor }}>{selectedHexagram.id}</p>
              </div>
              <div className="rounded-lg p-4" style={{ backgroundColor: bgSecondary }}>
                <p className="text-sm" style={{ color: textSecondaryColor }}>卦性</p>
                <p className="text-2xl font-bold" style={{ color: accentColor }}>
                  {selectedHexagram.id <= 32 ? '上经' : '下经'}
                </p>
              </div>
            </div>
          </div>

          <ResultDetail hexagram={selectedHexagram} />
        </div>
      </div>
    </div>
  );
};
