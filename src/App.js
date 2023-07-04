import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Homes/Homes";
import Detail from "./component/Details/Detail";

function App() {
  return (
    <Router>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/item/:id" element={<Detail />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
