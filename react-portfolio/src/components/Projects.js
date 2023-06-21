import React from 'react';


const Projects = () => {
  return (
    <div id="projects" className="box-style">
      <h2>PORTFOLIO</h2>
      <div className="flex-container">
        <section className="projects">
          <header>A BREW & A BITE</header>
          <div>
            <a href="https://mschuur.github.io/A-Brew-and-A-Bite/">Deployed Application</a>
            <a href="https://github.com/MSchuur/A-Brew-and-A-Bite">GitHub Repository</a>
          </div>
        </section>
        
        <section className="projects">
          <header>ROCKET RESUMES</header>
          <div>
            <a href="https://rocket-resumes.herokuapp.com/">Deployed Application</a>
            <a href="https://github.com/aturner1995/rocket-resumes">GitHub Repository</a>
          </div>
        </section>

        <section className="projects">
          <header>UNDER CONSTRUCTION</header>
          <div>
            {/* <a href="https://rocket-resumes.herokuapp.com/">Deployed Application</a>
            <a href="https://github.com/aturner1995/rocket-resumes">GitHub Repository</a> */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
