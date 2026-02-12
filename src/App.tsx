import { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Projects from './pages/Projects';
import CV from './pages/CV';
import Publications from './pages/Publications';
import Contact from './pages/Contact';

type Page = 'home' | 'projects' | 'cv' | 'publications' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'projects':
        return <Projects />;
      case 'cv':
        return <CV />;
      case 'publications':
        return <Publications />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="fade-in">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
