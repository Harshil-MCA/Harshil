import { BarChart3, Code2, Lightbulb, Rocket, Users } from "lucide-react";

export const profile = {
  name: "Harshil K",
  role: "Software Developer | Full-Stack Development | Data Analytics & Cybersecurity",
  location: "Bangalore, India",
  email: "harshil.connect.in@gmail.com",
  linkedin: "https://linkedin.com/in/harshil-mca",
  github: "https://github.com/Harshil-MCA",
  resumeUrl: "/Harshil.K_Resume.pdf",
  avatarUrl: "/Harshil.jpg",
  summary:
    "Computer Science graduate with an MCA background and hands-on project experience in full-stack web development, database-driven applications, data analytics, and cybersecurity fundamentals. Skilled in Python, Java, SQL, React, Django, Flask, and Power BI, with a focus on building practical applications and solving technical problems.",
};

export const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export const highlights = [
  { icon: Code2, title: "Software Development", description: "Building web applications and database-driven systems using Python, Java, SQL, Django, Flask, and modern web technologies." },
  { icon: BarChart3, title: "Data Analytics", description: "Working with Python, Pandas, SQL, Power BI, data cleaning, and exploratory data analysis to turn structured datasets into useful insights." },
  { icon: Lightbulb, title: "Cybersecurity", description: "Foundational knowledge of ethical hacking, information security, vulnerability research, and cybersecurity practices." },
  { icon: Rocket, title: "AI Applications", description: "Project experience with AI-assisted applications, OCR, computer vision, and API integration." },
  { icon: Users, title: "Team Player", description: "Collaborative, adaptable, and focused on problem-solving, continuous learning, and effective teamwork." },
];

export const skillCategories = [
  { title: "Programming and Query Languages", skills: ["Python", "Java", "JavaScript", "C", "SQL"] },
  { title: "Frontend Development", skills: ["HTML", "CSS", "React", "Responsive Web Development"] },
  { title: "Backend Development and APIs", skills: ["Django", "Django REST Framework", "Flask", "Node.js", "Express.js", "REST APIs"] },
  { title: "Databases", skills: ["MySQL", "MongoDB", "Database Design", "Relational Database Concepts"] },
  { title: "Data Analytics", skills: ["Python Pandas", "Exploratory Data Analysis (EDA)", "Data Cleaning", "Data Quality Checks", "Power BI", "Microsoft Excel", "Data Visualization"] },
  { title: "Mobile Development and AI", skills: ["Flutter", "Dart", "Firebase", "Google ML Kit OCR", "Google Gemini API Integration"] },
  { title: "Computer Vision and Security", skills: ["OpenCV", "Ethical Hacking Fundamentals", "Information Security", "Cybersecurity Fundamentals"] },
  { title: "Tools", skills: ["Git", "GitHub", "VS Code", "Windows", "Linux"] },
];

export const techStack = ["Python", "Java", "JavaScript", "SQL", "React", "Django", "Flask", "Power BI", "Flutter", "OpenCV", "Git", "GitHub"];

export const certifications = [
  "Machine Learning Using Python — Simplilearn",
  "Introduction to Front End Development — Simplilearn",
  "Introduction to Artificial Intelligence (AI) — IBM",
  "Database Management System — Udemy",
  "Java Programming: Mastering the Fundamentals — Scaler",
  "Computer Networking — Scaler",
  "Embedded Systems & IoT with AI — XCEL Corp",
  "Introduction to UNIX — Infosys Springboard",
  "Blue Team Security Analyst — Cyberverse Foundation",
  "Cybersecurity Practitioner Program — Cyberverse Foundation",
  "Introduction to Cybersecurity — Cisco",
  "Cyber Threat Management — Cisco",
  "Computer Hardware Basics — Cisco",
  "Python Essentials 1 — Cisco",
];

export const languages = ["English", "Malayalam", "Hindi", "Kannada", "Tamil"];
export const softSkills = ["Problem-Solving", "Critical Thinking", "Time Management", "Teamwork", "Adaptability"];

