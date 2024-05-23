import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./app/screens/auth/Login";
import Home from "./app/screens/pages/Home";
import toast, { Toaster } from "react-hot-toast";
import Sidebar from "./app/components/Sidebar";

const App = () => {
  const [user, setuser] = useState({});
  const [loader, setLoader] = useState(false);
  const [isSideBarOpen,setIsSideBarOpen] = useState(false)
  

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth) {
      setuser({ auth: auth });
    }
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Toaster />
      </div>
      {user?.auth ? <Sidebar /> : null}
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="/login"
          element={
            user?.auth ? (
              <Navigate to="/home" />
            ) : (
              <Login
                loader={loader}
                setLoader={setLoader}
                setUser={setuser}
                toast={toast}
              />
            )
          }
        />
        <Route
          path="/home"
          element={
            user.auth ? (
              <Home setuser={setuser} setLoader={setLoader} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
         <Route
          path="/trucks"
          element={
            user.auth ? (
              <Home setuser={setuser} setLoader={setLoader} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
         <Route
          path="/loads"
          element={
            user.auth ? (
              <Home setuser={setuser} setLoader={setLoader} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
         <Route
          path="/drivers"
          element={
            user.auth ? (
              <Home setuser={setuser} setLoader={setLoader} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
         <Route
          path="/mapping"
          element={
            user.auth ? (
              <Home setuser={setuser} setLoader={setLoader} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
         <Route
          path="/tax"
          element={
            user.auth ? (
              <Home setuser={setuser} setLoader={setLoader} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
         <Route
          path="/trips"
          element={
            user.auth ? (
              <Home setuser={setuser} setLoader={setLoader} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
          <Route
          path="/document"
          element={
            user.auth ? (
              <Home setuser={setuser} setLoader={setLoader} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
