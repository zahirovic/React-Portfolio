import React, { useState } from "react";
import About from "./About";
import Navigation from "./Navigation";
import Portfolio from "./Portfolio";
import Resume from './Resume';
import Contact from './Contact';

function Header() {
  const [currentPage, handlePageChange] = useState("About");
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Contact') {
    return <Contact />;
  }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <a
            className="navbar-item is-right"
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
      <main>
        <div>{renderPage(currentPage)}</div>
      </main>
    </div>
  );
}

export default Header;
