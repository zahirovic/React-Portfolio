import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>My Portfolio</strong> - a React site by{" "}
          <a
            href="https://github.com/zahirovic"
            target="_blank"
            rel="noreferrer"
          >
            Melisa Zahirovic
          </a>
          .
          <hr />
          <a
            href="www.linkedin.com/in/melisa-zahirovic"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
