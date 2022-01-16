import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="Synonyms">
        <div className="synonymTitle">Similar:</div>
        {props.synonyms.map(function (synonym, index) {
          if (index > 0 && index < 9) {
            return <li key={index}>{synonym}</li>;
          } else {
            return "";
          }
        })}
      </ul>
    );
  } else {
    return null;
  }
}
