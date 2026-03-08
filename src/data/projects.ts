export type ProjectSection = {
  title: string
  description: string
  image?: string
}

export type Project = {
  id: number
  title: string
  image: string
  description: string
  tags: string[]
  link?: string
  year?: string
  role?: string
  techStack?: string[]
  sections?: ProjectSection[]
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Arcade',
    image: '/arcade .png',
    description: 'An immersive arcade-style digital experience blending retro aesthetics with modern interaction design principles.',
    tags: ['EdTech'],
    link: 'https://arcade-learn-gqp0.onrender.com/',
    year: '2024',
    role: 'UI/UX Designer & Developer',
    techStack: ['React 18', 'TypeScript', 'Tailwind CSS', 'Vite', 'Supabase', 'PostgreSQL', 'Node.js', 'Express.js', 'Gemini AI', 'Three.js', 'Framer Motion'],
    sections: [
      {
        title: 'Home Page',
        description: 'A bold, game-style landing experience with animated hero text and a clear call-to-action. The goal was to pull users into the learning world from the first second — using high-contrast visuals and kinetic typography to communicate energy and fun.',
        image: '/arcadelearn/home.png',
      },
      {
        title: 'Roadmap & Courses',
        description: 'Interactive lesson modules designed to feel like gameplay rather than a textbook. Each lesson has a progress bar, embedded media, and short micro-challenges that keep engagement high throughout the session.',
        image: '/arcadelearn/roadmap.png',
      },
      {
        title: 'AI Doubt Solving',
        description: 'Gamified quizzes with real-time feedback, animated correct/wrong indicators, and a scoring system. Designed to reduce test anxiety while still measuring comprehension effectively.',
        image: '/arcadelearn/aidoubtsolving.png',
      },
      {
        title: 'Progress Dashboard',
        description: 'A personal stats view showing streaks, completed modules, time spent, and earned badges. Visualised with clean charts and motivating milestone markers to drive consistency.',
        image: '/arcadelearn/dashboard.png',
      },
      {
        title: 'Jobs Board',
        description: 'A curated jobs section connecting learners with real opportunities matched to their skill level and completed roadmaps — bridging the gap from learning to employment.',
        image: '/arcadelearn/jobs.png',
      },
    ],
  },
  {
    id: 2,
    title: 'Nexity 60',
    image: '/nexity60.png',
    description: 'A forward-thinking platform designed for seamless user engagement, performance, and scalable growth.',
    tags: ['Java based web-app', 'Development'],
    link: 'https://nexity60.onrender.com/',
    year: '2024',
    role: 'Full Stack Developer',
    techStack: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Maven', 'REST API'],
    sections: [
      {
        title: 'Home',
        description: 'The main hub showing a real-time overview of platform activity — key metrics, recent actions, and quick-access shortcuts. Designed for efficiency so power users can navigate the whole app from a single view.',
        image: '/nexity60/home.png',
      },
      {
        title: 'Categories',
        description: 'Full CRUD operations for the platform\'s core entities with inline editing, bulk actions, and real-time validation. Built to handle large datasets without sacrificing responsiveness.',
        image: '/nexity60/categories.png',
      },
      {
        title: 'Science Section',
        description: 'Deep-dive content pages organised by topic — structured to surface the most relevant results instantly with clean filtering and a readable article layout.',
        image: '/nexity60/science.png',
      },
      {
        title: 'Sports Section',
        description: 'A dynamic sports feed with live scores, match highlights, and category-based navigation — built for fast skimming and deep reading in equal measure.',
        image: '/nexity60/sports.png',
      },
    ],
  },
  {
    id: 3,
    title: 'WieLearn',
    image: '/wielearn.png',
    description: 'An educational platform empowering students through interactive content and smart learning tools built for impact.',
    tags: ['EdTech', 'Branding'],
    link: 'https://wielearn.com/',
    year: '2023',
    role: 'Product Designer',
    techStack: ['HTML', 'CSS', 'Bootstrap', 'Express.js', 'Three.js'],
    sections: [
      {
        title: 'Platform Home',
        description: 'The discovery layer — featured courses, trending topics, and personalised recommendations above the fold. Designed to reduce decision fatigue and guide students toward their next learning step immediately.',
        image: '/wielearn/home-aiforkids.png',
      },
      {
        title: 'AI for Class 10',
        description: 'A deep-dive course page with curriculum breakdown, lesson previews, and enrollment CTA. Structured to answer every question a prospective student might have before committing.',
        image: '/wielearn/ai-class-10th.png',
      },
      {
        title: 'Data Science Course',
        description: 'A personal learning hub tracking active courses, progress percentages, upcoming deadlines, and earned certificates. Clean card layout with a calm visual hierarchy that doesn\'t overwhelm.',
        image: '/wielearn/ds-class-10th.png',
      },
      {
        title: 'Q&A Community',
        description: 'Threaded discussions tied to specific lessons, allowing peer Q&A and instructor responses in context. Keeps the conversation anchored to the content so learning stays social and focused.',
        image: '/wielearn/qna.png',
      },
    ],
  },
  {
    id: 4,
    title: 'Aiforkids',
    image: '/aiforkids.png',
    description: 'A creative EdTech startup making AI education fun, accessible, and hands-on for the next generation of builders.',
    tags: ['EdTech', 'Branding', 'Video Editing'],
    link: 'https://youtube.com/aiforkids',
    year: '2024',
    role: 'Brand Designer & Content Strategist',
    techStack: ['Canva', 'Adobe Illustrator', 'After Effects', 'Premiere Pro'],
    sections: [
      {
        title: 'Brand Identity',
        description: 'Developed the full visual identity — logo, color system, typography, and illustration style. The direction was bold, curious, and approachable: something a 10-year-old would trust and a parent would respect.',
      },
      {
        title: 'YouTube Channel',
        description: 'Custom thumbnail templates, channel art, intro/outro animations, and lower-thirds. Consistent visual language across every video helps build recognition and trust at scale.',
        image: '/aiforkids/youtube.png',
      },
      {
        title: 'Course Videos',
        description: 'Module-by-module breakdown of the AI curriculum in a visual, easy-to-digest layout. Each topic card has a difficulty indicator, time estimate, and activity type to help learners self-pace.',
        image: '/aiforkids/yt-courses.png',
      },
      {
        title: 'Video Library',
        description: 'A curated library of AI explainer videos organised by topic and age group — making it easy for kids and parents to find the right content at the right level.',
        image: '/aiforkids/yt-videos.png',
      },
    ],
  },
  {
    id: 5,
    title: 'Loveforai',
    image: '/loveforai.png',
    description: 'Two days of immersive learning, networking, and innovation in the heart of Hyderabad\'s tech ecosystem.',
    tags: ['Conference', 'Branding'],
    link: 'https://love-for-ai.vercel.app',
    year: '2024',
    role: 'Brand Designer & Web Designer',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Supabase', 'Three.js', 'Framer Motion'],
    sections: [
      {
        title: 'Conference Landing',
        description: 'The event\'s digital front door — date, venue, and theme communicated in under 3 seconds. The hero uses ambient animation and a bold typographic lockup to set the tone for a premium AI conference.',
        image: '/loveforai/home.png',
      },
      {
        title: 'Speaker Showcase',
        description: 'Profile cards for all speakers with photos, titles, and talk previews. Designed to build credibility and excitement — the speakers are the draw, so every card needed to feel polished and authoritative.',
      },
      {
        title: 'Schedule Page',
        description: 'A day-wise agenda with sessions filterable by track. Time slots, room labels, and speaker thumbnails all at a glance. Helped attendees plan their conference days without confusion.',
      },
      {
        title: 'Registration Flow',
        description: 'A minimal, focused ticket selection and attendee details flow. Removed every unnecessary field and step to maximise conversion — from landing to registered in under 2 minutes.',
      },
    ],
  },
]
