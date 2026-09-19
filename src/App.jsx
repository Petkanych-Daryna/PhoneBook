import React, { useEffect, useState } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import { AppBar } from "./components/AppBar";
import { HomePage } from "./pages/HomePage";
import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import { ContactsPage } from "./pages/ContactsPage";
import { fetchCurrentUser, loginUser, logoutUser, registerUser } from "./services/api";

export default function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    if (token)
      fetchCurrentUser(token)
        .then(setUser)
        .catch(() => {
          setUser(null);
          setToken("");
          localStorage.removeItem("token");
        });
  }, [token]);

  const handleRegister = (data) =>
    registerUser(data).then((res) => {
      setUser(res.user);
      setToken(res.token);
      localStorage.setItem("token", res.token);
    });
  const handleLogin = (data) =>
    loginUser(data).then((res) => {
      setUser(res.user);
      setToken(res.token);
      localStorage.setItem("token", res.token);
    });
  const handleLogout = () =>
    logoutUser(token).then(() => {
      setUser(null);
      setToken("");
      localStorage.removeItem("token");
    });

  const isLoggedIn = Boolean(user);

  return (
    <div>
      <AppBar
        isLoggedIn={isLoggedIn}
        email={user?.email}
        onLogout={handleLogout}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            isLoggedIn ? (
              <Navigate to="/contacts" />
            ) : (
              <RegisterPage onRegister={handleRegister} />
            )
          }
        />
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/contacts" />
            ) : (
              <LoginPage onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/contacts"
          element={
            isLoggedIn ? (
              <ContactsPage token={token} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </div>
  );
}
