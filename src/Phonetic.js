import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        🔈
      </a>
      <small className="p-2"> {props.phonetic.text}</small>
    </div>
  );
}
