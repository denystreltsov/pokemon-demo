import '../styles/global.css';
import { trpc } from '../utils/trpc';
import type { AppProps } from 'next/app';

export function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default trpc.withTRPC(App);