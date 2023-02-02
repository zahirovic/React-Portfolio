import React from "react";

const Navigation = () => {
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
    <div class="navbar-start">
      <a class="navbar-item">
        <a href = "https://zahirovic.github.io/React-Portfolio/#about%20me">About Me
      </a>
      </a>
      <a class="navbar-item">
        <a href = "https://zahirovic.github.io/React-Portfolio/#portfolio"> Portfolio
      </a>
      </a>
        <a class="navbar-item">
        <a href = "https://zahirovic.github.io/React-Portfolio/#resume"> Resume
        </a>
        </a>
          <a class="navbar-item">
          <a href = "https://zahirovic.github.io/React-Portfolio/#contact"> Contact
          </a>
          </a>
        </div>
      </div>
</nav> 
);
};


export default Navigation;
