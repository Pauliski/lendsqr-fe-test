import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import "./App.scss";
import Navbar from "components/navbar/Navbar";
import Sidebar from "components/sidebar/Sidebar";
import Users from "pages/users/Users";
import UserDetails from "pages/user-detail/UserDetails";

function App() {
  let pathName = window.location.pathname;
  let arr = pathName.toString().split("/");
  let currentPath = arr[arr.length - 1];
  return (
    <React.StrictMode>
      <div className="App">
        {currentPath.length > 0 ? (
          <>
            <Navbar />
            <main className="auth-routes">
              <Sidebar />
              <div className="route-wrapper">
                <Routes>
                  <Route path="/users" element={<Users />} />
                  <Route path="/user-details/:id" element={<UserDetails />} />
                </Routes>
              </div>
            </main>
          </>
        ) : (
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        )}
      </div>
    </React.StrictMode>
  );
}

export default App;
