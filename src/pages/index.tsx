import { trpc } from "@/utils/trpc";
import { useState, useEffect } from "react";
import { getOptionsForVote } from "@/utils/getRandomPokemon";

export default function Home() {
  const [ids, setIds] = useState([0, 0] as [number, number]);

  useEffect(() => {
    setIds(getOptionsForVote());
  }, []);

  const { data, status, error } = trpc.pokemon.get_pokemon.useQuery({
    id: ids,
  });

  if (status === "loading" || ids[0] === ids[1]) return <div>Loading</div>;

  if (status === "error") return error;

  if (status === "success") {
  }

  //<img src={data[0]?.sprites.front_default} alt="" />
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center relative">
      <div className="text-2xl text-center">Which pokemon is Rounder</div>
      <div className="border rounded p-8 flex justify-between items-center max-w-2xl">
        <div className="w-16 h-16 bg-red-200">
          <img src={data[0].sprites.front_default as string | undefined}  alt="" />
        </div>
        <div className="p-8">Vs</div>
        <div className="w-16 h-16 bg-red-200">
          <img src={data[1]?.sprites.front_default as string | undefined} alt="" />
        </div>
      </div>
    </div>
  );
}
