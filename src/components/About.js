import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">Programming Student</p>
      <hr />
      <img className="avatar" src={process.env.PUBLIC_URL + '/images/placeholder.png'} alt="Melisa Zahirovic"/>
      <p className="content is-italic">
      I'm Melisa, a full-stack engineering student. I would like to apply my knowledge to a job in software developing.
      </p>
      <p className="content">
I specialize in utilizing resources to understand topics me or my group do not know. 
      </p>
    </div>
  );
}

export default About;