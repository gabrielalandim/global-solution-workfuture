import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useEffect, useState } from 'react';
import { apiService } from '../../services/api';
import type { JobTrend } from '../../types';

export const JobDetails = () => {
  const { id } = useParams<{ id: string }>(); // Pega o parametro da URL
  const [job, setJob] = useState<JobTrend | null>(null);

  useEffect(() => {
    // Simulação de busca na API pelo ID
    // Na API Java real, seria: apiService.getJobById(id)
    const fetchJob = async () => {
      const allJobs = await apiService.getJobs();
      // Encontra a vaga que corresponde ao ID da URL
      const found = allJobs.find((j: JobTrend) => j.id === Number(id));
      setJob(found || null);
    };
    fetchJob();
  }, [id]);

  if (!job) {
    return (
      <div className="min-h-screen pt-24 text-center dark:text-white">
        <p>Carregando ou vaga não encontrada...</p>
        <Link to="/" className="text-primary hover:underline">Voltar para Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
        <Link to="/" className="inline-flex items-center text-gray-500 hover:text-primary mb-6 transition">
          <ArrowLeft size={20} className="mr-2" /> Voltar
        </Link>
        
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{job.title}</h1>
        
        <div className="space-y-6">
          <div className="p-4 bg-blue-50 dark:bg-gray-700 rounded-lg">
            <h3 className="font-semibold text-primary dark:text-blue-300">Descrição</h3>
            <p className="text-gray-700 dark:text-gray-200 mt-2">{job.description}</p>
          </div>
          
          <div className="p-4 bg-green-50 dark:bg-gray-700 rounded-lg">
            <h3 className="font-semibold text-green-600 dark:text-green-400">Impacto Futuro</h3>
            <p className="text-gray-700 dark:text-gray-200 mt-2">{job.impact}</p>
          </div>
        </div>
        
        <div className="mt-8">
            <button className="w-full bg-secondary hover:bg-green-600 text-white font-bold py-3 rounded-lg transition">
                Candidatar-se a esta trilha
            </button>
        </div>
      </div>
    </div>
  );
};