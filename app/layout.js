import { Inter  } from "next/font/google";
import "./globals.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import NavTabs from "./components/common/NavTabs";
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: "Parth Pala | Android Developer",
    template: "%s | Parth Pala"
  },
  description: "Senior Developer with 7+ years of experience in Android development for mobile and TV platforms. Expert in Kotlin, Java, and delivering scalable, user-focused apps.",
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
      'Technology Analyst with 7+ years in Android development. Expert in Kotlin and Java. Focused on scalable, user-centered apps for mobile and TV.',
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
      'Technology Analyst with 7 + years in Android development for mobile and TV platforms. Expert in Kotlin and Java.',
    images: ['/ParthPalaOG.webp'], 
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning> 
      <body
        className={`${inter.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="w-full md:w-[60%] mx-auto bg-background">
        <Header/>
        <NavTabs/>
        {children}
        <Footer/>
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
