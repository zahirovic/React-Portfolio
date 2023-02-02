import React from "react";
import myResume from './resume.png';

function Resume() {
  return (
    <div className="columns">
      <div className="column">
        <p className="content is-medium">Resume</p>
        <div>
      <img src={myResume} alt="Resume" height="200" />

      <br />
      </div>
      </div>
          <div class="container">
    <div class="notification is-link is-light">
<div class="box is-medium">
<article class="media">
  <div class="media-left">
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
        </article>
    </div>
  </div>
</div>
</div>
  );
}

export default Resume;
