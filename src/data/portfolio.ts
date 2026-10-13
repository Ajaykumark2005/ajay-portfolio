export type Palette = { from: string; via: string; to: string; accent: string };

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  live?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export type Certification = { issuer: string; name: string; link: string };

export type Skill = { name: string; mono: string; note?: string };

export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export type ProfileId = 'ajay' | 'recruiter' | 'developer' | 'creative';

export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const profile = {
  "fullName": "Ajay Kumar K",
  "displayName": "Ajay Kumar K",
  "firstName": "AJAY",
  "seriesTag": "THE SERIES",
  "originalLabel": "AN AJAY KUMAR ORIGINAL",
  "role": "Aspiring AI Engineer & Forward Deployed Engineer",
  "tagline": [
    "Aspiring AI Engineer",
    "Future FDE",
    "MSc AI & ML"
  ],
  "intro": "I’m Ajay, an MSc AI & ML student at SRM in Chennai. I’m building practical web applications and working toward AI engineering and forward deployed engineering—turning real problems into useful software.",
  "location": "Chennai, India",
  "email": "ajaykumarak0308@gmail.com",
  "links": {
    "linkedin": "https://www.linkedin.com/in/ajaykumarak04/",
    "github": "https://github.com/Ajaykumark2005"
  },
  "portrait": {
    "src": "/assets/ajay-cutout.png",
    "srcSet": "/assets/ajay-cutout.png 1024w",
    "alt": "Portrait of Ajay Kumar K"
  },
  "interests": [
    "AI Engineering",
    "Forward Deployed Engineering",
    "Practical AI Applications"
  ]
};

export const education = [
  {
    "school": "SRM",
    "place": "India",
    "degree": "MSc — Artificial Intelligence and Machine Learning",
    "period": "Pursuing · Expected May 2028",
    "score": "In progress"
  }
];

export const projects: Project[] = [
  {
    "id": "studyflow",
    "title": "Studyflow",
    "year": "2026",
    "genre": "Learning Platform · Full Stack",
    "logline": "A learning platform bringing notes, study schedules, progress tracking, and videos into one place.",
    "stack": [
      "TypeScript",
      "React",
      "Vinext",
      "Cloudflare Workers",
      "D1",
      "R2",
      "Supabase Auth"
    ],
    "build": [
      "Developed Studyflow with AI-assisted implementation, bringing learning tools into a single web application.",
      "Connected account access, saved notes, study progress, schedules, and video features."
    ],
    "features": [
      "Student accounts",
      "Notes and study schedules",
      "Progress tracking",
      "Video uploads and playback"
    ],
    "metrics": [],
    "live": "https://studyflow.ajaykpkarupu.chatgpt.site",
    "palette": {
      "from": "#04121f",
      "via": "#0f4c6e",
      "to": "#05080d",
      "accent": "#4cc9ff"
    },
    "motif": "tenants"
  },
  {
    "id": "bulk-mail-system",
    "title": "Bulk Mail System",
    "year": "Personal project",
    "genre": "Email Campaigns · Individual Project",
    "logline": "A full-stack application for managing contacts, sending bulk emails, scheduling campaigns, and tracking delivery status.",
    "stack": [
      "React",
      "Node.js",
      "Express",
      "MongoDB"
    ],
    "build": [
      "Designed and implemented this individual full-stack project using React, Node.js, Express, and MongoDB.",
      "Built contact management and email scheduling workflows with delivery-status tracking."
    ],
    "features": [
      "Contact management",
      "Bulk email sending",
      "Campaign scheduling",
      "Real-time delivery status"
    ],
    "metrics": [],
    "github": "https://github.com/Ajaykumark2005/BULK-MAIL-SYSTEM",
    "palette": {
      "via": "#6e0d1d",
      "to": "#09070a",
      "accent": "#ff3d5a",
      "from": "#24060b"
    },
    "motif": "flow"
  }
];

export const achievements: Achievement[] = [];

export const certifications: Certification[] = [];

