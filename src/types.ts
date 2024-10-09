export interface ProjectType {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  stack: string[];
  github: string;
  demo: string;
  features?: string[]; // Optional, as it wasn't present in all project examples
}
