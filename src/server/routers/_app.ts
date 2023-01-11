import {router} from "../trpc";
import { hello_world } from "./hello_world"; 

export const appRouter = router({
    hello: hello_world,
})


export type AppRouter = typeof appRouter;