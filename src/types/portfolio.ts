export type ProjectCategory = 'agents' | 'ml-vision' | 'engineering';

export interface Project {
  id: string;
  title: string;
  domain: string;
  category: ProjectCategory;
  categoryLabel: string;
  description: string;
  technologies: string[];
  highlights: string[];
  isFeatured?: boolean;
}

export interface SkillGroup {
  id: string;
  number: number;
  name: string;
  skills: string[];
}

export interface ExperienceRecord {
  period: string;
  role: string;
  type: string;
  focus: string;
  bullets: string[];
}
