import React from 'react';
import { Rocket, ArrowRight, Zap } from 'lucide-react';
import { Button } from '../ui/Button';

interface IntroViewProps {
  onNext: () => void;
}

export const IntroView: React.FC<IntroViewProps> = ({ onNext }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8 md:space-y-12 animate-fade-in py-8 px-4">
      
      {/* Hero Icon */}
      <div className="relative mt-4 md:mt-0">
        <div className="absolute -inset-8 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-3xl border border-slate-700 shadow-2xl shadow-indigo-500/20 transform hover:scale-105 transition-transform duration-500">
          <Rocket className="w-16 h-16 md:w-20 md:h-20 text-indigo-400" strokeWidth={1.5} />
        </div>
      </div>
      
      {/* Main Heading */}
      <div className="space-y-6 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/50 border border-indigo-500/30 text-indigo-300 text-xs md:text-sm font-medium mb-2">
          <Zap className="w-3 h-3 md:w-4 md:h-4" />
          <span>Stop Planning. Start Shipping.</span>
        </div>
        
        <h1 className="text-4xl md:text-7xl font-black tracking-tight text-white leading-[1.1]">
          The 7-Day <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400">
            AI Build Sprint
          </span>
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
          From "Tutorial Hell" to a <span className="text-white font-medium">Paid Builder</span> in exactly one week.
        </p>
      </div>

      {/* Description Box */}
      <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 max-w-xl w-full mx-auto">
        <p className="text-sm md:text-base text-slate-300 leading-relaxed">
          Stop wasting time researching stacks. This interactive roadmap gives you the <span className="text-indigo-400 font-bold">exact tools</span>, <span className="text-indigo-400 font-bold">schedule</span>, and <span className="text-indigo-400 font-bold">copy-paste scripts</span> you need to launch.
        </p>
      </div>

      {/* CTA */}
      <div className="pt-4 w-full md:w-auto">
        <Button onClick={onNext} size="lg" icon={<ArrowRight className="w-5 h-5" />} className="w-full md:w-auto py-4 text-lg shadow-xl shadow-indigo-500/20 hover:shadow-indigo-500/40">
          Start The Roadmap
        </Button>
      </div>
    </div>
  );
};