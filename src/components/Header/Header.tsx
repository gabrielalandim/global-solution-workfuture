import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext/ThemeContext';
import { Sun, Moon, Menu } from 'lucide-react';
import { useState } from 'react';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            {/* Insira sua logo aqui */}
            <Link to="/" className="text-2xl font-bold text-primary dark:text-white">
              WorkFuture 2030
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-primary transition">Home</Link>
            <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-primary transition">Sobre</Link>
            <Link to="/team" className="text-gray-700 dark:text-gray-300 hover:text-primary transition">Integrantes</Link>
            <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-primary transition">Contato</Link>
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} className="text-white" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 dark:text-white">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 dark:text-white">Home</Link>
            <Link to="/team" className="block px-3 py-2 text-gray-700 dark:text-white">Integrantes</Link>
        </div>
      )}
    </nav>
  );
};