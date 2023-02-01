import React from "react";
import Project from "./Project";

const projects = [
    {
      id: 0,
      title: "Five Lives Game Forum",
      languages: "CSS, Handlebars.js, Javascript",
      image: "/images/Five-Lives-Game-Forum.png",
      description: "We created a web application that funcitons as a video game forum. I created the handlebars.",
      repo: "https://github.com/tannerkothlow/five-lives-game-forum",
      live: "https://hidden-fjord-30067.herokuapp.com/",
    },
    {
      id: 1,
      title: "Pre-Work Study Guide",
      languages: "CSS, HTML, Javascript",
      image: "/images/pre-work-study-guide.png",
      description: "This was my first coding project as a student. It is a note taking study guide.",
      repo: "https://github.com/zahirovic/prework-study-guide",
      live: "https://zahirovic.github.io/prework-study-guide/",
    },
  ];
  
  function Portfolio() {
    return (
      <div>
        <p className="content">Portfolio</p>
        <hr/>
  
        <Project projects={projects}/>
      </div>
    );
  }
  
  export default Portfolio;