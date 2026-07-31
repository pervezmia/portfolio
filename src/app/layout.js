import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ahmed Pervez Kabir | Full-Stack Web Developer",
  description: "Full-stack developer building Next.js, Express.js and MongoDB applications. See live projects including TutorBooking, Mentora, and Wanderlust.",
  keywords: ["Ahmed Pervez Kabir", "Pervez Mia", "full stack developer Bangladesh", "Next.js developer"],
  openGraph: {
    title: "Ahmed Pervez Kabir | Full-Stack Developer",
    description: "Full-stack developer building production-ready apps with Next.js, Express.js, and MongoDB. See live projects and source code.",
    url: "https://portfolio-gray-one-armotgwq0e.vercel.app",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
          <Navbar></Navbar>
        <main>
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
