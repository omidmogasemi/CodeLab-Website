import React from "react";
import "./contactUs.css";


function InputBox(props) {
  return (
    <div>
      <label> {props.prompt} </label>
      <br></br>
      <input className="inputBox" style={{height: props.height, width: props.width}} />
    </div>
  );
}

export default InputBox;
