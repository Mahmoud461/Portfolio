import React from "react";
import classes from "./DiceGame.module.css";
import goofy from "../../Image/goofy.JPG";
import Dice from "../../Image/DiceGame.JPG";
import { Row, Col, Container, Button, Image } from "react-bootstrap";
import { IoLogoJavascript } from "react-icons/io";
import { RiComputerLine } from "react-icons/ri";
import Fade from "react-reveal/Fade";
import Roll from "react-reveal/Roll";
import Flip from "react-reveal/Flip";

const DiceGame = () => (
  <div className={classes.Featured}>
    <div className={classes.goofyDiv}>
      <Container>
        <Row>
          <Col lg="6" sm="12" className={classes.goofyInfo}>
            <Roll left>
              <h1> Dice Game</h1>
              <p>
                A game that each one roll the dice to see who get a bigger
                number{" "}
              </p>
              <Roll left>
                <span>
                  {" "}
                  <RiComputerLine /> Web Design{" "}
                </span>
                <br />{" "}
                <span>
                  <IoLogoJavascript /> JavaScript
                </span>
                <br />
              </Roll>
            </Roll>
            <Flip right>
              <Button className={classes.detailsBTn} variant="primary">
                {" "}
                View Details
              </Button>
            </Flip>
          </Col>
          <Col lg="6" sm="12">
            <Fade right>
              <Image
                className={classes.goofyImg}
                src={Dice}
                alt="goofy"
                fluid
              />
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
);
export default DiceGame;
