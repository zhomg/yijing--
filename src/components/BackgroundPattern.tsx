import { useTheme } from '../hooks/useTheme';

export const BackgroundPattern = () => {
  const { theme } = useTheme();

  const circleBorderColor = theme === 'light' ? '#1d1d1f' : '#ffffff';
  const accentBorderColor = '#f59e0b';

  return (
    <div className="bg-pattern">
      {/* 装饰性八卦元素 */}
      <div className="pattern-element" style={{ top: '10%', left: '5%', fontSize: '120px' }}>
        ☯
      </div>
      <div className="pattern-element" style={{ top: '60%', right: '8%', fontSize: '100px' }}>
        ☰
      </div>
      <div className="pattern-element" style={{ bottom: '15%', left: '10%', fontSize: '90px' }}>
        ☷
      </div>
      <div className="pattern-element" style={{ top: '25%', right: '15%', fontSize: '80px' }}>
        ☳
      </div>
      <div className="pattern-element" style={{ top: '45%', left: '3%', fontSize: '70px' }}>
        ☵
      </div>
      <div className="pattern-element" style={{ bottom: '30%', right: '3%', fontSize: '85px' }}>
        ☶
      </div>
      
      {/* 微妙的圆形装饰 */}
      <div 
        className="pattern-element"
        style={{
          top: '20%',
          left: '25%',
          width: '200px',
          height: '200px',
          border: `2px solid ${accentBorderColor}`,
          borderRadius: '50%',
        }}
      />
      <div 
        className="pattern-element"
        style={{
          bottom: '25%',
          right: '20%',
          width: '150px',
          height: '150px',
          border: `1px solid ${circleBorderColor}`,
          borderRadius: '50%',
        }}
      />
    </div>
  );
};
