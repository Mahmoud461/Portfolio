import React from "react";
import { Button } from "react-bootstrap";
import classes from "./Work.module.css";
import { Link } from "react-router-dom";

const WorkTogether = () => (
  <div className={classes.WorkDiv}>
    <h1>Let's Work Together</h1>
    <h4>Have a project you'd like to discuss?</h4>
    <Link to="/Contact">
      <Button className={classes.getInTouchBtn} size="lg" variant="primary">
        {" "}
        Get in Touch
      </Button>
    </Link>
  </div>
);
export default WorkTogether;
