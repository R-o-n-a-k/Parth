import {
  FaBriefcase,
  FaGraduationCap,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

// ----------------------------------------------Header Data---------------------------------------------------
export const introduction = {
  name: "Parth Pala",
  designation: "Technology Analyst | Android Specialist",
  location: "Mumbai, India",
};

export const socialMediaIcons = [
  {
    link: "https://www.instagram.com/",
    icon: <FaInstagram />,
  },
  {
    link: "https://www.linkedin.com/in/parth-pala/",
    icon: <FaLinkedin />,
  },
  { link: "https://github.com/parthpala", icon: <FaGithub /> },
];

// ----------------------------------------------About Data---------------------------------------------------
export const aboutData = {
  firstPara:
    "👋 Hi, I’m a passionate Android Developer with over 7 years of experience building high-quality, scalable mobile applications across phones, tablets, and TV platforms.",
  secondPara:
    "I specialize in java, MVVM, Jetpack Compose, and Coroutines, with 20+ published apps and a consistent 99-100% crash-free rate. I've led key contributions to Google TV, mentored teams, and earned multiple Employee of the Quarter awards. I'm driven by clean architecture, performance optimization, and delivering seamless user experiences. Currently, I'm open to new opportunities in Android development.",
  experience: 7,
  appsDelivered: 20,
  issuesResolved: 200,
};

// data/skills.js

export const skills = {
  "Languages & Frameworks": ["Kotlin", "Java", "XML", "Android SDK"],
  "Architecture & Patterns": [
    "MVVM",
    "MVP",
    "Coroutines",
    "LiveData",
    "Dependency Injection",
    "Data Binding",
    "Clean Architecture",
  ],
  Testing: ["Espresso", "JUnit", "Mockito"],
  "Tools & Platforms": [
    "Android Studio",
    "Firebase",
    "Retrofit",
    "Room Database",
  ],
  "Libraries & SDKs": [
    "Google APIs (Crashlytics, Maps, Push)",
    "Facebook SDK",
    "YouTube SDK",
    "ZXing (Barcode)",
    "Glide/Picasso",
  ],
  Security: ["OWASP", "App-level encryption & decryption", "HTTPS", "ProGuard"],
  Other: [
    "Deep Linking",
    "Localization",
    "QR/Barcode integration",
    "Accessibility (TalkBack)",
  ],
};

// ----------------------------------------------Career Data---------------------------------------------------
export const workData = [
  {
    title: "Technology Analyst",
    company: "Infosys",
    location: "Pune, India",
    date: "April 2023 – Present",
    icon: <FaBriefcase />,
    description: [
      "Led a team of 5 developers for Google TV & Settings apps across global platforms.",
      "Delivered 5+ feature rollouts including GMS login, remote pairing & localization automation.",
      "Resolved 30+ production bugs & 10+ OS-level P1 issues, improving platform stability.",
      "Redesigned 4 key screens for accessibility & improved UX using TalkBack support.",
      "Awarded Employee of the Quarter for impactful delivery & team leadership.",
    ],
  },
  {
    title: "Senior System Engineer",
    company: "Infosys",
    location: "Pune, India",
    date: "July 2018 – April 2023",
    icon: <FaBriefcase />,
    description: [
      "Increased unit test coverage from ~45% to 89% in the BPOST project by restructuring testable components and resolving blockers.",
      "Improved app stability by reducing crash rates by 30% through performance optimizations and refactoring.",
    ],
  },
  {
    title: "Android Developer",
    company: "MOBITRAIL",
    location: "Mumbai, India",
    date: "Sept 2017 – July 2021.",
    icon: <FaBriefcase />,
    description: [
      "Reduced app crashes by 30% through code optimization and modular architecture.",
      "Collaborated with QA, UX, and PM teams to enhance performance and ensure multi-device compatibility.",
      "Published 4+ Android apps on the Google Play Store, reaching 100k+ combined downloads.",
      "Developed native Android apps using Kotlin and Java, implementing complex features and integrations.",
      "Applied MVP architecture and OWASP security practices to ensure scalable and maintainable codebases.",
    ],
  },
];

export const educationData = [
  {
    title: "BSC Infomation Technology",
    company: "University of Mumbai",
    location: "Mumbai, India",
    date: "2014 – 2017",
    icon: <FaGraduationCap />,
    description:
      "Studied core CS subjects, completed Android internships, and participated in app hackathons.",
  },
];

// ----------------------------------------------Project Data---------------------------------------------------

// ----------------------------------------------Achievements Data---------------------------------------------------

// ----------------------------------------------Contact Data---------------------------------------------------
