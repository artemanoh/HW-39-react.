import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshUser } from "./redux/operations";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Navigation from "./components/Navigation/Navigation";
import UserMenu from "./components/UserMenu/UserMenu";

function App() {
  const dispatch = useDispatch();

useEffect(() => {
  dispatch(refreshUser());
}, [dispatch]);
  const isLoggedIn = useSelector(
    state => state.auth.isLoggedIn
  );

  return (
    <>
      <Navigation />

      {isLoggedIn && <UserMenu />}

      <Routes>
        <Route
          path="/"
          element={<Navigate to="/contacts" replace />}
        />

        <Route
          path="/contacts"
          element={
            isLoggedIn ? (
              <Contacts />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />
      </Routes>
    </>
  );
}

export default App;