import React from "react";

import { GoMail } from "react-icons/go";
import classes from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

const Contact = () => (
  <div>
    <div className={classes.contacMe}>
      <h1>Contact Me</h1>
      <p className={classes.P}>
        If you’d like to chat about a project please fill in the form below and
        I’ll get back within 1-2 days.
      </p>
    </div>
    <div>
      <div className={classes.BottomDiv}>
        <div className={classes.innerDiv}>
          <div className={classes.acounts}>
            <h5 className={classes.contactH5}>My Gmail</h5>

            <label className={classes.contactlabel}>
              {" "}
              <GoMail className={classes.icon} /> : mahmoudtohamy24@gmail.com{" "}
            </label>
            <h5 className={classes.contactH5}>My Phone Number</h5>

            <label className={classes.contactlabel}>
              <FaPhoneAlt /> : 01100889819{" "}
            </label>
            <h5 className={classes.contactH5}>My Facebook Acount</h5>

            <label className={classes.contactlabel}>
              <AiFillFacebook className={classes.icon} /> :{" "}
              <a
                className={classes.alink}
                href="https://www.facebook.com/mahmoud.tohamy3/"
              >
                Mahmoud Tohamy FB
              </a>{" "}
            </label>
            <h5 className={classes.contactH5}>My Linkedin Acount</h5>

            <label className={classes.contactlabel}>
              <AiFillLinkedin className={classes.icon} /> :{" "}
              <a
                className={classes.alink}
                href="https://www.linkedin.com/in/mahmoud-tohamy-479673167/"
              >
                Mahmoud Tohamy In
              </a>{" "}
            </label>
            <h5 className={classes.contactH5}>My GitHup Acount</h5>

            <label className={classes.contactlabel}>
              <AiFillGithub className={classes.icon} /> :{" "}
              <a className={classes.alink} href="https://github.com/">
                Mahmoud Tohamy GitHup
              </a>{" "}
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Contact;
