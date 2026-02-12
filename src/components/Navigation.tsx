import { Menu, X } from 'lucide-react';
import { useState } from 'react';

type Page = 'home' | 'projects' | 'cv' | 'publications' | 'contact';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const navItems: { label: string; page: Page }[] = [
  { label: 'Work', page: 'projects' },
  { label: 'CV', page: 'cv' },
  { label: 'Publications', page: 'publications' },
  { label: 'Contact', page: 'contact' },
];

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Name */}
          <button
            onClick={() => handleNavClick('home')}
            className="font-serif text-xl font-semibold text-navy-900 hover:text-navy-700 transition-colors"
          >
            Néstor Kippes
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`text-sm font-medium transition-colors relative ${
                  currentPage === item.page
                    ? 'text-navy-900'
                    : 'text-gray-600 hover:text-navy-900'
                }`}
              >
                {item.label}
                {currentPage === item.page && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-navy-900 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-navy-900 transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 fade-in">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  currentPage === item.page
                    ? 'bg-navy-50 text-navy-900'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-navy-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
