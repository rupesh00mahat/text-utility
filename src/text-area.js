import React, { useState, Fragment } from "react";
import "./style.css";



function TextArea(props) {
  const [userInput, changeUserInput] = useState("");
  return (
    <>
    <div style={props.styleToUse} className={`container bg-${props.mode ? 'dark' : 'light'}`}>
      <textarea
      
        value={userInput}
        onChange={(e) => {
          changeUserInput(e.target.value);
        }}
        style={{ height: "300px", width: "75%", display: "block" }}
      ></textarea>
      <div className="mt-1">
      <button
        onClick={() => {
          changeUserInput(userInput.toUpperCase());
          {userInput != '' && props.showAlertMessage('Converted To Uppercase SuccessFully')}
        }}
        type="button"
        className="btn btn-primary mr"
      >
        Convert to uppercase
      </button>

      <button
        onClick={() => {
          changeUserInput(userInput.toLowerCase());
          {userInput != '' && props.showAlertMessage('Converted To Lowercase SuccessFully')}


        }}
        type="button"
        className="btn btn-primary mx-1 my-1"
      >
        Convert to Lowercase
      </button>
      <button
        onClick={() => {
          navigator.clipboard.writeText(userInput)
      .then(function() {
        {userInput != '' && props.showAlertMessage('Text Copied to Clipboard SuccessFully')}

      })
      .catch(function(err) {
        alert('Failed to copy text: ', err);
      });
      
        }}
        type="button"
        className="btn btn-success mx-1 my-1"
      >
       Copy Text to Clipboard
      </button>
      <button
        onClick={() => {
          changeUserInput(userInput.replace(/\s+/g, ' '));
          {userInput != '' && props.showAlertMessage('Removed extra space SuccessFully')}


        }}
        type="button"
        className="btn btn-primary mx-1 my-1"
      >
      Remove Extra space
      </button>
      <button
        onClick={() => {
          changeUserInput('');
          {userInput != '' && props.showAlertMessage('Text Cleared SuccessFully')}


        }}
        type="button"
        className="btn btn-danger mx-1 my-1"
      >
        Clear Text
        </button>
    
      </div>
    </div>
    <div className={`container mt-5 bg-${props.mode ? 'dark': 'light'} text-${props.mode ? 'light': 'dark'} `}>
{ userInput.length > 0 && <Fragment>
<p>The text below has <strong>{userInput.length}</strong> characters and <strong>{userInput.split(' ').length}</strong> words.</p>
       <p>It will take <strong>{Math.floor((0.45*userInput.split(' ').length)/60) == 0 ? '<1 ' : Math.floor((0.45*userInput.split(' ').length)/60)}</strong> minutes to read this text.</p>
        <h1>Preview</h1>
        <p>{userInput}</p>
</Fragment>
      }
    </div>
    </>
  );
}

export default TextArea;
