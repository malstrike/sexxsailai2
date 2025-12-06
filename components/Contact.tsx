import React from 'react';
import { Send, Copy, Shield, CheckCircle, Zap } from 'lucide-react';

const Contact: React.FC = () => {
  const [copied, setCopied] = React.useState(false);
  const telegramHandle = "@sexsei1s";
  const telegramUrl = "https://t.me/sexsei1s";

  const handleCopy = () => {
    navigator.clipboard.writeText(telegramHandle);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden py-20">
      
      {/* Dynamic Background FX */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-blue/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl w-full relative z-10 flex flex-col md:flex-row gap-8 items-stretch">
        
        {/* Main Connection Card */}
        <div className="flex-1 glass-panel rounded-3xl p-1 border border-white/10 relative group hover:border-neon-purple/50 transition-colors duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl" />
          
          <div className="bg-[#0a0a0a]/80 backdrop-blur-xl rounded-[22px] h-full p-8 md:p-12 relative overflow-hidden flex flex-col justify-between">
            
            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]" />
                <span className="text-xs font-mono text-green-500 tracking-widest">SYSTEM ONLINE</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tighter">
                LINK UP
              </h2>
              <p className="text-gray-400 text-lg">
                Direct encrypted connection via Telegram.
              </p>
            </div>

            {/* Action Area */}
            <div className="mt-12 space-y-6">
               <a 
                href={telegramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group/btn relative w-full block"
              >
                {/* Button Glow FX */}
                <div className="absolute -inset-1 bg-gradient-to-r from-neon-purple via-blue-500 to-neon-purple rounded-xl blur opacity-40 group-hover/btn:opacity-100 transition duration-500 group-hover/btn:animate-pulse"></div>
                
                <button className="relative w-full bg-white text-black rounded-xl py-6 px-8 flex items-center justify-between overflow-hidden transition-transform duration-200 active:scale-[0.98]">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10 flex items-center gap-4">
                    <div className="bg-[#0088cc] text-white p-3 rounded-lg">
                      <Send className="w-6 h-6 -ml-0.5 mt-0.5" />
                    </div>
                    <div className="text-left">
                      <div className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-0.5">Contact via</div>
                      <div className="text-xl font-bold">TELEGRAM</div>
                    </div>
                  </div>

                  <div className="relative z-10 hidden sm:flex items-center gap-2 group-hover/btn:translate-x-1 transition-transform">
                    <span className="font-mono font-bold text-neon-purple">t.me/sexsei1s</span>
                    <Zap className="w-4 h-4 text-neon-purple fill-current" />
                  </div>
                </button>
              </a>

              {/* ID Copy */}
              <div 
                onClick={handleCopy}
                className="w-full glass-panel border border-white/5 rounded-xl p-4 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors group/copy"
              >
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-gray-500 group-hover/copy:text-neon-purple transition-colors" />
                  <span className="font-mono text-gray-400">@sexsei1s</span>
                </div>
                {copied ? (
                  <div className="flex items-center gap-2 text-green-400 text-xs font-bold uppercase tracking-wider">
                    <CheckCircle className="w-4 h-4" /> Copied
                  </div>
                ) : (
                  <span className="text-xs text-gray-600 group-hover/copy:text-white transition-colors uppercase tracking-wider">
                    Click to Copy
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Side Panel */}
        <div className="hidden md:flex flex-col gap-4 w-24">
           <div className="flex-1 glass-panel rounded-2xl flex flex-col items-center justify-center gap-8 border border-white/5 animate-[float_4s_ease-in-out_infinite]">
             <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-neon-purple to-transparent" />
             <span className="writing-vertical-rl text-xs font-mono text-gray-600 tracking-[0.3em] rotate-180">
               SEXXSAIL // NETWORK
             </span>
             <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-neon-blue to-transparent" />
           </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;