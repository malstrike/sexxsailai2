import React from 'react';
import { Hexagon } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-center md:justify-start">
        <div className="glass-panel rounded-full px-6 py-3 flex items-center pointer-events-auto shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          {/* Logo */}
          <div className="flex items-center gap-2 group select-none">
            <Hexagon className="w-8 h-8 text-neon-purple group-hover:rotate-90 transition-transform duration-500" />
            <span className="font-mono font-bold text-xl tracking-widest text-white">
              SEXX<span className="text-neon-purple">SAIL</span>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;