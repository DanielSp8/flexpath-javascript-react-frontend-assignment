import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import Home from "./pages/Home";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <ErrorBoundary>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
          <Link to="/" className="navbar-brand ms-4 nav-link">
            User Behavior Data
          </Link>
          <Link to="/Search" className="navbar-brand ms-4 nav-link">
            Search Through Dataset
          </Link>
        </nav>
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Search" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
