import React, { useState } from "react";
import "../../styles/Input_css/Input.css"
function Input(props) {

  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    
  };
  return (
    <div>
      <div className={props.className_items}>
        <label>{props.label}</label>
        <br/>
        <input className={props.className_item} onChange={handleInputChange} type={props.type} name={props.name} value={inputValue}/>
        <svg xmlns="http://www.w3.org/2000/svg" className={`show_icon ${inputValue ? 'hidden_icon' : ''}`} width={props.width_svg} height={props.height_svg} fill="currentColor" class={props.class_svg} viewBox="0 0 16 16">
  <path d={props.path}/>
</svg>
        
      </div>
    </div>
  );
}

export default Input;
