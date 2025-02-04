import Image from "next/image";
export const SearchField = () => {
  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const searchQuery = formData.get('search') as string;
    console.log({ searchQuery }); 
  };

  return (
    <form 
      onSubmit={onSearch}
      className="flex items-center gap-4 bg-white p-4 py-2 rounded-lg shadow-md w-full sm:w-96"
    >
      <input
        name='search'
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