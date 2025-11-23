import { useState } from 'react';
import { apiService } from '../../services/api';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Enviando...');
    try {
      // Simula envio para API Java
      await apiService.sendContact(formData);
      setStatus('Mensagem enviada com sucesso! Em breve entraremos em contato.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error); // Mantendo log limpo para o usuário
      setStatus('Erro ao enviar. Tente novamente mais tarde.');
    }
  };

  return (
    <div className="min-h-screen pt-24 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">Fale Conosco</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nome</label>
            <input 
              type="text" 
              required
              className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-primary outline-none"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">E-mail</label>
            <input 
              type="email" 
              required
              className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-primary outline-none"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Mensagem</label>
            <textarea 
              required
              rows={4}
              className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-primary outline-none"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition"
          >
            Enviar Mensagem
          </button>
          
          {status && <p className="text-center text-sm mt-4 text-green-600 dark:text-green-400">{status}</p>}
        </form>
      </div>
    </div>
  );
};