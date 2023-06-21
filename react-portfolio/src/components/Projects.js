import React from 'react';


const Projects = () => {
  return (
    <div id="projects" className="box-style">
      <h2>PROJECTS</h2>
      <div className="flex-container">
        <section className="projects">
          <header>WEEK-1-CHALLENGE</header>
          <a href="https://amanda-lacroix.github.io/WEEK-1-CHALLENGE/">
            <img src="./Assets/01-html-css-git-homework-demo.png" alt="screenshot of website showing 3 males and 1 female sitting around a table having a meeting." />
          </a>
        </section>

        <section className="projects">
          <header>Under Construction #1</header>
          {/* <img src="./Assets/Lost-Dutchman.jpg" alt="image of Lost Dutchman" /> */}
          <p>Stay Tuned!</p>
        </section>

      
      </div>
    </div>
  );
};

export default Projects;
