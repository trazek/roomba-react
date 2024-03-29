import React from "react";

export function Button(props) {
  return (
    <button id={props.id} onClick={props.handler}>
      {props.label}
    </button>
  );
}
