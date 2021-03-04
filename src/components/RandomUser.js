import React, { Component } from "react";
import API from "../utils/API";
import Navbar from "./Navbar";
import BodyContainer from "./BodyContainer";

class RandomUser extends Component {
  state = {
    user: []
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    fetch("https://randomuser.me/api/?results=200")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  searchUser = query => {
    API.search(query)
      .then(res => this.setState({ results: res.data.data }))
      .catch(err => console.log(err));
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
