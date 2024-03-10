import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "./utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);

    // console.log("PARENT CONSTRUCTOR")
  }
  componentDidMount() {
    // console.log("PARENT COMPONENT DID MOUNT");
  }
  render() {
    // console.log("PARENT RENDER")

    return (
      <div>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({loggedInUser}) => <h1 className="text-lg font-bold">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        {/* <User name={"Arihant (Function)"} /> */}
        <UserClass name={"Arihant (Class)"} location="Pune" />
      </div>
    );
  }
}

export default About;
