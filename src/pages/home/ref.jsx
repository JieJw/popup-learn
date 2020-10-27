import React, { useState, useRef } from "react";

const Ref = props => {
  const [count, setCount] = useState(0);
  const ref = useRef(0);
  const inputRef = useRef(null);

  function handle() {
    setTimeout(() => {
      console.log(count);
    }, 3000);
  }

  function increase() {
    setCount(count + 1);
    ref.current = count + 1;
  }

  return (
    <React.Fragment>
      <h4>count：{count}</h4>
      <button
        onClick={() => {
          increase();
        }}
      >
        addCount
      </button>
      <button
        onClick={() => {
          handle();
        }}
      >
        showCount
      </button>
      <p>currentCount:{ref.current}</p>
      <input
        ref={inputRef}
        onChange={e => {
          inputRef.current = e.target.value;
        }}
      ></input>
      <p>inputValue: {inputRef.current}</p>
      <div>
        <button
          onClick={() => {
            console.log(inputRef.current);
          }}
        >
          获取ref值
        </button>
      </div>
    </React.Fragment>
  );
};

export default Ref;
