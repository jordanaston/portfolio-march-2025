import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { themeScript } from "@/scripts/theme-script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script id="theme-script" strategy="beforeInteractive">
          {themeScript}
        </Script>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
