import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext/ThemeContext';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer'; // Crie simples com nome do grupo
import { AppRoutes } from './routes/AppRoutes';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
