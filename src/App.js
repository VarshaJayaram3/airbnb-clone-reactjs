import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";

import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import Footer from "./components/Footer";
import Rentals from "./components/Rentals";
import Signin from "./components/Signin"; // Ensure correct path

function App() {
  return (
    <div className="">
      {/* Navbar */}
      <Navbar />
      {/* Content */}
      <div className="sm:mx-6 md:mx-10 lg:mx-12 px-3">
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={
            <>
              <Filters />
              <Rentals />
            </>
          } />
        </Routes>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;



