import { HamburguerMenu } from "@/components/HanburgerMenu";
import { Logo } from "@/components/Logo";
import { Posts } from "@/components/Posts";
import { SearchField } from "@/components/SearchField";
import { SocialMedia } from "@/components/SocialMedia";
import { Subreddits } from "@/components/Subreddits";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="fixed flex items-center justify-between gap-4 p-4 w-full">
        <Logo />
        <SearchField />
        <HamburguerMenu />
      </header>  
      <main className="flex pt-16">
        <Subreddits />
        <section className="flex-1 pt-2">
          <Posts />  
          <SocialMedia />
        </section>
      </main>
    </>
  );
}
