import React from 'react';
import { Send, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full flex flex-col justify-center items-center text-center px-4">
      
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-purple/20 rounded-full blur-[100px] animate-pulse-slow pointer-events-none" />
      
      <div className="z-10 flex flex-col items-center">
        
        <div className="mb-6 inline-block glass-panel px-4 py-1 rounded-full animate-[fadeInUp_1s_ease-out]">
          <span className="text-xs font-mono text-neon-purple tracking-[0.3em] uppercase flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
            System Active
          </span>
        </div>

        <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter animate-[fadeInUp_1.2s_ease-out] select-none">
          <span className="block text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">SEXXSAIL</span>
        </h1>

        <p className="max-w-xl text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-12 animate-[fadeInUp_1.4s_ease-out]">
          High-performance digital architect. 
          <br className="hidden md:block" />
          Click below to initiate encrypted connection.
        </p>

        <div className="animate-[fadeInUp_1.6s_ease-out] w-full max-w-sm relative group">
           <div className="absolute -inset-1 bg-gradient-to-r from-neon-purple via-blue-500 to-neon-purple rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
           
           <a 
            href="https://t.me/sexsei1s" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative flex items-center justify-between w-full bg-black border border-white/10 px-8 py-6 rounded-xl overflow-hidden hover:bg-white/5 transition-all duration-300"
           >
              <div className="flex items-center gap-4">
                <div className="bg-[#24A1DE] p-3 rounded-lg text-white shadow-[0_0_15px_#24A1DE]">
                   <Send className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-mono text-gray-500 tracking-widest uppercase">Direct Link</div>
                  <div className="text-xl font-bold text-white tracking-wider">TELEGRAM</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-neon-purple opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                <span className="font-mono hidden sm:block">t.me/sexsei1s</span>
                <Zap className="w-5 h-5 fill-current" />
              </div>
           </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;