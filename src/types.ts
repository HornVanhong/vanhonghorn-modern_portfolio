export interface Project {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  points: string[];
  links?: { label: string; url: string }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  points: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  points: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  badge: string; // Ben 10 Alien name style associated with this skill category
  alienColor: string; // green hex
  alienImage?: string; // Optional generated image
  skills: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  snippet: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  fileName: string;
  downloadUrl: string;
}
