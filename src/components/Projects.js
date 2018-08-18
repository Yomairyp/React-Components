import projects from '../data/projects.json';
import React, { Component } from 'react';
import Project from './Project';



class Projects extends Component{


render() {
  return(
    projects.allProjects.map((data) => {
      return  <Project imgName={data.imgName} title={data.title} description={data.description} />;
    }
      )
    )
  }
}

export default Projects;