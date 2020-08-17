import React from "react";
import classes from "./AboutMe.module.css";
import { Button } from "react-bootstrap";
import myPic2 from "../../Image/myPic2.JPG";
import { FaUmbrellaBeach } from "react-icons/fa";

export default function AboutMe() {
  return (
    <div>
      <div className={classes.UperDiv}>
        <h1>About Me </h1>
        <p>Find out who I am, where I'm from and what I'm all about.</p>
      </div>
      <div className={classes.BottomDiv}>
        <div className={classes.innerDiv}>
          <div className={classes.Me}>
            <h1>Who I Am </h1>
            <p>
              My name's Mahmoud Tohamy. I'm a developer based in Cairo, Egypt.
              During the day I’m hitting the GYM . During the evenings I spend
              my time working on freelance projects and building my own
              products.
            </p>
            <p>
              {" "}
              My most recent project is called Goofy Yelp. It's a page where you
              can review bad resturant and share what proplem you have with
              them.
            </p>
            <div className={classes.pic2Div}>
              <img className={classes.myPic2} src={myPic2} alt="myPic2" />
              <br />
              <p className={classes.beach}>
                My favorite beach pic <FaUmbrellaBeach />
              </p>
            </div>
          </div>
          <div>
            <hr className={classes.AboutmeHr} />
            <div className={classes.workWithme}>
              <h1>Why Work With Me </h1>
              <p>
                There’s nothing I enjoy more than designing and developing good
                websites for nice people. It really is that simple.
                <br />
                I’ve spent alot of time trying to perfect what I do and while
                I’ll never be perfect, I do my best to come close.
                <br />
                If you’ve got a project you’d like to work on with me just get
                in touch and we can get to work!
              </p>
              <Button
                className={classes.AboutMeBtn}
                variant="primary"
                size="lg"
              >
                {" "}
                Contact Me{" "}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
