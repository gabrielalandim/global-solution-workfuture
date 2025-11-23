import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Team } from '../pages/Team/Team';
import { About } from '../pages/About/About';
import { Contact } from '../pages/Contact/Contact';
import { JobDetails } from '../pages/JobDetails/JobDetails'; 

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contact" element={<Contact />} />
      {/* Rota Dinâmica Obrigatória */}
      <Route path="/vaga/:id" element={<JobDetails />} />
    </Routes>
  );
};