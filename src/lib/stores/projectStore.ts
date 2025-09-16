import { writable } from 'svelte/store';
import type { ProjectData } from '../types/projectType';

const initialProjects: ProjectData[] = [
  {
    id: 'macOS-Themed-Portfolio',
    name: 'macOS Themed Portfolio',
    icon: 'svelte',
    shortDescription: 'An interactive portfolio website inspired by the macOS interface, built with SvelteKit, TailwindCSS, and TypeScript.',
    githubUrl: 'https://github.com/ashirabdulrehmandev/macOS-Themed-Portfolio',
    readmeUrl: 'https://raw.githubusercontent.com/ashirabdulrehman/macOS-Themed-Portfolio/main/README.md',
    technologies: ['Svelte', 'TypeScript', 'TailwindCSS'],
    type: 'application'
  },
  {
    id: 'Ecomerece Website',
    name: 'Ecomerece Website',
    icon: 'nextjs',
    shortDescription: 'An interactive Ecomerece website , built with NextJs, Sass, and MongoDB.',
    githubUrl: 'https://github.com/ashirabdulrehmandev/macOS-Themed-Portfolio',
    readmeUrl: 'https://raw.githubusercontent.com/ashirabdulrehman/macOS-Themed-Portfolio/main/README.md',
    technologies: ['NextJs', 'Sass', 'MongoDB'],
    type: 'application'
  },
  {
    id: 'Music Player',
    name: 'Music Player',
    icon: 'react',
    shortDescription: 'An interactive and functional Music PLayer , built with React and Sass.',
    githubUrl: 'https://github.com/ashirabdulrehmandev/spotify-clone',
    readmeUrl: 'https://raw.githubusercontent.com/ashirabdulrehmandev/spotify-clone/refs/heads/main/README.md',
    technologies: ['React', 'Sass'],
    type: 'application'
  },
];

export const projects = writable<ProjectData[]>(initialProjects);