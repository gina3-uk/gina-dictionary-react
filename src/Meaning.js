import React from "react";
import Synonyms from "./Synonyms.js";
import "./Meaning.css";

export default function Meaning(props) {
  let line = "";
  return (
    <div className="Meaning">
      <h4 className="wordType">{props.meaning.partOfSpeech}</h4>

      {props.meaning.definitions.map(function (definition, index) {
        if (index > 0) {
          line = <hr />;
        }
        return (
          <div key={index}>
            {line}
            <div className="definition">{definition.definition}</div>
            <div className="example">{definition.example}</div>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