export const projects = [
  { title: "SmartChef — AI-Powered Cooking Assistant", image: "/project-previews/smartchef-mobile.svg", imageAlt: "Conceptual SmartChef mobile app project preview", description: "A Flutter-based cooking and nutrition assistant supporting ingredient identification, weight extraction from digital weighing-scale images, and nutrition calculation using APIs and local datasets.", tags: ["Flutter", "Dart", "Firebase", "Google ML Kit OCR", "Google Gemini API", "USDA API"], features: ["Ingredient identification and weight OCR", "Nutrition calculation, recipe generation, and diet planning", "Shopping-list, authentication, profile, and history features"] },
  { title: "SmartChef — Web-Based Nutrition and Recipe Planner", image: "/project-previews/smartchef-web.svg", imageAlt: "Conceptual SmartChef web app project preview", description: "A web application for nutrition analysis, recipe recommendations, and personalized diet planning, integrated with a Django backend and shared application data.", tags: ["React", "Python", "Django REST Framework", "SQL", "REST APIs"], features: ["React frontend connected to Django REST APIs", "Nutrition, recipe, diet-planning, and shopping-list features", "Authentication, profile, and history features"] },
  { title: "Collaborative Task Manager — Full-Stack Web Application", image: "/project-previews/task-manager.svg", imageAlt: "Conceptual task manager project preview", description: "A full-stack task-management application developed using React and Node.js, with MongoDB Atlas for data storage.", tags: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB Atlas", "Mongoose", "JWT", "bcrypt"], features: ["React-based frontend", "Express backend and REST API architecture", "MongoDB Atlas integration"] },
  { title: "TravelNex — Intelligent Travel Planner", image: "/project-previews/travelnex.svg", imageAlt: "Conceptual TravelNex project preview", description: "A travel-planning web application integrating travel-related APIs with a Flask backend and MySQL database to support destination information and personalized travel recommendations.", tags: ["Python", "Flask", "MySQL", "HTML", "CSS", "JavaScript", "Travel APIs"], features: ["Third-party travel and destination API integration", "Database-driven recommendations", "AI chatbot functionality and web-based travel information"] },
  { title: "Face Recognition Attendance Management System", image: "/project-previews/attendance.svg", imageAlt: "Conceptual face recognition attendance project preview", description: "An attendance-management application using computer-vision techniques and a Django backend.", tags: ["Python", "Django", "OpenCV", "MySQL"], features: ["Face detection and recognition according to the implemented pipeline", "Database design for attendance records", "Validation logic intended to reduce proxy-attendance attempts"] },
  { title: "Electric Vehicle Data Analysis and Power BI Dashboard", image: "/project-previews/ev-dashboard.svg", imageAlt: "Conceptual electric vehicle data dashboard project preview", description: "An electric-vehicle registration analysis project using a dataset of approximately 177,866 records and 17 columns.", tags: ["Python", "Pandas", "Power BI", "Data Cleaning", "EDA"], features: ["Data inspection, cleaning, and preparation", "Interactive Power BI visualizations", "Analysis of vehicle types, manufacturers, model years, range, and geographic distribution"] },
  { title: "Accident Data Analysis", image: "/project-previews/accident-analysis.svg", imageAlt: "Neutral accident data analysis project preview; dashboard status not represented", description: "An accident-data analysis project focused on understanding road-accident patterns and contributing factors.", tags: ["Python", "Pandas", "Data Cleaning", "EDA", "Power BI"], features: ["Accident severity and time-based patterns", "Weather, lighting, road, vehicle, and casualty data", "Data quality and trend exploration"] },
  { title: "Employee Database Management System", image: "/project-previews/employee-database.svg", imageAlt: "Conceptual employee database project preview", description: "A relational database project for organizing employee, department, project, and timesheet information.", tags: ["MySQL", "SQL", "Relational Database Design"], features: ["Relational tables and primary/foreign-key relationships", "JOIN, filtering, grouping, and aggregate queries", "Employee headcount, project hours, and salary analysis"] },
];

export const internships = [
  { title: "Data Analytics Intern", organization: "Imarticus Learning, Koramangala, Bangalore", dates: "August 2026 — September 2026", description: "Selected for a structured, weekend-based Data Analytics internship, gaining practical exposure to data analytics, data visualization, analytical workflows, and structured data analysis." },
  { title: "Cyber Security Intern", organization: "HKIT Cyber Security Solutions", dates: "June 2025 — July 2025", description: "Researched security vulnerabilities and systems, collaborated on documenting findings and analyzing evidence, and developed a foundational understanding of security practices and technical problem-solving." },
];

export const education = [
  { degree: "Master of Computer Applications (MCA)", institution: "Soundarya Institute of Management and Science — Bangalore University", year: "2024–2026", description: "", achievements: [] },
  { degree: "B.Sc. Computer Science", institution: "College of Applied Science Vattamkulam — Calicut University", year: "2021–2024", description: "", achievements: [] },
  { degree: "Higher Secondary", institution: "G H S S Niramaruthur", year: "2019–2021", description: "", achievements: [] },
];
