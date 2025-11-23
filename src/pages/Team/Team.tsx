import { MemberCard } from '../../components/MemberCard/MemberCard';
import { type Member } from '../../types';

// --- IMPORTAÇÃO DAS IMAGENS ---
// Certifique-se de que os arquivos existem na pasta 'assets' com estes nomes exatos
// Se suas fotos forem .png, mude o final para .png
import fotoGabi from '../../assets/fotoGabi.png';
import fotoSamara from '../../assets/fotoSamara.png';
import fotoEduarda from '../../assets/fotoEduarda.png';

// --- DADOS DAS INTEGRANTES (Atualizado) ---
const members: Member[] = [
  {
    id: 1,
    name: "Maria Gabriela",
    rm: "RM565146",
    turma: "1TDSA",
    image: fotoGabi,
    githubUrl: "https://github.com/gabrielalandim",
    linkedinUrl: "https://www.linkedin.com/in/maria-gabriela-landim-595654322/"
  },
  {
    id: 2,
    name: "Samara Porto Souza",
    rm: "RM559072",
    turma: "1TDSR",
    image: fotoSamara,
    githubUrl: "https://github.com/ssamaraps",
    linkedinUrl: "https://www.linkedin.com/in/samara-porto-732723325/"
  },
  {
    id: 3,
    name: "Eduarda Weiss Ventura",
    rm: "RM564434",
    turma: "1TDSPX",
    image: fotoEduarda,
    githubUrl: "https://github.com/eduardawv",
    linkedinUrl: "https://www.linkedin.com/in/eduarda-weiss-ventura-55bb37268/"
  },
];

export const Team = () => {
  return (
    <div className="min-h-screen pt-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Página */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nossa Equipe
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Conheça as desenvolvedoras responsáveis pelo projeto WorkFuture 2030.
            Alunas dedicadas da FIAP focadas em inovação e tecnologia.
          </p>
        </div>

        {/* Grid de Cards (Responsivo) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {members.map((member) => (
            <MemberCard key={member.id} data={member} />
          ))}
        </div>

      </div>
    </div>
  );
};
