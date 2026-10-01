/**
 * Priyadarshini.S — Portfolio Data
 *
 * Single source of truth for all portfolio content.
 * Update your personal links/email in the `links` object below.
 * Everything else flows through automatically.
 */

export const personalInfo = {
  name:     'Priyadarshini.S',
  initials: 'PS',
  role:     'Computer Science Engineering Student',
  degree:   'B.Tech Computer Science & Engineering',
  semester: '3rd Semester',
  status:   'Open to Internships & Hackathons',
  tagline:  'Computer Science Engineer Building Resilient Software That Solves Real Problems.',
  intro:
    'Passionate about engineering clean, efficient, and reliable software. ' +
    'I approach problems from first principles — analyzing algorithmic complexity, ' +
    'designing normalized data models, and building interfaces people actually use.',
  interests: [
    'Software Engineering',
    'Artificial Intelligence / Machine Learning',
    'Cloud Computing',
    'Cybersecurity',
    'Data & Backend Systems',
  ],
  links: {
    github:   'https://github.com/YOUR_GITHUB_PROFILE',
    linkedin: 'https://linkedin.com/in/YOUR_LINKEDIN_PROFILE',
    leetcode: 'https://leetcode.com/YOUR_LEETCODE_PROFILE',
    email:    'YOUR_EMAIL@example.com',
    resume:   '#resume',
  },
};

export const navLinks = [
  { name: 'About',        href: '#about'        },
  { name: 'Skills',       href: '#skills'       },
  { name: 'Projects',     href: '#projects'     },
  { name: 'Experience',   href: '#experience'   },
  { name: 'Education',    href: '#education'    },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Coding',       href: '#coding'       },
  { name: 'Contact',      href: '#contact'      },
];

export const aboutData = {
  headline: 'Passionate about engineering reliable systems & intelligent algorithms.',
  story: [
    'As a Computer Science Engineering student in my 3rd semester, I enjoy transforming theoretical concepts into working software that solves real-world challenges.',
    'Whether it is designing normalized PostgreSQL schemas, building responsive React interfaces, or contributing to hackathon sprints like the Smart India Hackathon, I approach every challenge with curiosity, discipline, and attention to detail.',
    'My current technical exploration spans software engineering, relational database design, applied AI/ML pipelines, and foundational principles in cloud architecture and cybersecurity.',
  ],
  highlights: [
    { label: 'Current Status',      value: '3rd Semester CSE'         },
    { label: 'Core Focus',          value: 'Algorithms, Data & AI'    },
    { label: 'Hackathon',           value: 'Smart India Hackathon'    },
    { label: 'Practice',            value: 'Daily Coding & LeetCode'  },
  ],
};

export const skillCategories = [
  {
    category: 'Programming Languages',
    accent:   'green',
    description: 'Core languages for algorithms, systems, and data-structure implementations.',
    skills: [
      { name: 'C',      status: 'Core'      },
      { name: 'C++',    status: 'Core'      },
      { name: 'Java',   status: 'Core'      },
      { name: 'Python', status: 'Proficient' },
    ],
  },
  {
    category: 'Web Technologies',
    accent:   'cyan',
    description: 'Frontend tooling for responsive, component-driven user interfaces.',
    skills: [
      { name: 'HTML',         status: 'Proficient' },
      { name: 'CSS',          status: 'Proficient' },
      { name: 'JavaScript',   status: 'Proficient' },
      { name: 'React',        status: 'Proficient' },
      { name: 'Vite',         status: 'Proficient' },
      { name: 'Tailwind CSS', status: 'Proficient' },
    ],
  },
  {
    category: 'Databases & Storage',
    accent:   'amber',
    description: 'Relational data modeling, schema design, and query optimization.',
    skills: [
      { name: 'PostgreSQL', status: 'Proficient' },
      { name: 'MySQL',      status: 'Proficient' },
      { name: 'SQL',        status: 'Core'       },
    ],
  },
  {
    category: 'Developer Tools',
    accent:   'purple',
    description: 'Version control, IDE environments, and collaborative dev standards.',
    skills: [
      { name: 'Git',     status: 'Core'      },
      { name: 'GitHub',  status: 'Core'      },
      { name: 'VS Code', status: 'Proficient' },
    ],
  },
  {
    category: 'AI & Data Science',
    accent:   'teal',
    description: 'Libraries for data manipulation, numerical computing, and machine learning.',
    skills: [
      { name: 'NumPy',        status: 'Proficient' },
      { name: 'Pandas',       status: 'Proficient' },
      { name: 'Scikit-learn', status: 'Proficient' },
    ],
  },
  {
    category: 'Cloud & Cybersecurity',
    accent:   'rose',
    description: 'Areas actively being explored through self-study and curriculum.',
    skills: [
      { name: 'Cloud Computing',  status: 'Exploring' },
      { name: 'Cybersecurity',    status: 'Exploring' },
      { name: 'Network Security', status: 'Learning'  },
    ],
  },
];

