import React from "react";
import myAvatar from './placeholder.png'

function About() {
  return (
    <div class="container">
      <div class="notification is-link is-light">
<div class="box is-medium">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
      <img src={myAvatar} alt="placeholder" height="200" />
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>Melisa</strong> <a href="https://github.com/zahirovic">@zahirovic</a> on github
          <br></br>
          I am a full-stack engineering student at the University of Minnesota coding bootcamp.
        </p>
        <p>I excel at researching and utilizing my resources to better understand concepts for both myself and my team. With the information I have learned over my time in the bootcamp I would like to pursue a career on programming as well as further my education in computer science. </p>
      </div>
    </div>
  </article>
</div>
</div>
</div>
)
}

export default About;