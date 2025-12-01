import React from 'react';
import { DaySchedule } from '../../types';

interface SprintViewProps {
  days: DaySchedule[];
  phaseTitle: string;
}

export const SprintView: React.FC<SprintViewProps> = ({ days, phaseTitle }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-6">
      <div className="text-center mb-10 md:mb-16 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">{phaseTitle}</h2>
        <p className="text-slate-400 text-sm md:text-lg max-w-xl mx-auto">One goal per day. No distractions. Pure execution.</p>
      </div>

      <div className="relative">
        {/* Vertical Line */}
        {/* Mobile: Left aligned (left-6). Desktop: Centered (left-1/2) */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800/50 md:bg-slate-800 md:-translate-x-1/2 rounded-full"></div>
        
        <div className="space-y-12 md:space-y-24 pb-12">
          {days.map((day, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={day.day} className="relative flex flex-col md:flex-row md:items-center w-full group">
                
                {/* Mobile: Horizontal Connector. Desktop: Hidden */}
                <div className="md:hidden absolute left-6 top-8 w-8 h-[2px] bg-indigo-500/30"></div>

                {/* Content Card Wrapper */}
                <div className={`w-full md:w-1/2 flex-1 pl-16 md:pl-0 ${isLeft ? 'md:pr-16 md:text-right' : 'md:order-2 md:pl-16 md:text-left'}`}>
                  
                  <div 
                    className={`bg-slate-800/80 backdrop-blur-sm p-5 md:p-8 rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1 animate-fade-in-up relative overflow-hidden`}
                    style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'both' }}
                  >
                    {/* Glow Effect */}
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-all duration-500"></div>

                    {/* Day Tag */}
                    <div className={`inline-block mb-3 px-3 py-1 rounded-full bg-slate-900/50 border border-slate-700 text-indigo-400 font-mono text-xs font-bold tracking-wider shadow-sm`}>
                      DAY {day.day}
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">{day.title}</h3>
                    <p className="text-slate-400 text-sm md:text-base font-medium mb-6 italic border-l-2 border-indigo-500/30 pl-3 md:border-none md:pl-0">{day.goal}</p>
                    
                    <div className={`space-y-4 ${isLeft ? 'md:items-end' : 'md:items-start'} flex flex-col`}>
                      <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-800 w-full">
                        <span className="block font-bold text-slate-500 text-[10px] uppercase tracking-widest mb-1">Action</span>
                        <span className="text-slate-300 text-sm leading-relaxed">{day.action}</span>
                      </div>
                      <div className="bg-emerald-950/20 p-3 rounded-lg border border-emerald-900/30 w-full">
                        <span className="block font-bold text-emerald-600/70 text-[10px] uppercase tracking-widest mb-1">Output</span>
                        <span className="text-emerald-400 text-sm font-medium">{day.output}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Point (The Dot) */}
                <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 mt-8 md:mt-0 flex items-center justify-center w-5 h-5 md:w-10 md:h-10 rounded-full bg-slate-900 border-4 border-slate-800 z-10 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.6)] animate-pulse-subtle"></div>
                </div>

                {/* Desktop Spacer */}
                <div className={`hidden md:block w-1/2 ${isLeft ? 'order-2' : 'order-1'}`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};