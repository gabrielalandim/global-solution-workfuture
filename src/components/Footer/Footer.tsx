import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Coluna 1: Sobre */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary dark:text-white">
              WorkFuture 2030
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Conectando inteligência artificial, ambientes imersivos e aprendizado contínuo para um futuro do trabalho mais justo e produtivo.
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition">
                  Sobre o Projeto
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition">
                  Integrantes
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: ODS e Impacto */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Foco ODS (ONU)</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                Educação de Qualidade
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                Trabalho Decente
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                Inovação e Infraestrutura
              </li>
            </ul>
          </div>

          {/* Coluna 4: Contato/Social */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Contato</h4>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <p className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                São Paulo, SP - FIAP
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                contato@workfuture.com
              </p>
              
              {/* Ícones Sociais */}
              <div className="flex space-x-4 pt-4">
                <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition">
                  <Github size={20} />
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800 transition">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-500">
            &copy; {currentYear} WorkFuture 2030 - Global Solution FIAP. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};