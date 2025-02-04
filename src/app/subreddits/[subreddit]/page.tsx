'use client';
import { usePathname } from "next/navigation";
import { useEffect, useState } from 'react';
import { Posts } from "@/components/Posts"

const SubredditPage = () => {
  const pathName = usePathname();
  const subreddit = pathName.split('/').pop();
  
  const [query, setQuery] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (subreddit) {
      setQuery(subreddit as string);
    }
  }, [subreddit]);

  if (!query) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h2 className="pageTitle">r/{query}</h2>
      <Posts query={query} />
    </>
  );
};

export default SubredditPage;