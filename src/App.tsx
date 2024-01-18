import { useEffect, useState } from "react";
import Loading from "./pages/Loading";
import Main from "./pages/Main"
import { BrowserRouter as Router } from "react-router-dom";
import { SnackbarProvider } from "notistack";

function App() {

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setIsLoading(false);
    }, 2000);

    // Cleanup the timeout to avoid memory leaks
    return () => {
      clearInterval(timeoutId)
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SnackbarProvider>
      <Router>
        {isLoading ?
          <Loading /> :
          <Main />
        }
      </Router>
    </SnackbarProvider>
  )
}

export default App
