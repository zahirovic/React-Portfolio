import React from "react";

function Resume() {
  return (
    <div className="columns">
      <div className="column">
        <p className="content is-medium">Resume</p>
        <hr />

        <a
          className="button is-primary"
          href={process.env.PUBLIC_URL + "/melisa-zahirovic-resume.pdf"}
          target="_blank"
          rel="noreferrer"
        >
          <span className="icon">
            <i className="fas fa-download"></i>
          </span>
          <span>Download Resume</span>
        </a>
      </div>
      <div className="column">
        <p className="content is-medium">My Skills</p>
        <hr />
        <ul>
          <li>CSS</li>
          <li>Git</li>
          <li>HTML</li>
          <li>Javascript</li>
          <li>JSON</li>
          <li>Markdown</li>
          <li>React</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
