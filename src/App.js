import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Thankyou from "./pages/Thankyou";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Router basename="/">
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/thankyou" element={<Thankyou />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
