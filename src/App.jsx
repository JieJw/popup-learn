import React, { useState } from "react";
import "./App.css";
import Popup from "./popup/index";

const APP = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "隐藏" : "显示"}
      </button>
      <Popup
        onClose={() => {
          setVisible(false);
        }}
        {...{ visible }}
        mask={true}
      >
        这是一个测试界面
      </Popup>
    </div>
  );
};

export default APP;
