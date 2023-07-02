import React from "react";

export const IconSwitch = ({icon, onSwitch}) => {
  return (
    <span onClick={onSwitch} className="material-icons">{icon}</span>
  )
}
