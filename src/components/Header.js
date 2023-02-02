import React, { useState } from "react";
import About from "./About";
import Navigation from "./Navigation";


function Header() {
  const [currentPage, handlePageChange] = useState("About");

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <a
            className="navbar-item"
            rel="noreferrer"
            target="_blank"
            href="https://zahirovic.github.io/React-Portfolio/"
          >
            <span className="content is-large">Melisa Zahirovic</span>
          </a>
        </div>
      </nav>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}

export default Header;
