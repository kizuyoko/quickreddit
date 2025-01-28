import Image from "next/image";
export const SearchField = () => {
  return (
    <form className="flex items-center gap-4 bg-white p-4 py-2 rounded-lg shadow-md">
      <input type='text' 
        placeholder='Search for Subreddits'
        className='w-full bg-transparent outline-none'
      />
      <button type='submit'>
        <Image 
          src="/search.svg"
          alt="Search icon"
          width={30}
          height={30}
        />
      </button>
    </form>
  );
};