import Image from "next/image";

export const SocialMedia = () => {
  return (
    <footer className="flex gap-4 justify-end p-4 pt-0">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://github.com/kizuyoko/quickreddit"
        target="_blank"
      >
        <Image
          src="/github.svg"
          alt="GitHub"
          width={40}
          height={39}
        />
      </a>
      <a
        className="flex items-center gap-2"
        href="https://www.linkedin.com/in/kizuyoko/"
        target="_blank"
      >
        <Image
          src="/linkedin.svg"
          alt="LinkedIn"
          width={40}
          height={40}
        />
      </a>
    </footer>
  );
};