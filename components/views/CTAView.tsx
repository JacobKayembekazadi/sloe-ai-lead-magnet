import React from 'react';
import { Sparkles, PlayCircle, BookOpen, Users } from 'lucide-react';
import { Button } from '../ui/Button';

export const CTAView: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-10 animate-fade-in">
      
      <div className="space-y-4">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-4">
          <Sparkles className="w-4 h-4 mr-2" />
          <span>You have the map. Now get the guide.</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Ready to Build with Support?
        </h2>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          The map tells you WHAT to do. The Sloe AI Campus shows you HOW to do it.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {[
            { icon: <PlayCircle className="w-8 h-8 text-emerald-400" />, title: "Video Tutorials", desc: "Step-by-step guides for every day of the map." },
            { icon: <BookOpen className="w-8 h-8 text-indigo-400" />, title: "Code Templates", desc: "Copy-paste code for the Golden Stack." },
            { icon: <Users className="w-8 h-8 text-rose-400" />, title: "Office Hours", desc: "Live support to debug your errors." }
        ].map((item, i) => (
            <div key={i} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 flex flex-col items-center hover:bg-slate-800 transition-colors">
                <div className="mb-4 p-3 bg-slate-900 rounded-full">{item.icon}</div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
            </div>
        ))}
      </div>

      <div className="pt-6">
        <a 
          href="https://sloe-ai-campus-90df68.circle.so/checkout/sloe-ai-campus" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Button size="lg" className="animate-pulse-subtle bg-gradient-to-r from-indigo-600 to-emerald-600 border-0 hover:from-indigo-500 hover:to-emerald-500">
            Get Access Now - $49/mo
          </Button>
        </a>
        <p className="mt-4 text-slate-500 text-sm">Join a community of builders.</p>
      </div>
    </div>
  );
};