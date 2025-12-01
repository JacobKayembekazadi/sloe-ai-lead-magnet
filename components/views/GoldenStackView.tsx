import React from 'react';
import { STACK_DATA } from '../../constants';
import { ToolCardProps } from '../../types';

const StackCard: React.FC<ToolCardProps & { delay: number }> = ({ category, role, tools, icon, delay }) => (
  <div 
    className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 flex flex-col h-full animate-slide-up group"
    style={{ animationDelay: `${delay}ms`, animationFillMode: 'both' }}
  >
    <div className="flex items-center gap-4 mb-6">
      <div className="p-3 bg-slate-900 rounded-xl ring-1 ring-slate-700 shrink-0 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="min-w-0">
        <h3 className="text-xl font-bold text-white truncate">{category}</h3>
        <p className="text-xs text-indigo-400 uppercase tracking-wider font-bold truncate">{role}</p>
      </div>
    </div>
    
    <div className="space-y-4 flex-1">
      {tools.map((tool, idx) => (
        <div key={idx} className="bg-slate-900/80 p-4 rounded-xl border border-slate-700/50 hover:border-indigo-500/30 transition-colors">
          <div className="font-bold text-emerald-400 text-sm mb-1">{tool.name}</div>
          <div className="text-slate-400 text-sm leading-snug">{tool.description}</div>
        </div>
      ))}
    </div>
  </div>
);

export const GoldenStackView: React.FC = () => {
  return (
    <div className="space-y-8 md:space-y-12 px-2 md:px-0">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">The Golden Stack</h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
          Stop researching. These are the <span className="text-indigo-400 font-semibold">only tools</span> you need to ship your first AI product.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {STACK_DATA.map((stack, index) => (
          <StackCard key={index} {...stack} delay={index * 150} />
        ))}
      </div>
    </div>
  );
};