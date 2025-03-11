import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Meals from "./pages/Meals";
import FormPage from "./pages/FormPage";
import Navbar from "./components/Navbar"; // Parent component

const App = () => {
  return (
    <Router>
      <div className="container mt-4">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meals" element={<Meals />} />
          <Route path="/form" element={<FormPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
