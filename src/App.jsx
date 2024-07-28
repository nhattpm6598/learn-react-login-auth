import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./page/Home";
import PrivatePage from "./page/Private";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import ProtectedRoutev1 from "./components/ProtectedRoutev1";

function App() {
  const [user, setUser] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsFetching(false);
        return;
      }
      setUser(null);
      setIsFetching(false);
    });

    return () => unsubscribe();
  }, []);

  if(isFetching){
    return <h2>Loading ...</h2>
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<HomePage user={user} />}></Route>
        <Route
          path="/private"
          element={
            <ProtectedRoutev1 user={user}>
              <PrivatePage user={user} />
            </ProtectedRoutev1>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
