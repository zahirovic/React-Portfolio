import React from "react";

function Resume() {
  return (
    <div className="columns">
      <div className="column">
        <p className="content is-medium">Resume</p>
        <hr />

        <a

        >
          <span className="icon">
            <i className="fas fa-download"></i>
          </span>
          <span>View Resume</span>
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
