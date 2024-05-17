import React, { useState } from "react";

const TextForm = (props) => {
  const handleUpclick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    
    
  };
  const handleLowerclick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  const clearText = () => {
    let newtext ="";
    setText(newtext);
  };
  const copyText = () => {
    let text =document.getElementById('mybox');
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const removeExtraSpace = () => {
    let newtext =text.split(/[ ]+/);
    setText(newtext.join(""));
  };

  const handleonChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleonChange}
            style={{backgroundColor:props.mode==='dark'?'grey':'light',color: props.mode==='dark'?'white':'black'}}
            id="mybox"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpclick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowerclick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={clearText}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1"  onClick={copyText}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1"  onClick={removeExtraSpace}>
          Remove ExtraSpace
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Text Summary</h1>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter something to preview here'}</p>
      </div>
    </>
  );
};

export default TextForm;