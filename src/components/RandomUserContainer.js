import React, { Component } from "react";
import API from "../utils/API";

class RandomUserContainer extends Component {
    state = {
        result: {},
        search: ""
    };

    searchUser = query => {
        API.search(query)
        .then(res => this.setState({ result: res.data}))
        .catch(err => console.log(err));
    };
}

export default RandomUserContainer;