export const skillCategories: SkillCategory[] = [
  {
    "id": "projects",
    "title": "Project technologies",
    "subtitle": "Used in my featured projects; no proficiency rating",
    "skills": [
      {
        "name": "React",
        "mono": "Re"
      },
      {
        "name": "TypeScript",
        "mono": "Ty"
      },
      {
        "name": "Node.js",
        "mono": "No"
      },
      {
        "name": "Express",
        "mono": "Ex"
      },
      {
        "name": "MongoDB",
        "mono": "Mo"
      },
      {
        "name": "Cloudflare Workers",
        "mono": "Cl"
      },
      {
        "name": "D1",
        "mono": "D1"
      },
      {
        "name": "R2",
        "mono": "R2"
      },
      {
        "name": "Supabase Auth",
        "mono": "Su"
      }
    ]
  },
  {
    "id": "learn-0",
    "title": "Programming foundations",
    "subtitle": "Learning roadmap · goals, not a proficiency claim",
    "skills": [
      {
        "name": "Python",
        "mono": "Py"
      },
      {
        "name": "JavaScript/TypeScript",
        "mono": "Ja"
      },
      {
        "name": "SQL",
        "mono": "SQ"
      },
      {
        "name": "Data structures",
        "mono": "Da"
      },
      {
        "name": "Debugging",
        "mono": "De"
      },
      {
        "name": "Git/GitHub",
        "mono": "Gi"
      },
      {
        "name": "Terminal basics",
        "mono": "Te"
      }
    ]
  },
  {
    "id": "learn-1",
    "title": "Full-stack development",
    "subtitle": "Learning roadmap · goals, not a proficiency claim",
    "skills": [
      {
        "name": "HTML/CSS",
        "mono": "HT"
      },
      {
        "name": "React",
        "mono": "Re"
      },
      {
        "name": "HTTP/REST APIs",
        "mono": "HT"
      },
      {
        "name": "FastAPI",
        "mono": "Fa"
      },
      {
        "name": "Node.js/Express",
        "mono": "No"
      },
      {
        "name": "Authentication",
        "mono": "Au"
      },
      {
        "name": "Testing",
        "mono": "Te"
      }
    ]
  },
  {
    "id": "learn-2",
    "title": "Databases and data",
    "subtitle": "Learning roadmap · goals, not a proficiency claim",
    "skills": [
      {
        "name": "PostgreSQL",
        "mono": "Po"
      },
      {
        "name": "MongoDB",
        "mono": "Mo"
      },
      {
        "name": "Data modelling",
        "mono": "Da"
      },
      {
        "name": "NumPy",
        "mono": "Nu"
      },
      {
        "name": "pandas",
        "mono": "pa"
      },
      {
        "name": "Data cleaning",
        "mono": "Da"
      },
      {
        "name": "Data pipelines",
        "mono": "Da"
      }
    ]
  },
  {
    "id": "learn-3",
    "title": "AI/ML foundations",
    "subtitle": "Learning roadmap · goals, not a proficiency claim",
    "skills": [
      {
        "name": "Linear algebra",
        "mono": "Li"
      },
      {
        "name": "Probability",
        "mono": "Pr"
      },
      {
        "name": "Statistics",
        "mono": "St"
      },
      {
        "name": "scikit-learn",
        "mono": "sc"
      },
      {
        "name": "Model evaluation",
        "mono": "Mo"
      },
      {
        "name": "PyTorch",
        "mono": "Py"
      }
    ]
  },
  {
    "id": "learn-4",
    "title": "AI applications",
    "subtitle": "Learning roadmap · goals, not a proficiency claim",
    "skills": [
      {
        "name": "LLM APIs",
        "mono": "LL"
      },
      {
        "name": "Prompting",
        "mono": "Pr"
      },
      {
        "name": "Structured outputs",
        "mono": "St"
      },
      {
        "name": "Embeddings",
        "mono": "Em"
      },
      {
        "name": "Vector search",
        "mono": "Ve"
      },
      {
        "name": "RAG",
        "mono": "RA"
      },
      {
        "name": "Tool calling",
        "mono": "To"
      },
      {
        "name": "Agents",
        "mono": "Ag"
      },
      {
        "name": "MCP",
        "mono": "MC"
      }
    ]
  },
  {
    "id": "learn-5",
    "title": "AI quality",
    "subtitle": "Learning roadmap · goals, not a proficiency claim",
    "skills": [
      {
        "name": "Evaluation datasets",
        "mono": "Ev"
      },
      {
        "name": "Retrieval testing",
        "mono": "Re"
      },
      {
        "name": "Hallucination handling",
        "mono": "Ha"
      },
      {
        "name": "Prompt-injection defences",
        "mono": "Pr"
      },
      {
        "name": "Privacy",
        "mono": "Pr"
      },
      {
        "name": "Human review",
        "mono": "Hu"
      }
    ]
  },
  {
    "id": "learn-6",
    "title": "Deployment and reliability",
    "subtitle": "Learning roadmap · goals, not a proficiency claim",
    "skills": [
      {
        "name": "Docker",
        "mono": "Do"
      },
      {
        "name": "Cloud platforms",
        "mono": "Cl"
      },
      {
        "name": "CI/CD",
        "mono": "CI"
      },
      {
        "name": "Secrets management",
        "mono": "Se"
      },
      {
        "name": "Logging",
        "mono": "Lo"
      },
      {
        "name": "Monitoring",
        "mono": "Mo"
      },
      {
        "name": "Queues",
        "mono": "Qu"
      },
      {
        "name": "Retries",
        "mono": "Re"
      },
      {
        "name": "Cost and latency",
        "mono": "Co"
      }
    ]
  },
  {
    "id": "learn-7",
    "title": "FDE practice",
    "subtitle": "Learning roadmap · goals, not a proficiency claim",
    "skills": [
      {
        "name": "Customer discovery",
        "mono": "Cu"
      },
      {
        "name": "Requirements gathering",
        "mono": "Re"
      },
      {
        "name": "System integration",
        "mono": "Sy"
      },
      {
        "name": "Rapid prototypes",
        "mono": "Ra"
      },
      {
        "name": "Demos",
        "mono": "De"
      },
      {
        "name": "Documentation",
        "mono": "Do"
      },
      {
        "name": "Troubleshooting",
        "mono": "Tr"
      },
      {
        "name": "Business outcomes",
        "mono": "Bu"
      }
    ]
  }
];

