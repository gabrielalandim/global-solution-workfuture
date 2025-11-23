export const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-primary mb-12">Sobre o WorkFuture 2030</h1>
        
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg space-y-6 text-gray-700 dark:text-gray-300">
          <p className="text-lg leading-relaxed">
            O <strong>WorkFuture 2030</strong> é uma plataforma digital inovadora que combina inteligência artificial, 
            ambientes de trabalho imersivos e aprendizado contínuo para preparar profissionais para as carreiras do futuro.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white pt-4">Nossos Objetivos</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Preparar trabalhadores para profissões que ainda não existem.</li>
            <li>Promover requalificação contínua (Upskilling e Reskilling).</li>
            <li>Criar ambientes de trabalho híbridos, imersivos e inclusivos.</li>
            <li>Garantir bem-estar e saúde mental para profissionais.</li>
            <li>Integrar tecnologia de forma ética e humanizada.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white pt-4">Impacto Social</h2>
          <p>
            Alinhados com os ODS da ONU, buscamos reduzir desigualdades através do acesso universal 
            à qualificação e promover o trabalho decente e crescimento econômico.
          </p>
        </div>
      </div>
    </div>
  );
};