import React, { useState } from "react";
import "./style.css";

const UseState = () => {
  const initialData = 15;
  const [myNum, setMyNum] = useState(initialData);
  console.log(myNum, setMyNum);
  return (
    <>
      <div className="center_div">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        INCR
      </div>
      <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        DECR

      </div>
    </>
  );
};

export default UseState;