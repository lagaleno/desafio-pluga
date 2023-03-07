import type { AppProps } from "next/app";

// Context imports
import { RecentlyViewedToolsProvider } from "@/context/RecentlyViewedToolsContext";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
        <title> Ferramentas </title>
      </Head>
      <RecentlyViewedToolsProvider>
        <Component {...pageProps} />
      </RecentlyViewedToolsProvider>
    </>
  );
}
