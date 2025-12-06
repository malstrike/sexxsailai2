import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Hero from './components/Hero';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading sequence
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-[100]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-neon-purple border-t-transparent rounded-full animate-spin"></div>
          <div className="font-mono text-neon-purple animate-pulse tracking-widest text-sm">INITIALIZING...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white relative font-sans selection:bg-neon-purple selection:text-white overflow-hidden">
      <Background />
      <Navbar />
      
      <main className="h-screen flex flex-col justify-center">
        <Hero />
      </main>

      {/* Footer / Status Bar */}
      <footer className="fixed bottom-0 left-0 w-full p-6 pointer-events-none flex justify-between items-center text-[10px] text-gray-600 font-mono z-50">
        <div className="animate-pulse">STATUS: ONLINE</div>
        <div>SEXXSAIL © 2024</div>
        <div>ENCRYPTED</div>
      </footer>
    </div>
  );
};

export default App;