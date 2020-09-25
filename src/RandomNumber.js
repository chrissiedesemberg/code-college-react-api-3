import React, { Component } from "react";
import axios from "axios"; // npm install axios
import ReactLoading from "react-loading";

class RandomNumber extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      data: [],
    };
  }

  componentDidMount() {
    this.randomNumbers(1, 40, 100);
  }

  randomNumbers(min, max, count) {
    axios
      .get(
        "http://cors-anywhere.herokuapp.com/http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=5"
      )
      .then((res) => {
        this.setState({
          isLoading: false,
          data: res.data,
        });
        console.log(res.data);
      });
  }
  render() {
    return (
      <div>
        <div>Below are your random number:</div>
        {this.state.isLoading && (
          <ReactLoading type="spinningBubbles" color="#444" />
        )}
        <div>↓</div>
        <div>{this.state.data}</div>
        <div>↑</div>
        <div>Above are the random number</div>
        <div>Refresh to see another</div>
      </div>
    );
  }
}
export default RandomNumber;
