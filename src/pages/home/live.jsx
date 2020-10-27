import React from "react";
import ContextPro from "../../context";

class Live extends React.Component {
  constructor(props) {
    super(props);
    this.ownRef = React.createRef();
  }
  render() {
    return (
      <ContextPro.Consumer>
        {value => (
          <React.Fragment>
            <h1
              onClick={() => {
                console.log(this.ownRef.current.value);
                this.ownRef.current.focus();
              }}
            >
              Context : {value}
            </h1>
            <input ref={this.ownRef} />
          </React.Fragment>
        )}
      </ContextPro.Consumer>
    );
  }
}

export default Live;
