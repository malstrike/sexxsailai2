import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  { id: 1, title: 'NEON GENESIS', cat: 'UI DESIGN', img: 'https://picsum.photos/600/400?random=1' },
  { id: 2, title: 'VOID WALKER', cat: 'DEVELOPMENT', img: 'https://picsum.photos/600/400?random=2' },
  { id: 3, title: 'CYBER SOUL', cat: 'ART DIRECTION', img: 'https://picsum.photos/600/400?random=3' },
  { id: 4, title: 'DATA CORE', cat: 'SYS ADMIN', img: 'https://picsum.photos/600/400?random=4' },
];

const Gallery: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 px-6 flex flex-col items-center">
      <div className="max-w-7xl w-full">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-2">VISUAL LOGS</h2>
            <p className="text-neon-purple font-mono">SELECTED WORKS 2023-2024</p>
          </div>
          <div className="hidden md:block w-32 h-[1px] bg-white/20"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative h-80 w-full overflow-hidden rounded-2xl cursor-pointer"
            >
              {/* Background Image */}
              <img 
                src={project.img} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-75 group-hover:brightness-100"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end items-start transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs font-mono text-neon-purple mb-2 bg-black/50 px-2 py-1 rounded backdrop-blur-md">
                  {project.cat}
                </span>
                <div className="flex items-center justify-between w-full">
                  <h3 className="text-3xl font-black text-white italic tracking-tighter uppercase">
                    {project.title}
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300 delay-100">
                    <ExternalLink size={20} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;