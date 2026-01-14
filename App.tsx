import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Donate } from './pages/Donate';
import { AdoptionProcess } from './pages/AdoptionProcess';
import { AnimalDetail } from './pages/AnimalDetail';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Foster } from './pages/Foster';

// ScrollToTop component to reset scroll on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-stone-50 dark:bg-stone-950 font-sans text-stone-800 dark:text-stone-200 transition-colors duration-300">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/donar" element={<Donate />} />
            <Route path="/adopta" element={<AdoptionProcess />} />
            <Route path="/acogida" element={<Foster />} />
            <Route path="/animal/:id" element={<AnimalDetail />} />
            <Route path="/privacidad" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
        <Analytics />
      </div>
    </Router>
  );
};

export default App;