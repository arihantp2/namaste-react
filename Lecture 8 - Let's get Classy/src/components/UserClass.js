import React, { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
  }

  render() {
    return (
      <div className="user-card">
        <h2>Name : {this.props.name}</h2>
        <h3>Location : Pune</h3>
        <h4>Contact : arihantphad2@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
