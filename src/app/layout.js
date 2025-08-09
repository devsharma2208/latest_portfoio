import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TitleWatcher from "./title-watcher"; // client component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dev Sharma | Portfolio",
  description:
    "Showcasing projects, skills, and experience as a MERN Stack Developer.",
  icons: {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzknKibNmbtrulPPbHn2z9aag15Hd0ohznsXqZ1G0Iuw&s",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <TitleWatcher />
        {children}
      </body>
    </html>
  );
}
