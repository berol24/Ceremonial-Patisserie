import React from "react";
import "../../styles/Input_css/Input.css"
function Input(props) {
  return (
    <div>
      <div className="input-items">
        <label>{props.label}</label>
        <br/>
        <input className="input-item" type={props.type} name={props.name} />
      </div>
    </div>
  );
}

export default Input;
