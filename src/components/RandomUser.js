import React, { Component } from "react";
import API from "../utils/API";
import Navbar from "./Navbar";
import BodyContainer from "./BodyContainer";
import SearchForm from "./SearchForm";

class RandomUser extends Component {
  state = {
    user: []
  };

  // insert stuff to search for a user
  
  render() {
    return (
      <>
        <Navbar />
        <br></br>
        <SearchForm />
        <br></br>
        <BodyContainer />
        <br></br>
        <BodyContainer />
      </>
    );
  }
}

export default RandomUser;
