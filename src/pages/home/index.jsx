import React from "react";
import Live from "./live";
import Context from "./context";
import Reducer from "./reducer";
import Ref from "./ref";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { user } = this.props;
    return (
      <React.Fragment>
        <button>我是王皆皆{user}</button>
        <Live />
        <Context />
        <Reducer />
        <Ref />
      </React.Fragment>
    );
  }
}

export default Home;
