import project1 from "../../public/project/project1.webp";
import project2 from "../../public/project/project2.webp";
import project3 from "../../public/project/project3.webp";
import project4 from "../../public/project/project4.webp";
import { Phone } from "lucide-react";
import { Briefcase } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { Mail } from "lucide-react";
import { MapPin } from "lucide-react";

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
  image: "/ParthPala.png",
  name: "Parth Pala",
  designation: "Technology Analyst | Android Specialist",
  location: "Mumbai, India",
  resume: "/ParthPala_Resume.pdf",
};

export const socialMediaIcons = [
  {
    name: "phone",
    link: "tel:+919833422423",
    icon: <Phone className="md:w-6 md:h-6 w-4 h-4"/>,
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/parth-pala/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="md:w-6 md:h-6 w-4 h-4"
      >
        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zM9 8h3.6v2.16h.05c.5-.94 1.73-1.93 3.55-1.93 3.8 0 4.5 2.5 4.5 5.74V24h-4v-7.8c0-1.86-.03-4.24-2.58-4.24-2.58 0-2.98 2.02-2.98 4.1V24h-4V8z" />
      </svg>
    ),
  },
  {
    name: "github", link: "https://github.com/parthpala", icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="md:w-6 md:h-6 w-4 h-4"
      >
        <path d="M12 .297C5.37.297 0 5.67 0 12.297c0 5.292 3.438 9.787 8.205 11.387.6.112.82-.258.82-.577v-2.234c-3.338.727-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.082-.729.082-.729 1.205.086 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.304.762-1.604-2.665-.304-5.466-1.333-5.466-5.93 0-1.31.467-2.382 1.235-3.22-.123-.303-.535-1.524.118-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.804 5.624-5.475 5.92.43.372.823 1.103.823 2.222v3.293c0 .322.216.694.825.576C20.565 22.08 24 17.585 24 12.297 24 5.67 18.627.297 12 .297z" />
      </svg>
    ),
  },
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
    icon: <Briefcase />,
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
    icon: <Briefcase />,
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
    icon: <Briefcase />,
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
    icon: <GraduationCap />,
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
      "Finance QnA app where users ask & answer investment-related questions; 100k+ downloads on PlayStore.",
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
    icon: <Mail />,
    name: "palaparth28@gmail.com",
  },
  {
    icon: <Phone />,
    name: "+91-9833422423",
  },
  {
    icon: <MapPin />,
    name: "Mumbai, Maharashtra, India",
  },
];
