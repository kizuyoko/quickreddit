'use client';
import { useState } from "react";
import Image from "next/image";
import thousandToK from "@/utils/thousandToK";

interface VotingProps {
  initialScore: number;
}

export const Voting: React.FC<VotingProps> = ({ initialScore }) => {
  const [voteStatus, setVoteStatus] = useState(0);
  const [newScore, setNewScore] = useState(initialScore);
  const [upIcon, setUpIcon] = useState('White');
  const [downIcon, setDownIcon] = useState('White');

  const voteUpHandler = () => {
    switch (voteStatus) {
      case 0:
        setVoteStatus(1);
        setNewScore(newScore + 1);
        setUpIcon('Black');
        setDownIcon('White');
        break;
      case 1:
        setVoteStatus(0);
        setNewScore(newScore - 1);
        setUpIcon('White');
        setDownIcon('White');
        break;
      case -1:
        setVoteStatus(1);
        setNewScore(newScore + 2);
        setUpIcon('Black');
        setDownIcon('White');
        break;
    }
  };

  const voteDownHandler = () => {
    if (newScore > 0) {
      switch (voteStatus) {
        case 0:
          setVoteStatus(-1);
          setNewScore(newScore - 1);
          setUpIcon('White');
          setDownIcon('Black');
          break;
        case 1:
          setVoteStatus(0);  
          setNewScore(newScore - 1);
          setUpIcon('White');
          setDownIcon('White');
          break;
        case -1:
          setVoteStatus(0);
          setNewScore(newScore + 1);
          setUpIcon('White');
          setDownIcon('Black');
          break;
      }
    }
  };

  return (
    <div className="flex items-center">
      <button onClick={voteUpHandler}>
        <Image src={`/arrow${upIcon}.svg`} alt="UpVote" width={20} height={20} />
      </button>      
      <span className="mx-1"> 
        {thousandToK(newScore)}
      </span>
      <button onClick={voteDownHandler}>
        <Image src={`/arrow${downIcon}.svg`} alt="DownVote" width={20} height={20} className="rotate-180" />
      </button>
    </div>
  );
};