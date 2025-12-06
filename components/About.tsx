import React from 'react';
import { Terminal, Cpu, Globe } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: 'PROJECTS', value: '142' },
    { label: 'EXPERIENCE', value: '4 YRS' },
    { label: 'CLIENTS', value: 'GLOBAL' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-6 relative">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Image Area */}
        <div className="relative group perspective-1000">
          <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple to-neon-blue rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
          <div className="relative glass-panel rounded-3xl overflow-hidden aspect-[4/5] border border-white/10 p-2 transform transition-transform duration-700 group-hover:rotate-y-12">
            <div className="w-full h-full bg-black/50 rounded-2xl overflow-hidden relative">
               <img 
                src="https://picsum.photos/800/1000?grayscale" 
                alt="Profile" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                <h3 className="text-4xl font-black text-white tracking-tighter">SEXXSAIL</h3>
                {/* Removed specific titles for cleaner look */}
                <div className="h-1 w-12 bg-neon-purple mt-2 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="space-y-8 animate-[fadeInUp_0.5s_ease-out]">
          <h2 className="text-5xl font-bold">
            DIGITAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-white">PRESENCE</span>
          </h2>
          
          <p className="text-gray-400 leading-relaxed text-lg border-l-2 border-neon-purple/50 pl-6">
            I don't just build interfaces; I construct digital experiences that resonate. 
            Merging high-fidelity visuals with seamless interactivity to create 
            something that feels alive. My mission is to elevate the standard of 
            the web.
          </p>

          <div className="grid grid-cols-1 gap-4">
            {[
              { icon: <Terminal className="text-neon-purple" />, title: "Full Stack Systems", desc: "Core to surface engineering." },
              { icon: <Cpu className="text-neon-blue" />, title: "High Performance", desc: "Optimized for speed and scale." },
              { icon: <Globe className="text-white" />, title: "Global Connectivity", desc: "Decentralized thinking." }
            ].map((item, i) => (
              <div key={i} className="glass-panel p-4 rounded-xl flex items-center gap-4 hover:bg-white/5 hover:border-neon-purple/30 transition-all duration-300 cursor-default group">
                <div className="p-3 bg-white/5 rounded-lg group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-white group-hover:text-neon-purple transition-colors">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
            {stats.map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-3xl font-black text-white">{stat.value}</div>
                <div className="text-xs text-gray-500 font-mono tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;