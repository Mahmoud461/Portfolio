import React from "react";

import classes from "./App.module.css";
import LayOut from "./LayOut/LayOut";
import MyProjects from "./Componant/Projects/Projects";
import NavBar from "./Componant/NavBar/NavBar";
import Fade from "react-reveal/Fade";
import Footer from "./Componant/Footer/Fotter";
import WorkTogether from "./Componant/WorkTogether/WorkTogether";
import AboutMe from "./Componant/AboutMe/AboutMe";
import Contact from "./Componant/Contact/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className={classes.App}>
        <div className={classes.nav}>
          <Fade top>
            <NavBar className={classes.navBar} />
          </Fade>
        </div>
        <Switch>
          <Route exact path="/" component={LayOut} />
          <Route path="/MyProjects" component={MyProjects} />
          <Route path="/AboutMe" component={AboutMe} />
          <Route path="/Contact" component={Contact} />
        </Switch>
        <WorkTogether />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
