import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import classes from "./Myservices.module.css";
import { RiComputerLine } from "react-icons/ri";
import { FiPenTool } from "react-icons/fi";
import Pulse from "react-reveal/Pulse";
const Services = () => (
  <div className={classes.cardDiv}>
    <Container className={classes.cardContainer}>
      <h5 className={classes.divTitle}>My Services </h5>
      <hr className={classes.servicesHr} />
      <Row className={classes.row}>
        <Col lg="6" sm="12">
          <Pulse>
            <div className={classes.card}>
              <FiPenTool className={classes.CardIcon} />
              <hr className={classes.cardHr} />
              <h1 className={classes.title}>Web Design</h1>
              <h5 className={classes.tilte2}>User Focused </h5>
              <p>
                A website should be designed for the people who will use it, so
                that's exactly what I do. User focused design should be the
                primary goal of any website.
              </p>
            </div>
            
          </Pulse>
        </Col>
        <Col lg="6" sm="12">
          <Pulse>
            <div className={classes.card}>
              <RiComputerLine className={classes.ComputerIcon} />
              <hr className={classes.cardHr} />
              <h1 className={classes.title}>Web Development</h1>
              <h5 className={classes.tilte2}>Responsive and Fast</h5>
              <p>
                Every website should be built with two primary goals: Firstly,
                it needs to work across all devices. Secondly, it needs to be
                fast as possible.
              </p>
            </div>
          </Pulse>
        </Col>
      </Row>
    </Container>
  </div>
);
export default Services;
