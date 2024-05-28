import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
      //  console.log("UpperCase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText);
       // setText("You have clicked on handleUpClick")
      props.showAlert("Converted to UpperCase!","success");
    }
//video12
    const handleLoClick = () => {
      //  console.log("UpperCase was clicked"+ text);
        let newText = text.toLowerCase();
        setText(newText);
       // setText("You have clicked on handleUpClick")
      props.showAlert("Converted to LowerCase!","success");
    }
//end video12

    const handleOnChange = (event) => {
      //  console.log("On Changed");
        setText(event.target.value);
    }

    const handleCopy = () => {
      //console.log("I am copy");
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
     props.showAlert("Copied to clipboard","success") 
    }

    const handleExtraSpaces = () => {
      let newText = text.split(/[]+/);
      setText(newText.join(" "))
    }

    const[text,setText] = useState('Enter text here');  {/*hooks*/}
   // text = "new text" ;//Wrong way to change the state
   // setText =("new text");//Correct way to change the state
  
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1> {props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
    </div>
    {/*VIDEO12 */}
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>Your text sumarry</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
