import React, { useContext } from "react";
import ContextPro from "../../context";

const Context = props => {
  const temp = useContext(ContextPro);
  return (
    <React.Fragment>
      <h2>学习useContext</h2>
      <p>Context:{temp}</p>
    </React.Fragment>
  );
};

export default Context;
