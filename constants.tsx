import React from 'react';
import { Brain, Hammer, Cloud, Calendar, Send, Sparkles, Rocket } from 'lucide-react';
import { DaySchedule, StepConfig, StepType, ToolCardProps } from './types';

export const STEPS: StepConfig[] = [
  { id: StepType.INTRO, title: "The 7-Day AI Sprint", subtitle: "Roadmap Overview" },
  { id: StepType.STACK, title: "The Golden Stack", subtitle: "The Toolkit" },
  { id: StepType.SPRINT_PART_1, title: "The Sprint: Days 1-4", subtitle: "Build Phase" },
  { id: StepType.SPRINT_PART_2, title: "The Sprint: Days 5-7", subtitle: "Launch Phase" },
  { id: StepType.PROMPT, title: "The Scope Down", subtitle: "AI Prompt" },
  { id: StepType.SCRIPT, title: "First Client DM", subtitle: "Outreach Script" },
  { id: StepType.CTA, title: "Start Building", subtitle: "Next Steps" },
];

export const STACK_DATA: ToolCardProps[] = [
  {
    category: "The Brain",
    role: "Planning & Logic",
    tools: [
      { name: "Gemini / ChatGPT", description: "Your Product Manager. Writes your PRD." },
      { name: "n8n / Make", description: "Backend Logic. Connects apps without complex code." }
    ],
    icon: <Brain className="w-6 h-6 text-indigo-400" />
  },
  {
    category: "The Builder",
    role: "Coding & Interface",
    tools: [
      { name: "Cursor", description: "AI Code Editor. Writes 80% of the code." },
      { name: "V0.dev", description: "UI Designer. Generates frontend components." }
    ],
    icon: <Hammer className="w-6 h-6 text-emerald-400" />
  },
  {
    category: "The Host",
    role: "Deployment",
    tools: [
      { name: "Vercel", description: "Hosting. Puts your project on the web." },
      { name: "Supabase", description: "Database. Stores your user data." }
    ],
    icon: <Cloud className="w-6 h-6 text-sky-400" />
  }
];

export const DAYS_1_4: DaySchedule[] = [
  {
    day: 1,
    title: "The 'Anti-Feature' Plan",
    goal: "Define what you are NOT building.",
    action: "Use the 'Scope Down' prompt to cut your idea in half.",
    output: "A simple text file listing the ONE core feature."
  },
  {
    day: 2,
    title: "The Logic Map",
    goal: "Visualize data flow.",
    action: "Draw it out. (Input -> AI Processing -> Output).",
    output: "A screenshot of your n8n workflow or diagram."
  },
  {
    day: 3,
    title: "Ugly But Functional",
    goal: "Get logic working. Ignore design.",
    action: "Build workflow in n8n or basic script in Cursor.",
    output: "A console log or ugly page that processes requests."
  },
  {
    day: 4,
    title: "The UI Wrapper",
    goal: "Make it look like a product.",
    action: "Use V0.dev for dashboard/landing. Copy to Cursor.",
    output: "A functional app running on localhost."
  }
];

export const DAYS_5_7: DaySchedule[] = [
  {
    day: 5,
    title: "Deployment Day",
    goal: "Get it on the internet.",
    action: "Push to GitHub. Connect to Vercel.",
    output: "A live https://your-project.vercel.app link."
  },
  {
    day: 6,
    title: "The 'Bug Hunt'",
    goal: "Break it before users do.",
    action: "Send to 3 friends to break. Fix critical errors.",
    output: "A stable V1.0."
  },
  {
    day: 7,
    title: "The Offer",
    goal: "Package it for sale.",
    action: "Write a one-page PDF explaining value.",
    output: "You are now a builder with a shipped product."
  }
];

export const SCOPE_DOWN_PROMPT = `I want to build an AI tool that [INSERT IDEA, e.g., 'helps real estate agents write listings'].

Act as a brutal Product Manager. I only have 7 days to build and launch this V1.

1. Tell me the ONE core feature that delivers 80% of the value.
2. List 5 features I should cut/ignore for now.
3. Write a step-by-step technical checklist for building that ONE core feature using [Cursor/n8n].`;

export const OUTREACH_SCRIPT = `Subject: Built a tool for your [Task, e.g., listings]

Hey [Name],

I'm a local developer building an AI tool to help [Industry, e.g., Realtors] automate [Pain Point, e.g., writing property descriptions].

I just finished the V1 prototype. It takes your rough notes and instantly turns them into a Zillow-ready listing.

I'm looking for 3 people to test it out for free in exchange for feedback. No catch.

Mind if I send you the link to try?`;
