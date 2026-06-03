import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { DivinationPage } from './pages/DivinationPage';
import { LearnPage } from './pages/LearnPage';
import { HistoryPage } from './pages/HistoryPage';
import { ThemeToggle } from './components/ThemeToggle';
import { ThemeProvider } from './hooks/useTheme';

const pageOrder = ['home', 'divination', 'learn', 'history'];

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
      <div className="min-h-screen">
        <ThemeToggle />
        <div className="fixed top-0 left-0 right-0 z-20">
          <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
        </div>
        <div className="pt-24">
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
      </div>
    </ThemeProvider>
  );
}

export default App;
