import React, { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);
    // console.log(props);

    this.state = {
      //   count: 0,
      userInfo: {
        name: "testUser",
        location: "default",
      },
    };

    // console.log("CHILD CONSTRUCTOR");
  }

  async componentDidMount() {
    // console.log("CHILD COMPONENT DID MOUNT");
    const data = await fetch("https://api.github.com/users/arihantp2");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log("user >", json);
  }

  componentWillUnmount() {
    console.log("component unmount called.");
  }

  render() {
    // console.log("CHILD RENDER");
    // const { name, location } = this.props;
    // const { count } = this.state;

    const { name, location, login, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card m-4 p-4 w-[200px] h-[250px] bg-gray-50 rounded-lg">
        <img src={avatar_url} className="w-20 h-20"></img>
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>contact : {login}</h4>
        {/* <p>count : {count}</p> */}
        {/* <button
          onClick={() => {
            //Never update state variables directly
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count +
        </button> */}
      </div>
    );
  }
}

export default UserClass;
