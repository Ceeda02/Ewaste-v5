import logo from "./logo.svg";
import React from "react";

// Css
import "./App.css";

// Components
import Home from "./components/Home";
import Contact from "./components/Contact";
import Track from "./components/Track";
import Donate from "./components/Donate";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Register from "./components/Register";
import Admin from "./components/Admin";
import Footer from "./components/Footer";

// Router
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Switch,
  Link,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";

//HOUSTON WE GOT A PROBLEM

//Make sure the navbar will not be displayed if getstarted is shown, this also applies in
//login or register

function App() {
  // Define the user's role state
  const [userRole, setUserRole] = useState("user");

  // Get the navigate function to programmatically redirect the user
  const navigate = useNavigate();

  // Function to update the user's role
  const updateUserRole = (role) => {
    setUserRole(role);
  };

  // Create a function to conditionally redirect the user to the Admin component
  const redirectToAdmin = () => {
    if (userRole === "admin") {
      navigate("/admin");
    } else {
      // Redirect to the appropriate component for non-admin users
      // You can customize this part as per your application logic
      navigate("/Home");
    }
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Donate" element={<Donate />} />
        <Route path="/Track" element={<Track />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
