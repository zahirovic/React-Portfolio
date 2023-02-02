import React from "react";

function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
       <span aria-hidden="true"></span>
      <span aria-hidden="true" ></span>
     </a>
  </div>
     <div id="navbarBasicExamplet" class="navbar-menu">
    <div class="navbar-start"></div>
    <a className="nav-item">
      <a
        href="#about"
        onClick={() => handlePageChange('About')}
        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
      >
        About
      </a>
</a>
    <a className="nav-item">
      <a
        href="#contact"
        onClick={() => handlePageChange('Contact')}
        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
      >
        Contact
      </a>
   
    <a className="nav-item">
      <a
        href="#portfolio"
        onClick={() => handlePageChange('Portfolio')}
        className={currentPage === 'P{ortfolio' ? 'nav-link active' : 'nav-link'}
      >
        Portfolio
      </a>
   </a>
    <a className="nav-item">
      <a
        href="#resume"
        onClick={() => handlePageChange('Resume')}
        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
      >
        Resume
      </a>
    </a>
</a>
</div>
</nav> 
  );
};


export default Navigation;
