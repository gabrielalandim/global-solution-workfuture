// Configure aqui a URL da sua API Java hospedada
const API_BASE_URL = "https://workfuture-java-api.onrender.com/";

export const apiService = {
  getJobs: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/jobs`);
      if (!response.ok) throw new Error('Erro ao buscar dados');
      return await response.json();
    } catch (error) {
      console.error("API Error:", error);
      return [
        { id: 1, title: "Especialista em Ética de IA", description: "Monitoramento de algoritmos.", impact: "Alto" },
        { id: 2, title: "Gestor de Ambientes Híbridos", description: "Otimização de VR/AR.", impact: "Médio" }
      ];
    }
  },
  
  // Exemplo de POST para enviar dados (Contato ou Cadastro)
  sendContact: async (data: object) => {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return response.json();
  }
};