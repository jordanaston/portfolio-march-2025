import Head from "next/head";
import { ThemeProvider } from "@/context/ThemeContext";
// import { clashDisplay } from "@/fonts";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Head>
        <title>Jordan Aston | Web & Mobile App Developer</title>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