export const featuredProjects = [
  {
    id:          'smart-logistics-ai',
    title:       'AI-Based Smart Logistics & Accessibility Intelligence Platform',
    subtitle:    'AI / Database / Regional Infrastructure',
    description:
      'An AI-enabled platform designed to optimize logistics, route intelligence, terrain accessibility scoring, and decision-making for the North Eastern Region of India.',
    problemSolved:
      'Rugged terrain and volatile weather in north-eastern India severely impede supply chains and transit. This platform computes multi-modal route accessibility indices, accounting for elevation gradients and infrastructure bottlenecks.',
    technologies: ['Python', 'AI/ML', 'FastAPI', 'PostgreSQL', 'React'],
    githubUrl:    'https://github.com/YOUR_GITHUB_LINK/smart-logistics-platform',
    liveDemoUrl:  null,
    highlights: [
      'Normalized PostgreSQL schema modeling regional transit nodes and vulnerability factors',
      'Heuristic routing algorithms factoring topographical friction and altitude resistance',
      'Interactive React dashboard displaying real-time accessibility indexes',
    ],
  },
  {
    id:          'leetcode-solutions',
    title:       'LeetCode Algorithmic Solutions Repository',
    subtitle:    'Algorithms / Data Structures',
    description:
      'A structured, version-controlled collection of algorithmic problem solutions demonstrating consistency, complexity optimization, and clean implementation across multiple languages.',
    problemSolved:
      'Provides tested, cleanly documented implementations of core CS patterns (sliding window, binary search, tree traversals, graphs, dynamic programming) with Big-O time and space proofs.',
    technologies: ['C', 'Java', 'Python', 'Data Structures', 'Algorithms'],
    githubUrl:    'https://github.com/YOUR_GITHUB_LINK/leetcode-solutions',
    liveDemoUrl:  null,
    highlights: [
      'Systematic classification by technique: DP, Graph Traversals, Binary Trees, Two Pointers',
      'Detailed time O(n) and space O(n) complexity documentation per implementation',
      'Multi-language adaptability: low-level pointer control (C) and OOP structure (Java)',
    ],
  },
  {
    id:          'personal-portfolio',
    title:       'Personal Engineering Portfolio',
    subtitle:    'Full-Stack Web Engineering',
    description:
      'A responsive, accessible developer portfolio built with React, Vite, and Tailwind CSS — designed for high recruiter signal, fast load times, and clean UI architecture.',
    problemSolved:
      'Eliminates bloated templates in favour of a clean, high-contrast engineering interface that communicates technical value, project architecture, and authentic credentials in seconds.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Git', 'GitHub'],
    githubUrl:    'https://github.com/YOUR_GITHUB_LINK/priyadarshini-portfolio',
    liveDemoUrl:  null,
    highlights: [
      'Centralized data architecture — all content editable from one file',
      'Pure dark theme with zero FOUC using system color-scheme sync',
      '100% responsive, semantic HTML with keyboard-navigable components',
    ],
  },
];

export const experienceData = [
  {
    id:           'sih-hackathon',
    title:        'Database & Data Engineering / AI-ML Contribution',
    organization: 'Smart India Hackathon (SIH)',
    type:         'National Hackathon',
    period:       'Team Collaboration Sprint',
    status:       'Project Contribution',
    description:
      'Contributed to building an end-to-end technology solution addressing high-impact, real-world problem statements under rigorous collaborative sprint conditions.',
    responsibilities: [
      'PostgreSQL database design — normalized ER schemas for logistics routes and accessibility metrics',
      'Data organization & preprocessing — structured raw regional data into clean relational tables',
      'Backend & AI integration — connected heuristic routing logic with the FastAPI backend service',
      'Route & terrain intelligence — mapped accessibility criteria factoring elevation and transit constraints',
      'Agile sprint collaboration — coordinated across frontend, backend, and data modeling streams',
      'Git/GitHub version control — strict feature branching, descriptive commits, and peer code reviews',
    ],
    technologies: ['PostgreSQL', 'Python', 'FastAPI', 'Git', 'GitHub', 'Data Modeling'],
  },
];

