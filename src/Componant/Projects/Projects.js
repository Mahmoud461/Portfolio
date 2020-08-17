import React from "react";
import classes from "./Projects.module.css";
import GoofyYelp from "../Goofy-yelp/Goofy-yelp";
import DiceGame from "../DiceGame/DiceGame";
const Projects = () => (
  <div>
    <div className={classes.upperDiv}>
      <h1>My Projects</h1>
      <p>
        For the year I’ve been designing and developing websites. Below are some
        of my favourites.
      </p>
    </div>
    <div>
      <GoofyYelp />
      <DiceGame />
    </div>
  </div>
);
export default Projects;
