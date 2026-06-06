import { Project, ExperienceItem, EducationItem, SkillCategory, BlogPost, CertificateItem } from "./types";

export const PORTFOLIO_OWNER = {
  name: "Vanhong Horn",
  title: "Cyber Security Specialist & Front-End Developer",
  location: "Phnom Penh, Cambodia",
  tagline: "Securing the digital frontier. Transforming user interfaces.",
  bio: "I am an IT student at Royal University of Phnom Penh and an MPTC scholarship recipient specializing in Cyber Security at ANT Technology Training Center. I bridge the critical gap between high-level defensive security architectures and premium front-end user experiences.",
  avatar: "/src/assets/images/vanhong.jpg",
  contact: {
    email: "vanhonghorn37@gmail.com",
    phone: "+855 86-378-933",
    location: "Phnom Penh, Cambodia",
    locationUrl: "https://maps.google.com/?q=Phnom+Penh,+Cambodia",
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  }
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "cybersecurity",
    title: "Cybersecurity & Systems",
    description: "Defensive security blueprints, server configurations, and system hardening.",
    badge: "Grey Matter Mode",
    alienColor: "#39ff14",
    skills: [
      "Security Fundamentals",
      "Linux System Administration",
      "Defensive Security Practices",
      "Database & Host Security",
      "Log Analysis & Incident Parsing",
      "Network Penetration Basics",
      "Bash & Python Scripting"
    ]
  },
  {
    id: "frontend",
    title: "Mobile App Engineering",
    description: "Developing responsive and native mobile app integrations client-side.",
    badge: "Upgrade Mode",
    alienColor: "#00ffcc",
    skills: [
      "React Native",
      "Flutter & Dart",
      "SASS & Styled-Components",
      "API Ingestion & Integration",
      "Component-Driven Architecture",
      "UI/UX Implementation",
      "App Optimization & Performance"
    ]
  },
  {
    id: "webdev",
    title: "Web Front-End Development",
    description: "Crafting blazing fast, responsive, and secure web applications.",
    badge: "XLR8 Mode",
    alienColor: "#a3ff12",
    skills: [
      "React.js & React 18+",
      "TypeScript",
      "Tailwind CSS",
      "Vite & Modern Tooling",
      "State Management",
      "Responsive Fluid Design",
      "Git & Collaborative Workflows"
    ]
  },
  {
    id: "networking",
    title: "Networking & Protocols",
    description: "Designing, mapping, and analyzing reliable local-area and enterprise networks.",
    badge: "Brainstorm Mode",
    alienColor: "#ff9000",
    skills: [
      "Network Routing & Switching",
      "Cisco IOS Configuration",
      "Protocol Analysis (ARP, DNS, DHCP)",
      "Traffic Sniffing & Diagnosis",
      "Network Topography Mapping",
      "Troubleshooting & Diagnostics"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "banking",
    title: "Digital Banking Front-End Features",
    subtitle: "RHB Cambodia Internship",
    period: "Dec 2023 - Dec 2024",
    description: "Contributed to and scaled core front-end modules within a highly secure digital banking context. Utilized TypeScript alongside React Native platforms following strict UI specifications and source control protocols.",
    points: [
      "Developed secure, reliable components adhering strictly to custom UI/UX design specifications.",
      "Identified, diagnosed, and resolved front-end glitches, greatly improving app responsiveness.",
      "Collaborated efficiently across development runs via code reviews, utilizing Git, Bitbucket, and Jira.",
      "Applied TypeScript typing safeguards and advanced Styled-Component layout principles."
    ]
  },
  {
    id: "flutter-projects",
    title: "Flutter 3 Course Projects",
    subtitle: "Instinct Institute Alumni",
    period: "Dec 2022 - May 2023",
    description: "Acquired depth in native mobile capabilities by producing multiple high-fidelity software clones, local storage setups, and persistent client-side data handling pipelines.",
    points: [
      "Programmed robust multi-threaded UI clones including a clone of the cambodian Cellcard App.",
      "Ingested external JSON APIs seamlessly using standard HTTP handlers to bind dynamic interface lists.",
      "Implemented reliable local key-value stores for seamless offline persistent sessions."
    ]
  },
  {
    id: "netcraft",
    title: "Cyberium Arena - Net Crafts",
    subtitle: "Network & Security Simulation Engine",
    period: "Simulation Run",
    description: "Conducted virtual network design maps, discovering and documenting active routes, ownership nodes, and suspicious traffic flows in real-time environments.",
    points: [
      "Mapped dense virtual networks discovering private IPs, MAC addresses, router gates, and DNS mappings.",
      "Identified ISP backbones and analyzed ownership metadata across IP blocks using Shodan and WHOIS registries.",
      "Monitored local interfaces, capturing network packets to diagnose handshake behaviors across protocols."
    ]
  },
  {
    id: "linux-extractor",
    title: "Cyberium Arena - Linux Fundamentals",
    subtitle: "System Information Extractor Tool",
    period: "Exercise Run",
    description: "Crafted automated bash command sequences to extract critical host variables, diagnostic properties, and service alerts on Linux servers.",
    points: [
      "Programmed parsing routes to extract public and private IP addresses directly from networks.",
      "Safeguarded host telemetry output by dynamically masking physical hardware MAC addresses.",
      "Monitored CPU constraints and active system services to alert administrators of large file sizes or deadlocked threads."
    ]
  },
  {
    id: "log-analyzer",
    title: "Cyberium Arena - Python Fundamentals",
    subtitle: "Auth.log Analyzer Engine",
    period: "Log Analysis Exercise",
    description: "Created parsing algorithms to process standard Linux auth logs, identifying unauthorized system access, password events, and administrative escalations.",
    points: [
      "Scanned production /var/log/auth.log contents to map individual user execution trails.",
      "Flagged newly registered accounts and deleted profile operations instantaneously.",
      "Tracked credential revisions and established automated alarms for failed administrative sudo commands."
    ]
  },
  {
    id: "cisco-labs",
    title: "Cisco Networking Academy Labs",
    subtitle: "Enterprise Network Topology Configuration",
    period: "Academy Coursework",
    description: "Maintained, designed, and tested various physical and software-simulated local networks inside standard academy laboratories.",
    points: [
      "Configured robust routing protocol layers across Cisco router terminals.",
      "Conducted network troubleshooting, protocol tracking, and payload verification.",
      "Managed service setups including network addresses, local directory, and dynamic host parameters."
    ]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "rhb",
    role: "Digital Banking Front-End Developer Intern",
    company: "RHB Bank Cambodia",
    period: "Dec 2023 - Dec 2024",
    points: [
      "Designed and coded production components following strict specifications to enhance the mobile banking app.",
      "Debugged core user interfaces and resolved stylesheet layout glitches to optimize performance.",
      "Conducted collaborative code reviews and structured commits via Git and Bitbucket repositories.",
      "Utilized Jira for sprint coordination and followed agile product cycles securely."
    ]
  },
  {
    id: "ddd",
    role: "Computer Vision & Text Data Labeler",
    company: "Digital Divide Data (DDD)",
    period: "Phnom Penh, Cambodia",
    points: [
      "Processed complex raw imagery and specialized files for machine-learning model input datasets.",
      "Performed detailed content categorizations and metadata labeling under high-quality validation parameters."
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: "rupp",
    institution: "Royal University of Phnom Penh (RUPP)",
    degree: "Bachelor of Computer Science (IT Major)",
    points: [
      "Scholarship recipient from the Ministry of Posts and Telecommunications (MPTC).",
      "Specializing in Cyber Security via core partnerships with professional centers.",
      "Actively engaged in standard software modules, databases, and advanced computer structures."
    ]
  },
  {
    id: "ant",
    institution: "ANT Technology Training Center",
    degree: "Cyber Security Academic Specialization",
    points: [
      "Comprehensive training covering core network security configurations, defensive architectures, and host hardening.",
      "Intensive practical laboratories focusing on Linux infrastructure, file safety, and database security practices."
    ]
  },
  {
    id: "instinct",
    institution: "Instinct Institute Alumni",
    degree: "Flutter 3 Professional App Program",
    points: [
      "Acquired depth in native Flutter 3 deployment pipelines, mobile system calls, and offline state handling."
    ]
  },
  {
    id: "cisco",
    institution: "Cisco Networking Academy",
    degree: "Enterprise Routing & Switching Basics",
    points: [
      "Studied core network design rules, Cisco IOS CLI navigation, network address assignments, and system troubleshooting."
    ]
  }
];

export const BLOGS: BlogPost[] = [
  {
    id: "blog1",
    title: "Demystifying Network Protocols: Active ARP, DNS, & DHCP Handshakes",
    category: "Networking & Security",
    snippet: "A deep dive into how computers negotiate local IP addresses, bridge hardware MAC footprints, and translate domain nodes across high-security corporate networks."
  },
  {
    id: "blog2",
    title: "Hardening Linux Diagnostics: Developing a System Info Extractor Bash Script",
    category: "DevSecOps & Linux",
    snippet: "Analyzing CPU limits, tracking orphaned services, and dynamically masking private MAC addresses to preserve administrator anonymity during logging runs."
  },
  {
    id: "blog3",
    title: "State Management & Scalability in Mobile Client Architectures",
    category: "Frontend Engineering",
    snippet: "Best practices learned from building frontend banking systems using React Native and Flutter. Managing sensitive credential storage and maintaining UI fidelity."
  }
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: "sec-cert",
    title: "Professional Cyber Security Training Certificate",
    fileName: "FullCertificate.pdf",
    downloadUrl: "https://vanhonghorn-portfolio-todz.vercel.app/certificate/FullCertificate.pdf"
  }
];

export const LAB_DOCUMENTS = [
  {
    name: "TCI-2510-CAMBODIA-II.s6.xe101.pdf",
    type: "Network Protocol Map Lab Document",
    url: "https://vanhonghorn-portfolio-todz.vercel.app/Project/TCI-2510-CAMBODIA-II.s6.xe101.pdf"
  },
  {
    name: "TCI-2510-CAMBODIA-II.s6.xe103.pdf",
    type: "Host Security Audit Lab Document",
    url: "https://vanhonghorn-portfolio-todz.vercel.app/Project/TCI-2510-CAMBODIA-II.s6.xe103.pdf"
  },
  {
    name: "TCI-2510-CAMBODIA-II.s6.xe105.pdf",
    type: "Automation Parser Script Lab Document",
    url: "https://vanhonghorn-portfolio-todz.vercel.app/Project/TCI-2510-CAMBODIA-II.s6.xe105.pdf"
  }
];
