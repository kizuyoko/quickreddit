'use client';
import { useState } from "react";
import { Provider } from 'react-redux';
import store from '@/store/store';
import { Montserrat, Open_Sans, Poppins } from "next/font/google";
import "./globals.css";
import metadata from './metadata';
import { Logo } from "@/components/Logo";
import { HamburgerMenu } from "@/components/HamburgerMenu";
import { SearchField } from "@/components/SearchField";
import { Subreddits } from "@/components/Subreddits";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["800"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"], 
  weight: ["500"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <html lang="en">
      <head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      </head>
      <body
        className={`${montserrat.variable} ${poppins.variable} ${openSans.variable} antialiased`}
      >
        <Provider store={store}>
          <header className="flex flex-col sm:flex-row items-center justify-between gap-2 p-4 w-full">
            <div className="flex justify-between w-full">
              <Logo />
              <HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
            </div>
            <div className={`block sm:hidden w-full transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
              <Subreddits />
            </div>
            <SearchField />
          </header>
          <main className="flex">
            <aside className="hidden sm:block w-48">
              <Subreddits />
            </aside>
            <section className="flex-1 pt-2"> 
              {children}
            </section>
          </main>
        </Provider>
      </body>
    </html>
  );
}
