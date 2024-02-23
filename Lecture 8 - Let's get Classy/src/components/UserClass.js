import React, { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);
    // console.log(props);

    this.state = {
      count: 0,
    };

    console.log("CHILD CONSTRUCTOR");
  }

  componentDidMount() {
    console.log("CHILD COMPONENT DID MOUNT");
  }

  render() {
    console.log("CHILD RENDER");
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : arihantphad2@gmail.com</h4>
        <p>count : {count}</p>
        <button
          onClick={() => {
            //Never update state variables directly
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count +
        </button>
      </div>
    );
  }
}

export default UserClass;
