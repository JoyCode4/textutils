import React, { useState } from "react";
import PropTypes from "prop-types";

function TextForm(props) {
  const [text, setText] = useState("");
  const Uppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success");
  };

  const Lowercase = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to Lowercase","success");
  };

  const Capitalized = () => {
    let newData = text.toLowerCase();
    let words = newData.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }

    let newText = words.join(" ");
    setText(newText);
    props.showAlert("Converted to Capitalized","success");
  };

  const Encrypt = () => {
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      newText = newText + text.charCodeAt(i) + ".";
    }
    setText(newText);
    props.showAlert("Text is Encrypted","success");
  };
  
  const Decrypt = () => {
    let data = text.split(".");
    let newText = "";
    data.pop();
    for (let i of data) {
      newText = newText + String.fromCharCode(parseInt(i));
    }
    setText(newText);
    props.showAlert("Text is Decrypted","success");
  };

  const Clear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared","success");
  };

  const uppercaseChange = (e) => {
    setText(e.target.value);
  };

  // Word count without null words
  const words = text.split(" ").filter((word)=>{
    return word!=="";
  })
  console.log(words);
  return (
    <>
      <div className="container my-3" style={{color:props.mode==="light"?"black":"white"}}>
        <h1>{props.heading}</h1>
        <div className="my-3">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            rows="8"
            placeholder="Enter Text here"
            onChange={uppercaseChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#464851",
              color:props.mode==="light"?"black":"white"
            }}
          ></textarea>
        </div>
        <button disabled={text.length===0} className={`btn btn-primary mx-3 my-1`} onClick={Uppercase}>
          Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={Lowercase}>
          Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={Capitalized}>
          Capitalized
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={Clear}>
          Clear Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={Encrypt}>
          Encrypt
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={Decrypt}>
          Decrypt
        </button>
      </div>
      <div className="container my-3 " style={{color:props.mode==="light"?"black":"white"}}>
        <h1>Text Summary</h1>
        <p>
          Words : {words.length} , Characters : {text.length}
        </p>
        <p>{0.008 * words.length} mins read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter the Text in Textbox for Preview"}</p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default TextForm;
