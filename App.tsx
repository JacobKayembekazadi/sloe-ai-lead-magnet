import React, { useState, useEffect } from 'react';
import { STEPS, DAYS_1_4, DAYS_5_7, SCOPE_DOWN_PROMPT, OUTREACH_SCRIPT } from './constants';
import { StepType } from './types';
import { IntroView } from './components/views/IntroView';
import { GoldenStackView } from './components/views/GoldenStackView';
import { SprintView } from './components/views/SprintView';
import { CopyableView } from './components/views/CopyableView';
import { CTAView } from './components/views/CTAView';
import { Button } from './components/ui/Button';
import { ChevronRight, ChevronLeft, Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentStep = STEPS[currentStepIndex];
  const isFirst = currentStepIndex === 0;
  const isLast = currentStepIndex === STEPS.length - 1;

  // Preload Tailwind animations
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
      @keyframes fade-in-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      @keyframes slide-up { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      @keyframes pulse-subtle { 0%, 100% { opacity: 1; } 50% { opacity: 0.85; transform: scale(0.99); } }
      .animate-fade-in { animation: fade-in 0.6s ease-out forwards; }
      .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; }
      .animate-slide-up { animation: slide-up 0.4s ease-out forwards; }
      .animate-pulse-subtle { animation: pulse-subtle 3s infinite ease-in-out; }
    `;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  const handleNext = () => {
    if (!isLast) {
      setCurrentStepIndex(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrev = () => {
    if (!isFirst) {
      setCurrentStepIndex(prev => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  const renderContent = () => {
    switch (currentStep.id) {
      case StepType.INTRO:
        return <IntroView onNext={handleNext} />;
      case StepType.STACK:
        return <GoldenStackView />;
      case StepType.SPRINT_PART_1:
        return <SprintView days={DAYS_1_4} phaseTitle="The Build: Days 1-4" />;
      case StepType.SPRINT_PART_2:
        return <SprintView days={DAYS_5_7} phaseTitle="The Launch: Days 5-7" />;
      case StepType.PROMPT:
        return (
          <CopyableView 
            title="The Scope Down" 
            subtitle="Day 1 Essential Tool"
            description="Copy and paste this into Gemini or ChatGPT to plan your build."
            content={SCOPE_DOWN_PROMPT} 
            type="prompt" 
          />
        );
      case StepType.SCRIPT:
        return (
          <CopyableView 
            title="First Client Script" 
            subtitle="Get Your First Users"
            description="Send this to 10 local business owners once you have your V1."
            content={OUTREACH_SCRIPT} 
            type="email" 
          />
        );
      case StepType.CTA:
        return <CTAView />;
      default:
        return <div>Unknown step</div>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 flex flex-col font-sans selection:bg-indigo-500/30">
      
      {/* Navigation Bar */}
      <nav className="border-b border-slate-800 bg-slate-900/90 backdrop-blur-md sticky top-0 z-50 transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2 cursor-pointer group" onClick={() => setCurrentStepIndex(0)}>
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-emerald-500 rounded-lg flex items-center justify-center font-bold text-white text-lg shadow-lg group-hover:shadow-indigo-500/20 transition-all">
                7
              </div>
              <span className="font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors">DaySprint</span>
            </div>
            
            {/* Desktop Steps */}
            <div className="hidden md:flex items-center space-x-1">
              {STEPS.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => setCurrentStepIndex(index)}
                  className={`px-3 py-1.5 rounded-md text-sm transition-all duration-200 ${
                    index === currentStepIndex 
                      ? 'bg-slate-800 text-white font-medium shadow-sm ring-1 ring-slate-700' 
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  {index === 0 ? 'Start' : index === 6 ? 'End' : `Step ${index}`}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-400 hover:text-white focus:outline-none bg-slate-800/50 rounded-lg">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-40 bg-slate-900/95 backdrop-blur-xl animate-fade-in p-4 overflow-y-auto">
          <div className="flex flex-col space-y-3 pb-8">
            {STEPS.map((step, index) => (
              <button
                key={step.id}
                onClick={() => {
                  setCurrentStepIndex(index);
                  setIsMenuOpen(false);
                }}
                className={`p-4 rounded-xl text-left border transition-all ${
                  index === currentStepIndex 
                    ? 'bg-slate-800 border-indigo-500 text-white shadow-lg shadow-indigo-500/10' 
                    : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center justify-between">
                    <span className="font-semibold text-lg">{step.title}</span>
                    {index === currentStepIndex && <ChevronRight className="w-5 h-5 text-indigo-400" />}
                </div>
                <div className="text-sm mt-1 opacity-60 font-medium text-slate-500">
                    {step.subtitle}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-8 md:py-12 flex flex-col">
        <div className="flex-1 w-full">
          {renderContent()}
        </div>
      </main>

      {/* Footer / Controls */}
      <footer className="border-t border-slate-800 bg-slate-900/90 backdrop-blur-lg p-4 sticky bottom-0 z-30 shadow-[0_-5px_20px_rgba(0,0,0,0.3)]">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
            <Button 
                variant="outline" 
                size="sm"
                onClick={handlePrev} 
                disabled={isFirst}
                className={`min-w-[70px] md:min-w-[90px] ${isFirst ? "opacity-0 pointer-events-none" : ""}`}
            >
                <ChevronLeft className="w-4 h-4 mr-1" /> Back
            </Button>

            <div className="flex flex-col items-center flex-1 min-w-0">
                <span className="text-xs md:text-sm font-semibold text-white truncate max-w-full px-2 mb-1.5">
                    {currentStep.title}
                </span>
                <div className="flex gap-1.5 overflow-hidden max-w-full">
                    {STEPS.map((_, i) => (
                        <div 
                            key={i} 
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                                i === currentStepIndex 
                                  ? 'w-6 md:w-8 bg-gradient-to-r from-indigo-500 to-emerald-500 shadow-[0_0_8px_rgba(99,102,241,0.5)]' 
                                  : 'w-1.5 md:w-2 bg-slate-700/50'
                            }`} 
                        />
                    ))}
                </div>
            </div>

            <Button 
                variant={isLast ? "secondary" : "primary"}
                size="sm"
                onClick={handleNext}
                disabled={isLast && currentStep.id !== StepType.CTA}
                className={`min-w-[70px] md:min-w-[90px] ${isLast ? "opacity-0 pointer-events-none" : ""}`}
            >
                Next <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
        </div>
      </footer>
    </div>
  );
};

export default App;