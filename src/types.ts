export interface ProjectType {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  stack: string[];
  github?: string;
  demo: string;
  features?: string[];
}
