import "@/styles/global.css";
import { useState } from "react";
import { Provider as AppContextProvider } from "@/lib/useAppContext";

const App = ({ Component, pageProps }) => {
  const [appState, setAppState] = useState({
    claimID: 0,
    isBlurred: false,
    currentItem: 0,
  });

  return (
    <AppContextProvider value={{ appState, setAppState }}>
      <Component {...pageProps} />
    </AppContextProvider>
  );
};

export default App;
