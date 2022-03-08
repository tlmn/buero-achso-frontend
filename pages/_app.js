import "@/styles/global.css";
import { useState, useEffect } from "react";
import { Provider as AppContextProvider } from "@/lib/useAppContext";
import { useRouter } from "next/router";

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const [appState, setAppState] = useState({
    claimID: 0,
    isBlurred: false,
    currentItem: 0,
  });

  const handleRoute = () =>
    setAppState((prev) => ({ ...prev, isBlurred: false }));

  useEffect(() => {
    router.events.on("routeChangeComplete", handleRoute);

    return () => {
      router.events.off("routeChangeComplete", handleRoute);
    };
  }, [router]);

  return (
    <AppContextProvider value={{ appState, setAppState }}>
      <Component {...pageProps} />
    </AppContextProvider>
  );
};

export default App;
