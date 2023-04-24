import React, {useState} from "react";
import PropTypes from "prop-types";

function TextForm(props){
    const [text, setText] = useState("");
    const Uppercase = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const Lowercase = () =>{
        let newtext = text.toLowerCase();
        setText(newtext);
    }

    const Capitalized = ()=>{
        let newData = text.toLowerCase();
        let words = newData.split(" ");
        for(let i=0;i<words.length;i++){
            words[i]=words[i][0].toUpperCase()+ words[i].substring(1);
        }

        let newText = words.join(" ");
        setText(newText);
    }

    const Encrypt=()=>{
        let newText="";
        for(let i=0;i<text.length;i++){
            newText = newText+text.charCodeAt(i)+".";
        }
        setText(newText);
    }

    const Decrypt=()=>{
        let data=text.split(".");
        let newText=""
        data.pop();
        for(let i of data){
            newText = newText + (String.fromCharCode(parseInt(i)));
        }
        setText(newText);
    }

    const Clear = ()=>{
        let newText = "";
        setText(newText);
    }


    const uppercaseChange=(e)=>{
        setText(e.target.value);
    }
    return (
        <>
            <div className="container my-3">
                <h1>{props.heading}</h1>
                <div className="my-3">
                    <textarea className="form-control" value={text} id="myBox" rows="8" placeholder="Enter Text here" onChange={uppercaseChange}></textarea>
                </div>
                <button className="btn btn-primary mx-3" onClick={Uppercase} >Uppercase</button>
                <button className="btn btn-primary mx-3" onClick={Lowercase} >Lowercase</button>
                <button className="btn btn-primary mx-3" onClick={Capitalized} >Capitalized</button>
                <button className="btn btn-primary mx-3" onClick={Clear} >Clear Text</button>
                <button className="btn btn-primary mx-3" onClick={Encrypt} >Encrypt</button>
                <button className="btn btn-primary mx-3" onClick={Decrypt} >Decrypt</button>
            </div>
            <div className="container my-3">
                <h1>Text Summary</h1>
                <p>Words : {text.split(" ").length} , Characters : {text.length}</p>
                <p>{0.008 * (text.split(" ").length)} mins read</p>
                <h2>Preview</h2>
                <p>
                    {text}
                </p>

            </div>
        </>

    );
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}

export default TextForm;