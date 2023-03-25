import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import "./App.scss";
import Navbar from "components/navbar/Navbar";
import Sidebar from "components/sidebar/Sidebar";
import Users from "pages/users/Users";
import UserDetails from "pages/user-detail/UserDetails";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Navbar />
      <main className="auth-routes">
        <Sidebar />
        <div className="route-wrapper">
          <Routes>
            <Route path="/" element={<Users />} />
          </Routes>
          <Routes>
            <Route path="/users" element={<Users />} />
          </Routes>
          <Routes>
            <Route path="/user-details" element={<UserDetails />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
