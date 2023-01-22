import { procedure, router } from "../trpc";
import { z } from "zod";

export const hello_world = router({
  hello: procedure
    .query(() => {
      console.log("from the router Hello world");
      return true;
    }),
});


