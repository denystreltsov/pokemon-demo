import { trpc } from "@/utils/trpc";
import { useState, useEffect } from "react";
import { getOptionsForVote } from "@/utils/getRandomPokemon";
import type { inferProcedureOutput } from "@trpc/server";
import type { FC } from "react";
const btn = "flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-1 text-base text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"

export default function Home() {
  const [ids, setIds] = useState([0, 0] as [number, number]);

  const voteMutation = trpc.pokemon.cast_vote.useMutation();

  useEffect(() => {
    setIds(getOptionsForVote());
  }, []);

  const { data, status, error } = trpc.pokemon.get_pokemon.useQuery({
    id: ids,
  });

  if (status === "loading" || ids[0] === ids[1]) return <div>Loading</div>;

  if (status === "error") return error;

  const voteForRoundest = (selected : number) =>{
      setIds(getOptionsForVote());
      if(selected === 1){
        voteMutation.mutate({votedFor: 1, votedAgainst: 2})
      }else{
        voteMutation.mutate({votedFor: 2, votedAgainst: 1})
      }
  }

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center relative">
      <div className="text-2xl text-center">Which pokemon is Rounder</div>
      <div className="border rounded p-8 flex justify-between items-center max-w-2xl">
        <div className="w-64 h-64 flex flex-col items-center bg-red-200">
          <img className="w-full h-full object-cover"  src={data[0].sprites.front_default as string | undefined}  alt="" />
          <button className={btn} onClick={()=> {voteForRoundest(1)}}>Roundest</button>
        </div>
        <div className="p-8">Vs</div>
        <div className="w-64 h-64 flex flex-col items-center bg-red-200">
          <img className="w-full h-full object-cover" src={data[1]?.sprites.front_default as string | undefined} alt="" />
          <button className={btn}  onClick={()=> {voteForRoundest(2)}}>Roundest</button>
        </div>
      </div>
    </div>
  );
}
