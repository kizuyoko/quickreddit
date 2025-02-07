import Image from "next/image";

export const SocialMedia = () => {
  return (
    <footer className="flex gap-2 justify-end px-4">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://github.com/kizuyoko/quickreddit"
        target="_blank"
      >
        <Image
          src="/github.svg"
          alt="GitHub"
          width={30}
          height={30}
        />
      </a>
      <a
        className="flex items-center"
        href="https://www.linkedin.com/in/kizuyoko/"
        target="_blank"
      >
        <Image
          src="/linkedin.svg"
          alt="LinkedIn"
          width={30}
          height={30}
        />
      </a>
    </footer>
  );
};