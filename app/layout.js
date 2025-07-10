import { Inter  } from "next/font/google";
import "./globals.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import NavTabs from "./components/common/NavTabs";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Parth Pala",
  description: "Technology Analyst with 7+ years of experience in Android development for mobile and TV platforms. Expert in Kotlin, Java, and delivering scalable, user-focused apps.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <div className="w-full md:w-[60%] mx-auto bg-background">
        <Header/>
        <NavTabs/>
        {children}
        <Footer/>
        </div>
      </body>
    </html>
  );
}
