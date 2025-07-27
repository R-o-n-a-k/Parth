import { Inter  } from "next/font/google";
import "./globals.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import NavTabs from "./components/common/NavTabs";
import { ThemeProvider } from 'next-themes';
import LandingAnimation from "./components/animation/LandingAnimation";
import AnimateOnScroll from "./components/animation/AnimateOnScroll";
import { metaDataContent } from "./components/Data";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  ...metaDataContent,
  metadataBase: new URL(metaDataContent.metadataBase),
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
