import "../styles/global.css";
import { trpc } from "../utils/trpc";
import type { AppProps } from "next/app";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ReactQueryDevtools/>    
    </>
  );
}

export default trpc.withTRPC(App);
