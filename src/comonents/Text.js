import React, { useState } from 'react'

export default function Text(props) {
    const uppercase = () => {
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showalert("Converted into Uppercase","success")
    }

    const lowerrcase = () => {
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showalert("Converted into lowercase","success")
    }

    const cleartext = () => {
        let newtext = "";
        setText(newtext);
        props.showalert("Text Clear","success")
    }
    
    const Hideandshow = () => {
        let text = document.getElementById("bio")
        if (text.style.display === "block") {
            text.style.display = "none";
            props.showalert("textarea hide","success")
        }
        else {
            text.style.display = "block";
            props.showalert("textarea show","success")
        }
        
    }
    const CopyText = ()=>{
        let text = document.getElementById("bio");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showalert("text copy in to clipboard","success")
    }
    function RemoveSpace(){
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showalert("Extra spaces Remove","success")
    }
    
    const handleonchange = (event) => {
        console.log("on change")
        setText(event.target.value)
    }
    const [text, setText] = useState("");
    return (
        <div className='mt-4'>
            <div>
                <h1>{props.heading}</h1>
                <textarea type="text" name="bio" id="bio" className='form-control border border-dark' value={text} onChange={handleonchange} rows="10"></textarea>
                <button className="btn btn-primary mt-2" onClick={uppercase}>conver to Uppercase</button>
                <button className="btn btn-primary mt-2 ms-3" onClick={lowerrcase}>conver to lowercase</button>
                <button className="btn btn-primary mt-2 ms-3" onClick={cleartext}>clear Text</button>
                <button className="btn btn-primary mt-2 ms-3" onClick={Hideandshow}>Hide / show</button>
                <button className="btn btn-primary mt-2 ms-3" onClick={CopyText}>Copy Text</button>
                <button className="btn btn-primary mt-2 ms-3" onClick={RemoveSpace}>Remove Space</button>
            </div>
            <div className="container">
                <h1>text count</h1>
                <p>{text.split(" ").length} word and {text.length} character</p>
                <p>{0.008 * text.split(" ").length}s time to read word</p>
                <p>preview</p>
                <p>{text}</p>
            </div>

        </div>
    );
}
