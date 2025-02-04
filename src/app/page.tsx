"use client";
import { Posts } from "@/components/Posts";
import { useSelector } from 'react-redux';
import { RootState }  from '@/store/store';

export default function Home() {
  const query = useSelector((state: RootState) => state.reddit.query);

  return (
    <Posts query={query} />
  );
}
