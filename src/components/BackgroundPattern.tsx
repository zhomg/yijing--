import { useTheme } from '../hooks/useTheme';

export const BackgroundPattern = () => {
  const { theme } = useTheme();

  const circleBorderColor = theme === 'light' ? '#1d1d1f' : '#ffffff';
  const accentBorderColor = '#f59e0b';
  const isDark = theme === 'dark';

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
      
      {/* 黑夜模式额外添加的八卦元素 */}
      {isDark && (
        <>
          <div className="pattern-element" style={{ top: '5%', right: '25%', fontSize: '65px' }}>
            ☲
          </div>
          <div className="pattern-element" style={{ top: '35%', left: '20%', fontSize: '55px' }}>
            ☴
          </div>
          <div className="pattern-element" style={{ bottom: '50%', right: '5%', fontSize: '75px' }}>
            ☰
          </div>
          <div className="pattern-element" style={{ top: '70%', left: '30%', fontSize: '60px' }}>
            ☳
          </div>
          <div className="pattern-element" style={{ bottom: '5%', right: '35%', fontSize: '95px' }}>
            ☵
          </div>
          <div className="pattern-element" style={{ top: '55%', left: '40%', fontSize: '50px' }}>
            ☷
          </div>
        </>
      )}
      
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
      
      {/* 黑夜模式额外的装饰 */}
      {isDark && (
        <>
          <div 
            className="pattern-element"
            style={{
              top: '40%',
              right: '30%',
              width: '120px',
              height: '120px',
              border: `1px solid rgba(245, 158, 11, 0.3)`,
              borderRadius: '50%',
            }}
          />
          <div 
            className="pattern-element"
            style={{
              top: '15%',
              left: '40%',
              width: '80px',
              height: '80px',
              border: `1px solid rgba(255, 255, 255, 0.2)`,
              borderRadius: '50%',
            }}
          />
          <div 
            className="pattern-element"
            style={{
              bottom: '40%',
              left: '5%',
              width: '180px',
              height: '180px',
              border: `1px solid rgba(245, 158, 11, 0.2)`,
              borderRadius: '50%',
            }}
          />
        </>
      )}
    </div>
  );
};
