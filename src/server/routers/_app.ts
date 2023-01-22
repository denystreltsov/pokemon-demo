import {router} from "../trpc";
import { hello_world } from "./hello_world"; 
import { pokemon_router } from "./pokemon";
import { inferProcedureOutput } from "@trpc/server";
export const appRouter = router({
    hello: hello_world,
    pokemon: pokemon_router,
})



export type AppRouter = typeof appRouter;