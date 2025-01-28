import Image from "next/image";

export const Post = () => {
  return (
    <article className="bg-white p-4 rounded-lg shadow-md">
      <Image
        src='/dummyImage.jpg'
        alt='dummy image'
        width={510}
        height={340}
      />
      <h3>Reddit Title</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    </article>  
  );
};