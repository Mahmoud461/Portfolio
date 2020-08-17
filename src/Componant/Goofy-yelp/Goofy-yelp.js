import React from "react";
import classes from "./Goofy-yelp.module.css";
import goofy from "../../Image/goofy.JPG";
import { Row, Col, Container, Button, Image } from "react-bootstrap";
import { FaReact } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import Fade from "react-reveal/Fade";
import Roll from "react-reveal/Roll";
import Flip from "react-reveal/Flip";

const GoofyYelp = () => (
  <div className={classes.Featured}>
    <div className={classes.goofyDiv}>
      <h5 className={classes.divTitle}>My Projects </h5>
      <hr className={classes.servicesHr} />
      <Container>
        <Row>
          <Col lg="6" sm="12">
            <Fade left>
              <Image
                className={classes.goofyImg}
                src={goofy}
                alt="goofy"
                fluid
              />
            </Fade>
          </Col>

          <Col lg="6" sm="12" className={classes.goofyInfo}>
            <Roll right>
              <h1> Goofy yelp</h1>
              <p>
                A page where you can review bad resturant and share what proplem
                you have with them{" "}
              </p>
              <Roll right>
                <span>
                  {" "}
                  <RiComputerLine /> Web Design{" "}
                </span>
                <br />{" "}
                <span>
                  <FaReact /> React Framework
                </span>
                <br />
              </Roll>
            </Roll>
            <Flip left>
              <Button className={classes.detailsBTn} variant="primary">
                {" "}
                View Details
              </Button>
            </Flip>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
);
export default GoofyYelp;
