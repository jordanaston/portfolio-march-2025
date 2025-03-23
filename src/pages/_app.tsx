import Head from "next/head";
import { ThemeProvider } from "@/context/ThemeContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "sonner";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Head>
        <title>Jordan Aston | Web & Mobile App Developer</title>
      </Head>
      <Component {...pageProps} />
      <Toaster />
    </ThemeProvider>
  );
}
