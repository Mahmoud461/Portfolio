import React, { Component } from "react";
import Goofy from "../Componant/Goofy-yelp/Goofy-yelp";
import MyInfo from "../Componant/MyInfo/MyInfo";

import Services from "../Componant/MyServices/MyServices";

import "./LayOut.module.css";

class LayOut extends Component {
  render() {
    return (
      <div>
        <MyInfo />
        <Goofy />
        <Services />
      </div>
    );
  }
}
export default LayOut;
