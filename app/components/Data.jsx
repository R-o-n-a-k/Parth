import {
  FaBriefcase,
  FaGraduationCap,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import project1 from "../../public/project/project1.webp";
import project2 from "../../public/project/project2.webp";
import project3 from "../../public/project/project3.webp";
import project4 from "../../public/project/project4.webp";

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

export const skills = {
  "Languages & Frameworks": ["Kotlin", "Java", "XML", "Android SDK"],
  "Architecture & Patterns": [
    "MVVM",
    "MVP",
    "Coroutines",
    "LiveData",
    "Dependency Injection",
    "Clean Architecture",
    "Data Binding",
  ],
  Testing: ["Espresso", "JUnit", "Mockito"],
  "Tools & Platforms": [
    "Android Studio",
    "Firebase",
    "Room Database",
    "Retrofit",
  ],
  "Libraries & SDKs": [
    "Google APIs (Crashlytics, Maps, Push)",
    "YouTube SDK",
    "Facebook SDK",
    "ZXing (Barcode)",
    "Glide/Picasso",
  ],
  Security: ["OWASP", "App-level encryption & decryption", "HTTPS", "ProGuard"],
  Other: [
    "Accessibility (TalkBack)",
    "QR/Barcode integration",
    "Deep Linking",
    "Localization",
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
export const projects = [
  {
    id: 1,
    title: "Google TV & Settings",
    image: project1,
    description:
      "Android-based platform used by global TV manufacturers to manage device settings and deliver OS-level features.",
    details: [
      "Delivered 10+ high-impact features, including remote pairing, language detection, and GMS setup fl ows.",
      "Fixed 30+ production issues (crashes, UI bugs); redesigned 4 critical screens in Settings app.",
      "Led accessibility overhaul for TalkBack, improving navigability and readability.",
      "Resolved 10+ P1 bugs through critical OS-level debugging and low-memory UI optimizations, signifi cantly improving platform stability and reducing escalations.",
    ],
    // link: "https://github.com/parthpala",
    // Add link only if it is there, else comment or delete the variable
  },
  {
    id: 2,
    title: "BPOST MY ROUND",
    image: project2,
    description:
      "Mobile app for Belgian postal workers to manage daily parcel deliveries and optimize delivery routes.",
    details: [
      "Addressed key blockers in unit testing, raising code coverage from ~50% to 89%.",
      "Improved barcode scanning accuracy and overall app responsiveness.",
    ],
    // link: "https://github.com/parthpala",
  },
  {
    id: 3,
    title: "Experian – Your Choice (YRMS)",
    image: project3,
    description:
      "Internal HR app for Experian employees across 15+ countries to access salary, rewards, and support services.",
    details: [
      "Designed, developed 12–15 modules (salary, rewards, support) from scratch in 25 days, praised for fast, stable rollout; led full-cycle ownership of the app.",
      "Maintained crash-free rates at 95%+ and implemented encryption protocols.",
    ],
    link: "https://github.com/parthpala",
  },
  {
    id: 4,
    title: "IIFL InvestorQ",
    image: project4,
    description:
      "Finance-focused Q&A app where users ask and answer investment-related questions; 100k+ downloads on Play Store.",
    details: [
      "Designed and developed 20+ modules from scratch; led full-cycle ownership of the app.",
      "Reclaimed the project when stability dropped (60–70% crash-free) and improved to 99–100%.",
      "Implemented encryption, error handling, and OWASP security standards.",
    ],
    link: "https://github.com/parthpala",
  },
];

// ----------------------------------------------Contact Data---------------------------------------------------
export const contact = [
  {
    icon: <FaEnvelope />,
    name: "palaparth28@gmail.com",
  },
  {
    icon: <FaPhoneAlt />,
    name: "+91-9833422423",
  },
  {
    icon: <FaMapMarkerAlt />,
    name: "Mumbai, Maharashtra, India",
  },
];
