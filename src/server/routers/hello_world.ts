import { procedure, router } from "../trpc";
import { z } from "zod";

export const hello_world = router({
  hello: procedure
    .input(z.object({ name: z.string().optional(), age: z.number() }))
    .query(({ input }) => {
      return input.age;
    }),
});


