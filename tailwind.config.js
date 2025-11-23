/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Essencial para o requisito de Tema Claro/Escuro via Contexto
  theme: {
    extend: {
      colors: {
        primary: '#0056D2', // Azul tecnológico sugerido pelo logo
        secondary: '#10B981', // Verde para sustentabilidade (ODS)
      }
    },
  },
  plugins: [],
}
