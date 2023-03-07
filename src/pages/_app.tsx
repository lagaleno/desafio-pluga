import type { AppProps } from "next/app";

// Context imports
import { RecentlyViewedToolsProvider } from "@/context/RecentlyViewedToolsContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecentlyViewedToolsProvider>
        <Component {...pageProps} />
      </RecentlyViewedToolsProvider>
    </>
  );
}
