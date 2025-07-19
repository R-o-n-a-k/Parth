import { Inter  } from "next/font/google";
import "./globals.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import NavTabs from "./components/common/NavTabs";
import { ThemeProvider } from 'next-themes';
import LandingAnimation from "./components/animation/LandingAnimation";
import AnimateOnScroll from "./components/animation/AnimateOnScroll";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: "Parth Pala | Android Developer",
    template: "%s | Parth Pala"
  },
  themeColor: "#9B5DE5",
  description: "Senior Android Developer with 7+ years of experience building scalable, user-focused apps for mobile, tablet, and TV using Kotlin and Java.",
  keywords: [
    'Parth Pala',
    'Android Developer',
    'Technology Analyst',
    'Kotlin Developer',
    'Java Developer',
    'Android TV',
    'Mobile App Developer',
    'Jetpack Compose',
    'MVVM Architecture',
    'Coroutines',
    'Dependency Injection',
    'Android Portfolio',
    'Android Engineer',
    'Scalable Mobile Apps',
    'User-Focused Android Apps'
  ],
  authors: [{ name: 'Parth Pala', url: 'https://parthpala.vercel.app/' }],
  creator: 'Parth Pala',
  publisher: 'Parth Pala',
  metadataBase: new URL('https://parthpala.vercel.app/'),
  openGraph: {
    title: 'Parth Pala | Android Developer',
    description:
      'Senior Android Developer with 7+ years of experience creating scalable apps for Android phones, tablets, and TVs.',
    url: 'https://parthpala.vercel.app/',
    siteName: 'Parth Pala',
    images: [
      {
        url: '/ParthPalaOG.webp',
        width: 1200,
        height: 630,
        alt: 'Parth Pala - Android Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Parth Pala | Android Developer',
    description:
      'Senior Android Developer building user-focused mobile and TV apps using Kotlin, Java, and modern frameworks.',
    images: ['/ParthPalaOG.webp'], 
  },
  alternates: {
    canonical: 'https://parthpala.vercel.app/',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning> 
      <body
        className={`${inter.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <LandingAnimation>
        <AnimateOnScroll/>
        <div className="w-full md:w-[60%] mx-auto bg-background">
        <Header/>
        <NavTabs/>
        {children}
        <Footer/>
        </div>
        </LandingAnimation>
        </ThemeProvider>
      </body>
    </html>
  );
}
