import "../styles/global.css";
import { globalCSS } from "@go1d/go1d";
import type { AppProps } from "next/app";

globalCSS();

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
