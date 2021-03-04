import React, { Component } from "react";
import API from "../utils/API";
import Navbar from "./Navbar";
import BodyContainer from "./BodyContainer";

class RandomUser extends Component {
  state = {
    user: []
  };

  
  render() {
    return (
      <>
        <Navbar />
        <br></br>
        <BodyContainer />
        <br></br>
        <BodyContainer />
      </>
    );
  }
}

export default RandomUser;
