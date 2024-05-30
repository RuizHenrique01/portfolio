import { useEffect, useState } from "react";
import Loading from "./pages/Loading";
import Main from "./pages/Main"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import RedirectGuardRoute from "./guards/redirect.guard";

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
        <Routes>
          <Route path="" element={<RedirectGuardRoute />}>
            <Route path="" element={isLoading ?
              <Loading /> :
              <Main />
            } />
          </Route>
        </Routes>
      </Router>
    </SnackbarProvider>
  )
}

export default App
