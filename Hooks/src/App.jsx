import React from "react";
import Effect from "./Effect";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import State_Navbar from "./State_Navbar";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<State_Navbar />} />
        <Route path="/Effect" element={<Effect />} />
      </Routes>
    </Router>
  );
};

export default App;
