import React from "react";
import Project from "./Project";

const projects = [
    {
      id: 0,
      title: "Five Lives Game Forum",
      languages: "CSS, Handlebars.js, Javascript",
      packages: "express, bcrypt, sequelize, mysql, dotenv",
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
    {
      id: 2,
      title: "",
      languages: "",
      packages: "",
      image: "/images/",
      description: "",
      repo: "https://github.com/",
      live: "",
    },
    {
      id: 3,
      title: "",
      languages: "",
      packages: "",
      image: "/images/",
      description: "",
      repo: "https://github.com/",
      live: "",
    },
    {
      id: 4,
      title: "",
      languages: "",
      packages: "",
      image: "/images/",
      description: "",
      repo: "https://github.com/",
      live: "",
    },
  ];
  
  function Portfolio() {
    return (
      <div>
        <p className="content is-medium">Portfolio</p>
        <hr />
  
        <Project projects={projects}/>
      </div>
    );
  }
  
  export default Portfolio;