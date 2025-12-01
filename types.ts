import React from 'react';

export enum StepType {
  INTRO = 'INTRO',
  STACK = 'STACK',
  SPRINT_PART_1 = 'SPRINT_PART_1',
  SPRINT_PART_2 = 'SPRINT_PART_2',
  PROMPT = 'PROMPT',
  SCRIPT = 'SCRIPT',
  CTA = 'CTA'
}

export interface StepConfig {
  id: StepType;
  title: string;
  subtitle: string;
}

export interface ToolCardProps {
  category: string;
  role: string;
  tools: { name: string; description: string }[];
  icon: React.ReactNode;
}

export interface DaySchedule {
  day: number;
  title: string;
  goal: string;
  action: string;
  output: string;
}