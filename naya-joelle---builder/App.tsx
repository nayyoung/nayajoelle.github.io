import React, { useEffect } from 'react';
import Hero from './components/Hero';
import FirstCTA from './components/FirstCTA';
import Work from './components/Work';
import Currently from './components/Currently';
import SecondCTA from './components/SecondCTA';
import Connect from './components/Connect';
import Footer from './components/Footer';

const App: React.FC = () => {
  // Smooth scroll behavior for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <main className="min-h-screen w-full bg-[#0a0a0a] text-[#f5f5f5] selection:bg-[#e07a24] selection:text-black">
      <div className="mx-auto max-w-5xl px-6 md:px-12">
        <Hero />
        <FirstCTA />
        <Work />
        <Currently />
        <SecondCTA />
        <Connect />
        <Footer />
      </div>
    </main>
  );
};

export default App;