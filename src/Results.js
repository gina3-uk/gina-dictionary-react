import React from "react";
import Meaning from "./Meaning.js";
import Phonetic from "./Phonetic.js";
import "./Results.css";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        <h3 className="searchedWord">
          <b>{props.results.word}</b>
        </h3>

        {props.results.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetic phonetic={phonetic} />
            </div>
          );
        })}

        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
