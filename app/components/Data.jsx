import {
  FaBriefcase,
  FaGraduationCap,
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

// ----------------------------------------------Meta Data---------------------------------------------------
export const metaDataContent = {
  title: {
    default: "Parth Pala | Android Developer",
    template: "%s | Parth Pala",
  },
  description:
    "Senior Android Developer with 7+ years of experience building scalable, user-focused apps for mobile, tablet, and TV using Kotlin and Java.",
  verification: {
    google: "oPfZV3uf-uIZFjb9diMT7grDKNexLvs_0UBN3Iy5adg",
  },
  keywords: [
    "Parth Pala",
    "Android Developer",
    "Technology Analyst",
    "Kotlin Developer",
    "Java Developer",
    "Android TV",
    "Mobile App Developer",
    "Jetpack Compose",
    "MVVM Architecture",
    "Coroutines",
    "Dependency Injection",
    "Android Portfolio",
    "Android Engineer",
    "Scalable Mobile Apps",
    "User-Focused Android Apps",
  ],
  authors: [{ name: "Parth Pala", url: "https://parthpala.vercel.app/" }],
  creator: "Parth Pala",
  publisher: "Parth Pala",
  metadataBase: "https://parthpala.vercel.app/", // keep as string here
  openGraph: {
    title: "Parth Pala | Android Developer",
    description:
      "Senior Android Developer with 7+ years of experience creating scalable apps for Android phones, tablets, and TVs.",
    url: "https://parthpala.vercel.app/",
    siteName: "Parth Pala",
    images: [
      {
        url: "/ParthPala.webp",
        width: 1200,
        height: 630,
        alt: "Parth Pala - Android Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parth Pala | Android Developer",
    description:
      "Senior Android Developer building user focused mobile and TV apps using Kotlin, Java, and modern frameworks.",
    images: ["/ParthPalaOG.webp"],
  },
  alternates: {
    canonical: "https://parthpala.vercel.app/",
  },
};

// Separate pages SEO tags
export const metaContentPages = {
  aboutDesc:
    "Senior Android Developer with 7+ years of experience building scalable and user-centric apps for phones, tablets, and TV using Kotlin, Java, and modern Android frameworks.",
  aboutCanonical: "https://parthpala.vercel.app/about",
  //career
  careerTitle: "Career",
  careerDesc:
    "Led impactful Android projects including Google TV, mentoring teams and delivering production-grade mobile solutions.",
  careerCanonical: "https://parthpala.vercel.app/career",
  //projects
  projectsTitle: "Projects",
  projectsDesc:
    "Explore a portfolio of Android projects ranging from mobile apps to Android TV platforms, showcasing expertise in Kotlin, Jetpack Compose, and performance-driven development.",
  projectsCanonical: "https://parthpala.vercel.app/projects",

  //contact
  contactTitle: "Contact",
  contactDesc:
    "Interested in working together? Reach out to discuss Android development collaborations and opportunities.",
  contactCanonical: "https://parthpala.vercel.app/contact",
};

// ----------------------------------------------Header Data---------------------------------------------------
export const introduction = {
  image: "/ParthPala.webp",
  name: "Parth Pala",
  designation: "Technology Analyst | Android Specialist",
  location: "Mumbai, India",
  resume: "/ParthPala_Resume.pdf",
};

export const socialMediaIcons = [
  {
    name: "phone",
    link: "tel:+919833422423", // replace with your actual number
    icon: <FaPhoneAlt />,
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/parth-pala/",
    icon: <FaLinkedin />,
  },
  { name: "github", link: "https://github.com/parthpala", icon: <FaGithub /> },
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
