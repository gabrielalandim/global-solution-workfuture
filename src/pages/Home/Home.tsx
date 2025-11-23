import { ArrowRight, Cpu, Globe, Users, TrendingUp, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            WorkFuture 2030
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Uma plataforma inovadora que conecta Inteligência Artificial, 
            Ambientes Imersivos e Aprendizado Contínuo para moldar o futuro do trabalho.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/about" 
              className="inline-flex items-center justify-center bg-white text-primary font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition shadow-lg"
            >
              Conhecer o Projeto <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white/10 transition"
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      </section>

      {/* PILARES DO PROJETO (Baseado no PDF) */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Nossos Pilares
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Soluções integradas para preparar profissionais e empresas para as transformações digitais e sociais.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1: IA */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-primary">
            <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Cpu className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">IA como Parceira</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Assistentes inteligentes que automatizam tarefas repetitivas e fornecem dados estratégicos para tomada de decisão.
            </p>
          </div>

          {/* Card 2: Ambientes Imersivos */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-secondary">
            <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Globe className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Realidade Híbrida</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Uso de AR/VR para reuniões globais, treinamentos imersivos e simulações práticas de alta fidelidade.
            </p>
          </div>

          {/* Card 3: Inclusão */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-purple-500">
            <div className="bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-purple-500" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Inclusão & ESG</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Recrutamento ético sem vieses, foco em saúde mental e programas de acesso universal à qualificação.
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE TRILHAS (IMPORTANTE: ROTA DINÂMICA) */}
      <section className="bg-gray-100 dark:bg-gray-800 py-20 px-4 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-3">
                <TrendingUp className="text-secondary" /> Profissões do Futuro
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Descubra as carreiras emergentes identificadas pela nossa IA.
              </p>
            </div>
          </div>

          {/* Lista de Vagas para Testar Rota Dinâmica /vaga/:id */}
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Link Dinâmico 1 */}
            <Link to="/vaga/1" className="group bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition flex justify-between items-center">
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition">
                  Especialista em Ética de IA
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Monitoramento e compliance de algoritmos
                </p>
              </div>
              <ArrowRight className="text-gray-300 group-hover:text-primary transition" />
            </Link>

            {/* Link Dinâmico 2 */}
            <Link to="/vaga/2" className="group bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition flex justify-between items-center">
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition">
                  Gestor de Ambientes Híbridos
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Otimização de espaços físicos e virtuais (VR)
                </p>
              </div>
              <ArrowRight className="text-gray-300 group-hover:text-primary transition" />
            </Link>

          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto bg-primary rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
          {/* Elemento decorativo */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
          
          <h2 className="text-3xl font-bold mb-6 relative z-10">Pronto para o futuro?</h2>
          <p className="text-xl mb-8 opacity-90 relative z-10">
            Junte-se a milhares de profissionais que já estão se preparando com o WorkFuture 2030.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <ul className="text-left space-y-2 mb-8 sm:mb-0 sm:mr-12">
              <li className="flex items-center"><CheckCircle size={20} className="mr-2" /> Mentoria Virtual</li>
              <li className="flex items-center"><CheckCircle size={20} className="mr-2" /> Certificações Globais</li>
            </ul>
            <Link 
              to="/team" 
              className="inline-block bg-secondary text-white font-bold py-4 px-10 rounded-lg hover:bg-green-600 transition shadow-lg"
            >
              Conheça Quem Fez
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};