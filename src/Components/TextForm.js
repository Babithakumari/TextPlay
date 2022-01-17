import React, { useState } from "react";
import Button from "./Button.js";
/* Allows to use state in without class
Introduced to solve stateful logic
1) Text variable has default value "Enter Text here"(text:state variable)
2) Whenever text is updated, it is possible via setText function
3) useState is one of the hooks:
It returns a pair - a)Current state value b) A function to update it
Only argument required is intitial state*/

export default function TextForm(prop) {
  const [text, setText] = useState("");

  function wordCount() {
    let arr = text.split(" ");
    if (arr.length === 1 && arr[0] === "") {
      return 0;
    }
    return arr.length;
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleUpClick = (event) => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = (event) => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  /* To reverse text */
  const handleReverse = (event) => {
    /* Convert string to array*/
    let strArr = text.split("");
    /* Reverse array*/
    strArr = strArr.reverse();
    /* Convert array to string*/
    let newText = strArr.join("");
    setText(newText);
  };

  return (
    <>
      <div className="large-container">
        <div className="container">
          <h1>Enter text to manipulate</h1>
          <div id="textBox">
            <textarea
              rows="8"
              cols="75"
              value={text}
              onChange={handleOnChange}
            />
          </div>
          <button className={`btn${prop.mode}`} onClick={handleUpClick}>
            Change to uppercase
          </button>
          <button className={`btn${prop.mode}`} onClick={handleLowClick}>
            Change to Lowercase
          </button>
          <button className={`btn${prop.mode}`} onClick={handleReverse}>
            Reverse Text
          </button>
        </div>

        <div className="container">
          <h1>Text Summary :</h1>
          <p>
            {wordCount()} words, {text.length} characters
          </p>
        </div>

        <div className="container">
          <h1>Preview :</h1>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
