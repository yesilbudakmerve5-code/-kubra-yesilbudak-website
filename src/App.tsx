import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Academic } from './pages/Academic';
import { Certificates } from './pages/Certificates';
import { Projects } from './pages/Projects';
import { Tutoring } from './pages/Tutoring';
import { Contact } from './pages/Contact';

export const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-cream text-darkGreen font-sans selection:bg-sageGreen/30 selection:text-darkGreen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hakkimda" element={<About />} />
            <Route path="/akademik-kariyer" element={<Academic />} />
            <Route path="/sertifikalar" element={<Certificates />} />
            <Route path="/projeler-ve-gonulluluk" element={<Projects />} />
            <Route path="/ozel-ders" element={<Tutoring />} />
            <Route path="/iletisim" element={<Contact />} />
            {/* Fallback route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
