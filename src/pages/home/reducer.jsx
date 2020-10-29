import React, { useReducer } from "react";

const Reducer = props => {
  const [age, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "add":
        return (state = state + 1);
      case "decrease":
        return (state = state - 1);
      default:
        return (state = state * 2);
    }
  }, 0);
  return (
    <React.Fragment>
      {"WJJ的AGE"}:{age}
      <button
        key="button1"
        onClick={() => {
          dispatch({ type: "add" });
        }}
      >
        add
      </button>
      <button
        key="button3"
        onClick={() => {
          dispatch({ type: "decrease" });
        }}
      >
        decrease
      </button>
      <button
        key="button2"
        onClick={() => {
          dispatch({ type: "multi" });
        }}
      >
        multi
      </button>
    </React.Fragment>
  );
};

export default Reducer;
