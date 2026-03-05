export type Project = {
  id: number
  title: string
  image: string
  description: string
  tags: string[]
  link?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Arcade',
    image: '/arcade .png',
    description: 'An immersive arcade-style digital experience blending retro aesthetics with modern interaction design principles.',
    tags: ['EdTech'],
    link: 'https://arcade-learn-gqp0.onrender.com/', // ← replace with actual URL
  },
  {
    id: 2,
    title: 'Nexity 60',
    image: '/nexity60.png',
    description: 'A forward-thinking platform designed for seamless user engagement, performance, and scalable growth.',
    tags: ['Java based web-app', 'Development'],
    link: 'https://nexity60.onrender.com/', // ← replace with actual URL
  },
  {
    id: 3,
    title: 'WieLearn',
    image: '/wielearn.png',
    description: 'An educational platform empowering students through interactive content and smart learning tools built for impact.',
    tags: ['EdTech', 'Branding'],
    link: 'https://wielearn.com/', // ← replace with actual URL
  },
  {
    id: 4,
    title: 'Aiforkids',
    image: '/aiforkids.png',
    description: 'A creative EdTech startup making AI education fun, accessible, and hands-on for the next generation of builders.',
    tags: ['EdTech', 'Branding', 'vd editing'],
    link: 'https://youtube.com/aiforkids', // ← replace with actual URL
  },
  {
    id: 5,
    title: 'Loveforai',
    image: '/loveforai.png',
    description: 'Two days of immersive learning, networking, and innovation in the heart of Hyderabad\'s tech ecosystem..',
    tags: ['Conference', 'Branding'],
    link: 'https://love-for-ai.vercel.app', // ← replace with actual URL
  },
]