export const skillEvidence: Record<string, string[]> = {
  "TypeScript": [
    "Studyflow"
  ],
  "React": [
    "Studyflow",
    "Bulk Mail System"
  ],
  "Vinext": [
    "Studyflow"
  ],
  "Cloudflare Workers": [
    "Studyflow"
  ],
  "D1": [
    "Studyflow"
  ],
  "R2": [
    "Studyflow"
  ],
  "Supabase Auth": [
    "Studyflow"
  ],
  "Node.js": [
    "Bulk Mail System"
  ],
  "Express": [
    "Bulk Mail System"
  ],
  "MongoDB": [
    "Bulk Mail System"
  ]
};

export const seasons: Season[] = [
  {
    "number": 1,
    "title": "Learning to Build",
    "period": "In progress",
    "synopsis": "An MSc in AI & ML at SRM, alongside practical web projects.",
    "episodes": [
      {
        "code": "S01 E01",
        "title": "The Student",
        "description": "Pursuing an MSc in Artificial Intelligence and Machine Learning at SRM. Expected completion: May 2028.",
        "tags": [
          "MSc",
          "AI & ML",
          "SRM"
        ],
        "runtime": "Expected May 2028",
        "palette": {
          "from": "#04121f",
          "via": "#0f4c6e",
          "to": "#05080d",
          "accent": "#4cc9ff"
        }
      }
    ]
  },
  {
    "number": 2,
    "title": "Building Useful Software",
    "period": "Featured projects",
    "synopsis": "Two projects exploring learning tools and communication workflows.",
    "episodes": [
      {
        "code": "S02 E01",
        "title": "Studyflow",
        "description": "A learning platform bringing notes, study schedules, progress tracking, and videos into one place.",
        "tags": [
          "TypeScript",
          "React",
          "Vinext",
          "Cloudflare Workers"
        ],
        "runtime": "Personal project",
        "palette": {
          "from": "#04121f",
          "via": "#0f4c6e",
          "to": "#05080d",
          "accent": "#4cc9ff"
        }
      },
      {
        "code": "S02 E02",
        "title": "Bulk Mail System",
        "description": "A full-stack application for managing contacts, sending bulk emails, scheduling campaigns, and tracking delivery status.",
        "tags": [
          "React",
          "Node.js",
          "Express",
          "MongoDB"
        ],
        "runtime": "Personal project",
        "palette": {
          "via": "#6e0d1d",
          "to": "#09070a",
          "accent": "#ff3d5a",
          "from": "#24060b"
        }
      }
    ]
  },
  {
    "number": 3,
    "title": "The Next Chapter",
    "period": "Looking ahead",
    "synopsis": "Working toward AI engineering and forward deployed engineering.",
    "episodes": [
      {
        "code": "S03 E01",
        "title": "From Problem to Product",
        "description": "My next focus is learning to understand user needs, build AI-powered applications, and deploy reliable solutions.",
        "tags": [
          "AI Engineering",
          "FDE",
          "Learning roadmap"
        ],
        "runtime": "Career direction",
        "palette": {
          "from": "#1c1003",
          "via": "#6b3c06",
          "to": "#0a0806",
          "accent": "#ffb547"
        }
      }
    ]
  }
];

