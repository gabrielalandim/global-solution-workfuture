import { Github, Linkedin } from 'lucide-react';
import type { Member } from '../../types';

interface MemberCardProps {
  data: Member;
}

export const MemberCard = ({ data }: MemberCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 border border-gray-100 dark:border-gray-700">
      <div className="h-48 overflow-hidden bg-gray-200 dark:bg-gray-700 relative">
        <img 
          src={data.image} 
          alt={`Foto de ${data.name}`} 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
          {data.name}
        </h3>
        
        <div className="space-y-1 mb-4">
          <p className="text-primary font-semibold text-sm">
            RM: <span className="text-gray-600 dark:text-gray-300 font-normal">{data.rm}</span>
          </p>
          <p className="text-primary font-semibold text-sm">
            Turma: <span className="text-gray-600 dark:text-gray-300 font-normal">{data.turma}</span>
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
          <a 
            href={data.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white hover:bg-black hover:text-white transition-colors"
            title="Github"
          >
            <Github size={20} />
          </a>
          <a 
            href={data.linkedinUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
            title="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};