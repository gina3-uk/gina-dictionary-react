import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms && props.synonyms.length > 0) {
    return (
      <div>
        <ul className="Synonyms">
          <span className="synonymTitle">Similar: </span>
          {props.synonyms.map(function (synonym, index) {
            if (index < 6) {
              return <li key={index}>{synonym}</li>;
            } else {
              return null;
            }
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
