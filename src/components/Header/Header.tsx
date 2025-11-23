import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';  
import { useState } from 'react';


import logoImg from '../../assets/logo.png';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* LOGO AQUI */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              {/* Imagem da Logo */}
              <img 
                src={logoImg} 
                alt="Logo WorkFuture 2030" 
                className="h-10 w-auto" // Ajuste a altura (h-10 = 40px)
              />
              {/* Texto Opcional (Pode remover se quiser só a imagem) */}
              <span className="text-xl font-bold text-primary dark:text-white hidden sm:block">
                WorkFuture 2030
              </span>
            </Link>
          </div>
          
          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-primary transition font-medium">Home</Link>
            <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-primary transition font-medium">Sobre</Link>
            <Link to="/team" className="text-gray-700 dark:text-gray-300 hover:text-primary transition font-medium">Integrantes</Link>
            <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-primary transition font-medium">Contato</Link>
            
            {/* Botão de Tema */}
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              aria-label="Alternar Tema"
            >
              {theme === 'light' ? <Moon size={20} className="text-gray-700" /> : <Sun size={20} className="text-yellow-400" />}
            </button>
          </div>

          {/* Botão Mobile */}
          <div className="md:hidden flex items-center gap-4">
             <button onClick={toggleTheme} className="p-2 rounded-full">
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} className="text-white" />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 dark:text-white">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Menu Mobile Expandido */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t dark:border-gray-800">
            <Link to="/" className="block px-3 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded">Home</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded">Sobre</Link>
            <Link to="/team" className="block px-3 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded">Integrantes</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded">Contato</Link>
        </div>
      )}
    </nav>
  );
};