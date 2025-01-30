'use client';
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { Posts } from "@/components/Posts";
import { SearchField } from "@/components/SearchField";
import { SocialMedia } from "@/components/SocialMedia";
import { Subreddits } from "@/components/Subreddits";

interface HamburguerMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export const HamburguerMenu = ({ isOpen, toggleMenu }: HamburguerMenuProps) => {
  return (
    <>
      <button onClick={toggleMenu} className="sm:hidden text-2xl">
        {isOpen ? 'X' : '☰'}
      </button>
    </>
  );
};

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 w-full">
        <div className="flex justify-between w-full">
          <Logo />
          <HamburguerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
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
          <Posts />  
          <SocialMedia />
        </section>
      </main>
    </>
  );
}
