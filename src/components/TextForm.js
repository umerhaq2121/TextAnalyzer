import React, { useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState("");

  // Function for (upperCase)
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);

    //props.showAlert("Converted to uppercase", "success");
  };

  // Function for (LowerCase)
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);

    //props.showAlert("Converted to lowercase", "success");
  };

  // Function for (Clearing Text)
  const handleClearClick = () => {
    setText("");

    //props.showAlert("Text cleared", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // Function for (Copying Text)
  const handleCopy = () => {
    const newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);

    //props.showAlert("Text copied", "success");
  };

  // Function for (Handling Extra Spaces)
  const handleExtraSpaces = () => {
    let newText = text.replace(/\s+/g, " ");
    setText(newText);

    //props.showAlert("Removed extra spaces", "success");
  };

  // Function for (Capitalizing First Letter)
  const handleFirstLetter = () => {
    let newText = text.charAt(0).toUpperCase() + text.slice(1);
    setText(newText);

    //props.showAlert("First letter capitalized", "success");
  };

  // Function for (Word Count - Excluding Spaces in a Word )
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "white" : "black" }}
    >
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "dark" ? "#324869" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          id="myBox"
          rows="10"
        ></textarea>
      </div>
      <button
        disabled={text.length === 0}
        className="btn btn-success mx-1 my-1"
        onClick={handleUpClick}
      >
        Convert to Uppercase
      </button>
      <button
        disabled={text.length === 0}
        className="btn btn-success mx-1 my-1"
        onClick={handleLoClick}
      >
        Convert to Lowercase
      </button>
      <button
        disabled={text.length === 0}
        className="btn btn-success  mx-1 my-1"
        onClick={handleClearClick}
      >
        Clear Text
      </button>
      <button
        disabled={text.length === 0}
        className="btn btn-success mx-1 my-1"
        onClick={handleCopy}
      >
        Copy Text
      </button>
      <button
        disabled={text.length === 0}
        className="btn btn-success  mx-1 my-1"
        onClick={handleExtraSpaces}
      >
        Remove Extra Space
      </button>
      <button
        disabled={text.length === 0}
        className="btn btn-success mx-1 my-1"
        onClick={handleFirstLetter}
      >
        First Letter Capital
      </button>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Text Summary</h2>
        <p>
          {wordCount} Words and {text.length} Characters
        </p>
        <p>{(0.008 * wordCount).toFixed(2)} Average reading time (minutes)</p>
      </div>
      <h2>Preview Text</h2>
      <p>
        {text.length > 0
          ? text
          : "Enter something in the textbox above to preview it."}
      </p>
    </div>
  );
}
