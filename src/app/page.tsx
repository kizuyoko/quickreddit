import { Posts } from "@/components/Posts";

export default function Home() {
  return (
    <>
      <h2 className="pageTitle">Popular Posts</h2>
      <Posts query="popular" />
    </>
  );
}
