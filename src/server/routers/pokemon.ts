import { router, procedure } from "../trpc";
import { z } from "zod";
import { prisma } from "@/server/utils/prisma";
import { PokemonClient } from "pokenode-ts";

export const pokemon_router = router({
  get_pokemon: procedure
    .input(z.object({ id: z.number().array().length(2) }))
    .query(async ({ input }) => {
      if (input.id[0] === input.id[1]) {
        return null;
      }
      const api = new PokemonClient();
      let pokemon1, pokemon2;
      try {
        pokemon1 = await api.getPokemonById(input.id[0]);
        pokemon2 = await api.getPokemonById(input.id[1]);
      } catch (err: unknown) {
        const error = err as Error;
        console.log(error.message);
      }

      return [pokemon1, pokemon2];
    }),

  cast_vote: procedure
    .input(
      z.object({
        votedFor: z.number(),
        votedAgainst: z.number(),
      })
    )
    .mutation(async ({ input }) => {
      const voteInDb = await prisma.vote.create({
        data: { ...input },
      });

      return {success: true, vote: voteInDb};

    }),
});
