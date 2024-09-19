import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SignupLogin from "./components/SignupLogin";
import Dashboard from "./components/Dashboard";
import "./App.css";
import SignupConfirm from "./components/SignupConfirm";
import GraphicExorcism from "./components/GraphicExorcism";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<SignupLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/confirm" element={<SignupConfirm />} />
        <Route path="/exorcist" element={<GraphicExorcism />} />
      </Routes>
    </Router>
  );
}

export default App;