export const topPicks: TopPick[] = [
  {
    "label": "Featured project",
    "title": "Studyflow",
    "detail": "Learning Platform · Full Stack",
    "palette": {
      "from": "#04121f",
      "via": "#0f4c6e",
      "to": "#05080d",
      "accent": "#4cc9ff"
    }
  },
  {
    "label": "Featured project",
    "title": "Bulk Mail System",
    "detail": "Email Campaigns · Individual Project",
    "palette": {
      "via": "#6e0d1d",
      "to": "#09070a",
      "accent": "#ff3d5a",
      "from": "#24060b"
    }
  },
  {
    "label": "Education",
    "title": "MSc AI & ML",
    "detail": "SRM · Expected May 2028",
    "palette": {
      "from": "#1c1003",
      "via": "#6b3c06",
      "to": "#0a0806",
      "accent": "#ffb547"
    }
  },
  {
    "label": "Career direction",
    "title": "AI + FDE",
    "detail": "Aspiring to build and deploy useful AI systems",
    "palette": {
      "from": "#04121f",
      "via": "#0f4c6e",
      "to": "#05080d",
      "accent": "#4cc9ff"
    }
  }
];

export const introSlides: IntroSlide[] = [
  {
    "kicker": "Meet Ajay",
    "title": "Learning. Building.",
    "lines": [
      "Ajay Kumar K · Chennai",
      "Aspiring AI Engineer & Forward Deployed Engineer"
    ]
  },
  {
    "kicker": "Education",
    "title": "MSc · AI & ML",
    "lines": [
      "SRM · Currently pursuing",
      "Expected graduation: May 2028"
    ]
  },
  {
    "kicker": "Projects",
    "title": "Two Originals",
    "lines": [
      "Studyflow — a learning platform",
      "Bulk Mail System — an individual email campaign application"
    ]
  },
  {
    "kicker": "Next chapter",
    "title": "AI + Real Problems",
    "lines": [
      "A learning roadmap in AI, full-stack development, and deployment.",
      "Focused on building practical solutions."
    ]
  }
];

export const viewerProfiles: { id: ProfileId; name: string; blurb: string; color: string; order: SectionId[] }[] = [
  {
    "id": "ajay",
    "name": "Ajay",
    "blurb": "The full series, in order",
    "color": "#e5132b",
    "order": [
      "about",
      "originals",
      "journey",
      "skills",
      "picks",
      "story"
    ]
  },
  {
    "id": "recruiter",
    "name": "Recruiter",
    "blurb": "Projects, education & profile first",
    "color": "#4cc9ff",
    "order": [
      "originals",
      "story",
      "about",
      "skills",
      "journey",
      "picks"
    ]
  },
  {
    "id": "developer",
    "name": "Developer",
    "blurb": "Projects, stack & GitHub first",
    "color": "#46e3a8",
    "order": [
      "originals",
      "skills",
      "journey",
      "about",
      "picks",
      "story"
    ]
  },
  {
    "id": "creative",
    "name": "Creative",
    "blurb": "The story & highlights first",
    "color": "#ffb547",
    "order": [
      "journey",
      "picks",
      "originals",
      "about",
      "skills",
      "story"
    ]
  }
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  "about": {
    "nav": "About",
    "card": "About Me",
    "meta": "MSc AI & ML · Chennai",
    "palette": {
      "from": "#04121f",
      "via": "#0f4c6e",
      "to": "#05080d",
      "accent": "#4cc9ff"
    }
  },
  "journey": {
    "nav": "Journey",
    "card": "My Journey",
    "meta": "Learning · Building · What’s next",
    "palette": {
      "from": "#04121f",
      "via": "#0f4c6e",
      "to": "#05080d",
      "accent": "#4cc9ff"
    }
  },
  "originals": {
    "nav": "Originals",
    "card": "My Projects",
    "meta": "2 featured projects",
    "palette": {
      "from": "#04121f",
      "via": "#0f4c6e",
      "to": "#05080d",
      "accent": "#4cc9ff"
    }
  },
  "picks": {
    "nav": "Highlights",
    "card": "Highlights",
    "meta": "Projects & career direction",
    "palette": {
      "from": "#04121f",
      "via": "#0f4c6e",
      "to": "#05080d",
      "accent": "#4cc9ff"
    }
  },
  "skills": {
    "nav": "Learning",
    "card": "Skills & Learning",
    "meta": "Project technologies + learning roadmap",
    "palette": {
      "from": "#04121f",
      "via": "#0f4c6e",
      "to": "#05080d",
      "accent": "#4cc9ff"
    }
  },
  "moments": {
    "nav": "Moments",
    "card": "Moments",
    "meta": "",
    "palette": {
      "from": "#04121f",
      "via": "#0f4c6e",
      "to": "#05080d",
      "accent": "#4cc9ff"
    }
  },
  "story": {
    "nav": "Profile",
    "card": "The Full Story",
    "meta": "Education, projects & career focus",
    "palette": {
      "from": "#04121f",
      "via": "#0f4c6e",
      "to": "#05080d",
      "accent": "#4cc9ff"
    }
  }
};