export const educationData = {
  degree:        'Bachelor of Technology in Computer Science & Engineering',
  currentStatus: '3rd Semester',
  description:
    'Undergraduate engineering curriculum covering the mathematical, systemic, and algorithmic foundations of modern computer science.',
  focusAreas: [
    'Data Structures & Algorithms',
    'Programming Foundations — C, C++, Java, Python',
    'Relational Databases — PostgreSQL, MySQL, SQL',
    'Software Engineering & Web Technologies — React, Tailwind CSS',
    'Applied AI / Machine Learning — NumPy, Pandas, Scikit-learn',
    'Cloud Computing & Cybersecurity — Exploring / Learning',
  ],
};

export const achievementsData = [
  {
    id:          'sih-hackathon',
    category:    'Hackathons',
    title:       'Smart India Hackathon (SIH)',
    description: 'Team contribution to building an AI and database-driven platform addressing logistics and accessibility challenges for the North Eastern Region of India.',
    status:      'Project Contribution',
    accent:      'green',
  },
  {
    id:          'coding-practice',
    category:    'Coding Practice',
    title:       'Algorithmic Problem-Solving Practice',
    description: 'Consistent practice solving data structure and algorithmic problems in C, Java, and Python — covering patterns like DP, graphs, trees, and binary search.',
    status:      'Active Practice',
    accent:      'amber',
  },
  {
    id:          'certifications',
    category:    'Certifications',
    title:       'Technical Certifications',
    description: 'Self-driven technical study and certification milestones in software engineering, programming, and cloud technologies.',
    status:      'In Progress',
    accent:      'purple',
  },
  {
    id:          'workshops',
    category:    'Technical Workshops',
    title:       'Workshops & Applied Learning',
    description: 'Active participation in hands-on workshops on modern software development, AI/ML tools, and database design.',
    status:      'Active Learning',
    accent:      'cyan',
  },
  {
    id:          'academic',
    category:    'Academic',
    title:       'Computer Science Engineering',
    description: 'Continuous learning and academic progression through a rigorous CSE undergraduate curriculum covering core computing sciences.',
    status:      '3rd Semester',
    accent:      'teal',
  },
];

export const codingProfilesData = {
  headline:    'Algorithmic Rigor & Consistent Practice',
  subheadline: 'Demonstrated commitment to foundational data structures, clean version control, and problem-solving.',
  platforms: [
    {
      name:        'LeetCode',
      role:        'Algorithmic Problem Solving',
      link:        'https://leetcode.com/YOUR_LEETCODE_PROFILE',
      description: 'Practicing data structures and algorithms in C, Java, and Python with focus on optimal complexity.',
      highlights:  ['Data Structures', 'Algorithms', 'Time/Space Optimization'],
      badge:       'Active Practice',
    },
    {
      name:        'GitHub',
      role:        'Version Control & Repositories',
      link:        'https://github.com/YOUR_GITHUB_PROFILE',
      description: 'Hosting project repositories, hackathon codebases, and algorithmic practice with clean commit hygiene.',
      highlights:  ['Git Workflows', 'Clean Commits', 'Modular Codebases'],
      badge:       'Project Repositories',
    },
  ],
  coreTopics: [
    { topic: 'Arrays & Strings',       description: 'Two pointers, sliding window, prefix sums, cycle detection'                   },
    { topic: 'Linked Lists & Trees',   description: 'Binary search trees, level-order traversals, recursion, depth'               },
    { topic: 'Graphs & Search',        description: 'BFS, DFS, graph representations, pathfinding'                                },
    { topic: 'Dynamic Programming',    description: 'Memoization and iterative tabulation for optimal subproblems'                 },
    { topic: 'Database Queries',       description: 'Relational joins, aggregation, grouping, indexing, and 3NF normalization'    },
  ],
};

export const contactData = {
  title:    "Let's build something meaningful together.",
  subtitle: 'Whether you have an internship opportunity, a hackathon invitation, or want to discuss software and technology — my inbox is always open.',
};
