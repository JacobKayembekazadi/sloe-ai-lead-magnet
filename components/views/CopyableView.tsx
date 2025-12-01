import React, { useState } from 'react';
import { Copy, Check, Terminal, Mail } from 'lucide-react';
import { Button } from '../ui/Button';

interface CopyableViewProps {
  title: string;
  subtitle: string;
  description: string;
  content: string;
  type: 'prompt' | 'email';
}

export const CopyableView: React.FC<CopyableViewProps> = ({ title, subtitle, description, content, type }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 md:space-y-10 animate-fade-in px-2 md:px-0">
      <div className="text-center space-y-4">
        <div className="inline-flex p-4 rounded-full bg-slate-800 ring-1 ring-slate-700 mb-2 shadow-lg">
          {type === 'prompt' ? <Terminal className="w-8 h-8 text-emerald-400" /> : <Mail className="w-8 h-8 text-indigo-400" />}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
        <div className="space-y-2">
          <p className="text-lg md:text-xl text-indigo-400 font-medium">{subtitle}</p>
          <p className="text-slate-400 max-w-lg mx-auto text-sm md:text-base leading-relaxed">{description}</p>
        </div>
      </div>

      <div className="relative group w-full">
        {/* Decorative blur behind */}
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-2xl opacity-20 group-hover:opacity-30 transition duration-500 blur-lg"></div>
        
        <div className="relative bg-slate-900 rounded-xl border border-slate-700 overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-800/80 border-b border-slate-700 backdrop-blur-sm">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
            </div>
            <div className="flex items-center">
               <span className="text-[10px] md:text-xs text-slate-500 uppercase font-mono tracking-widest font-bold">{type === 'prompt' ? 'GEMINI / CHATGPT' : 'EMAIL CLIENT'}</span>
            </div>
            <Button 
              size="sm" 
              variant="ghost" 
              onClick={handleCopy}
              className={copied ? "text-emerald-400 hover:text-emerald-300 bg-emerald-500/10" : "hover:bg-slate-700"}
            >
              {copied ? (
                <span className="flex items-center text-xs md:text-sm font-medium"><Check className="w-3 h-3 md:w-4 md:h-4 mr-1.5" /> Copied</span>
              ) : (
                <span className="flex items-center text-xs md:text-sm font-medium"><Copy className="w-3 h-3 md:w-4 md:h-4 mr-1.5" /> Copy</span>
              )}
            </Button>
          </div>
          
          {/* Content */}
          <div className="p-5 md:p-8 bg-slate-950/80 overflow-x-auto">
            <pre className="text-slate-300 font-mono text-xs md:text-sm whitespace-pre-wrap leading-relaxed selection:bg-indigo-500/30 min-w-full font-light">
              {content}
            </pre>
          </div>
        </div>
      </div>

      <div className="text-center px-4">
        <p className="text-xs text-slate-500 italic flex items-center justify-center gap-2">
           <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
          {type === 'prompt' 
            ? "Tip: Iterate on this prompt if the initial results aren't specific enough." 
            : "Tip: Customize the bracketed sections before sending."}
        </p>
      </div>
    </div>
  );
};