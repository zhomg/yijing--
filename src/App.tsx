import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { DivinationPage } from './pages/DivinationPage';
import { LearnPage } from './pages/LearnPage';
import { HistoryPage } from './pages/HistoryPage';
import { ThemeToggle } from './components/ThemeToggle';
import { ThemeProvider, useTheme } from './hooks/useTheme';

const pageOrder = ['home', 'divination', 'learn', 'history'];

const Footer = () => {
  const { theme } = useTheme();
  const textSecondaryColor = theme === 'light' ? '#86868b' : 'rgba(255, 255, 255, 0.6)';
  const borderColor = theme === 'light' ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.1)';

  return (
    <footer className="py-8 border-t" style={{ borderColor }}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-sm" style={{ color: textSecondaryColor }}>
          by <span className="font-semibold">zhomg</span>
        </p>
      </div>
    </footer>
  );
};

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    if (page === currentPage) return;
    setCurrentPage(page);
  };

  const renderPage = (page: string) => {
    switch (page) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'divination':
        return <DivinationPage />;
      case 'learn':
        return <LearnPage />;
      case 'history':
        return <HistoryPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  const currentIndex = pageOrder.indexOf(currentPage);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <ThemeToggle />
        <div className="fixed top-0 left-0 right-0 z-20">
          <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
        </div>
        <div className="pt-24 flex-grow">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {pageOrder.map((pageId) => (
                <div key={pageId} className="flex-shrink-0 w-full">
                  <div className={`${pageId === 'learn' ? 'max-w-5xl' : 'max-w-4xl'} mx-auto px-4`}>
                    {renderPage(pageId)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
