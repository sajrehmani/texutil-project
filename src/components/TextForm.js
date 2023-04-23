import React,{useState} from 'react'

export default function TextForm(props) {
  const [text,setText] = useState("")
  const [chracterLenght,setchracterLength] = useState(0)
  const [wordLenght,setwordLength] = useState(0)

  const handleUPClick = ()=>{
    //console.log("handle click");
    let newText = text.toUpperCase();
    setText(newText);
    let charcount = text.length;
    setchracterLength(charcount);
    let wordCount = text.split(' ').length;
    setwordLength(wordCount);
    props.showAlert("Text Convert to uppercase successfully","success")
  }
  const handleLCClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    let charcount = text.length;
    setchracterLength(charcount);
    let wordCount = text.split(' ').length;
    setwordLength(wordCount);
    props.showAlert("Text Convert to lowercase successfully","success")
  }
  const handleTextChange = (event)=>{
   // console.log("handle change");
    setText(event.target.value);
    let charcount = text.length;
    setchracterLength(charcount);
    let wordCount = text.split(' ');

var filtered = wordCount.filter(function (el) {
  return el != null && filtered != '';
});
    setwordLength(filtered.length);
    
  }

  const handleCpClick=()=>{
    navigator.clipboard.writeText(text)
    props.showAlert("Text copied successfully","success")
  }
  const handleClearClick=()=>{
    setText("");
    let charcount = text.length;
    setchracterLength(charcount);
    let wordCount = text.split(' ').length;
    setwordLength(wordCount);
    props.showAlert("Text cleared successfully","success")
  }

  return (
    <div class="container">
 
 <h1 style={{color: props.mode =="dark"? "white":"#65432f"}}>{props.heading}</h1>
 <div className="mb-3" style={{color: props.mode =="dark"? "#65432f":"white"}}>
    <textarea value={text} className="form-control" onChange={handleTextChange} id="exampleFormControlTextarea1" rows="8"></textarea>
  </div>
  <button type="submit" className='btn btn-primary mx-2' onClick={handleUPClick}>Convert to Uppercase</button>
  <button type="submit" className='btn btn-primary mx-2' onClick={handleLCClick}>Convert to Lowecrase</button>
  <button type="submit" className='btn btn-primary mx-2' onClick={handleCpClick}>Copy to Clipboard</button>
  <button type="submit" className='btn btn-primary mx-2' onClick={handleClearClick}>Clear</button>
  <div className="container">
    <h4 style={{color: props.mode =="dark"? "white":"#65432f"}}>Your words count {wordLenght} and chracter count is {chracterLenght}</h4>
    <h4 style={{color: props.mode =="dark"? "white":"#65432f"}}>Your can read this in {0.008*text.split(' ').length} minute</h4>

<h4 style={{color: props.mode =="dark"? "white":"#65432f"}}>Preview</h4>
<p style={{color: props.mode =="dark"? "white":"#65432f"}}>{text}</p>
  </div>
    </div>
    
  )
}
