import React from 'react'
import "../../styles/Button_css/Button.css"
function Button(props) {
  return (
    <>
      <button type={props.type} className={props.className} >{props.children}</button>
    </>
  )
}

export default Button
