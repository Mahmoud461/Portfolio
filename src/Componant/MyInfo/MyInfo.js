import React from "react";
import { Button, Col, Row, Container } from "react-bootstrap";
import classes from "./MyInfo.module.css";
import MyImage from "../../Image/myPic.JPG";
import Roll from "react-reveal/Roll";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const MyInfo = () => (
  <Container className={classes.infoContainer}>
    <Row>
      <Col className={classes.Info} sm="12" lg="6">
        <Roll left>
          <h1 className={classes.name}>Hey, I'm Tohamy</h1>
          <h2>
            Web developer from Cairo, Egypt. I create custom websites to help
            businesses do better online.
          </h2>
        </Roll>
        <Fade bottom>
          <Link to="/MyProjects">
            <Button size="lg" className={classes.projectBtn} variant="primary">
              {" "}
              My Projects
            </Button>
          </Link>
        </Fade>
      </Col>
      <Col className={classes.ImgCol} sm="12" lg="6">
        <Fade right>
          <div className={classes.imgDiv}>
            <img src={MyImage} className={classes.myPic} alt="myimg" />
          </div>
        </Fade>
      </Col>
    </Row>
  </Container>
);
export default MyInfo;
