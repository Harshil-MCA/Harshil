import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

export const profile = {
  name: "Harshil K",
  role: "IT Professional | Cybersecurity & Software Development",
  location: "Bangalore, India",
  phone: "+91-8089512323",
  email: "harshil.connect.in@gmail.com",
  linkedin: "https://linkedin.com/in/harshil-mca",
  github: "https://github.com/Xavior-exe",
  resumeUrl: "/harshil-k-resume.pdf",
  avatarUrl: "/Harshil.jpg",
  summary:
    "Passionate IT professional with an MCA and a B.Sc. in Computer Science, possessing hands-on experience in software development, cybersecurity, ethical hacking, and AI-powered applications. Proficient in Python, Java, SQL, and web technologies, with strong problem-solving abilities and a commitment to continuous learning.",
};

export const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export const highlights = [
  {
    icon: Code2,
    title: "Software Development",
    description: "Python, Java, SQL, Django, Flask, and modern web technologies.",
  },
  {
    icon: Lightbulb,
    title: "Cybersecurity",
    description: "Ethical hacking, information security, and threat analysis.",
  },
  {
    icon: Rocket,
    title: "AI Applications",
    description: "Hands-on work with OpenCV and AI-powered project workflows.",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Collaborative, adaptable, and focused on continuous learning.",
  },
];

export const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", level: 90 },
      { name: "Python", level: 90 },
      { name: "C", level: 75 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    title: "Web Technologies",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 95 },
      { name: "JavaScript", level: 85 },
      { name: "Django", level: 80 },
      { name: "Flask", level: 80 },
    ],
  },
  {
    title: "Cybersecurity & Tools",
    skills: [
      { name: "Ethical Hacking", level: 85 },
      { name: "Information Security", level: 85 },
      { name: "Blue Team Analysis", level: 80 },
      { name: "Git / GitHub", level: 90 },
      { name: "OpenCV", level: 75 },
    ],
  },
];

export const techStack = [
  "Java",
  "Python",
  "C",
  "SQL",
  "HTML",
  "CSS",
  "JavaScript",
  "Django",
  "Flask",
  "MySQL",
  "Git",
  "GitHub",
  "Windows",
  "Linux",
  "VS Code",
  "OpenCV",
  "MS Excel",
];

export const certifications = [
  "Blue Team Security Analyst & Cybersecurity Practitioner Program - Cyberverse Foundation",
  "Introduction to Cybersecurity, Cyber Threat Management, Computer Hardware Basics & Python Essentials 1 - CISCO",
  "Embedded Systems & IoT with AI - XCEL Corp",
  "Introduction to Artificial Intelligence (AI) - IBM",
  "Machine Learning Using Python & Introduction to Front End Development - Simplilearn",
  "Java Programming: Mastering the Fundamentals & Computer Networking - Scaler",
  "Introduction to UNIX - Infosys Springboard",
  "Database Management System - Udemy",
];

export const languages = ["English", "Malayalam", "Hindi", "Kannada", "Tamil"];

export const softSkills = [
  "Problem-Solving",
  "Critical Thinking",
  "Time Management",
  "Teamwork",
  "Adaptability",
];

export const projects = [
  {
    title: "Attendance System - Face Recognition",
    description:
      "Web-based attendance system built with Python, Django, and OpenCV for real-time face detection, recognition, and automated attendance logging.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["Python", "Django", "OpenCV", "MySQL"],
    features: [
      "Real-time facial detection and recognition",
      "Automated attendance capture and database logging",
      "Reduces proxy attendance with image processing",
    ],
  },
  {
    title: "TravelNex - AI-Powered Intelligent Travel Planner",
    description:
      "AI-powered travel planning web application integrated with multiple APIs for recommendations, itinerary generation, chatbot assistance, and place identification.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["Python", "Flask", "MySQL", "JavaScript"],
    features: [
      "Personalized package recommendations",
      "AI chatbot and itinerary generation",
      "Destination gallery and place identification",
    ],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Soundarya Institute of Management and Science, Bangalore University",
    year: "2024 - 2026",
    description:
      "Focused on software development, cybersecurity, and AI-powered applications.",
    achievements: [
      "Advanced computing and application development",
      "Security-oriented problem solving",
      "Hands-on project work with modern web tools",
    ],
  },
  {
    degree: "B.Sc. Computer Science",
    institution: "College of Applied Science Vattamkulam, Calicut University",
    year: "2021 - 2024",
    description:
      "Built a strong foundation in programming, databases, and computer science concepts.",
    achievements: [
      "Programming and database fundamentals",
      "Project-based learning in software development",
      "Strong base for cybersecurity and AI exploration",
    ],
  },
  {
    degree: "Higher Secondary",
    institution: "G H S S Niramaruthur",
    year: "2019 - 2021",
    description: "Completed higher secondary education with a science background.",
    achievements: [
      "Science stream preparation",
      "Foundation for technical studies",
      "Academic growth in mathematics and computing",
    ],
  },
];
