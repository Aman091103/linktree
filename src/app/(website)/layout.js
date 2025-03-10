import { Geist, Geist_Mono, Lato } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";

const lato = Lato({subsets:['latin'], weight: ['400', '700']});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={lato.className}
      >
        <main>
          <Header />
          <div className="max-w-4xl mx-auto p-6">
            {children}
          </div>  
        </main>
      </body>
    </html>
  );
}
