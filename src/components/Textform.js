import React,{useState} from 'react'

export default function Textform(props) {
const [text, setText] = useState('Enter Text Here');

const handleUpClick = ()=>{
    // console.log("handleUpClick was clicked");
    // setText("You have clicked on handleUpClicked");

    let newtext=text.toUpperCase();
    setText(newtext);

    props.showAlert("Converted To UpperCase","Success");
}

const handleLoClick = ()=>{
  // console.log("handleUpClick was clicked");
  // setText("You have clicked on handleUpClicked");

  let newtext=text.toLowerCase();
  setText(newtext);
  props.showAlert("Converted To LowerCase","Success");
}

const handleReverseClick = ()=>{
 
  let newtext=text.split('').reverse().join('')

  setText(newtext);

  props.showAlert("Converted To ReverseCase","Success");
}



const handleOnChange = (event)=>{
    // console.log("handleOnChange was clicked");

    setText(event.target.value);
}


  return (
    <>
  <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
     
     <h3 >{props.heading}</h3>

     <textarea className="form-control"  style={{backgroundColor:props.mode==='dark'?'#060f1c':'white',color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange}  id="exampleFormControlTextarea1" rows="8"></textarea>
     <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert To Upper Case</button>
     <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert To Lower Case</button>
     <button className="btn btn-primary mx-2" onClick={handleReverseClick} >Convert To  Case</button>

  </div>

  <div className="container my-3"  style={{color:props.mode==='dark'?'white':'black'}}>
     <h2>Preview</h2>
     <p>{text.length>0?text:'Enter something to preview it here'}</p>

     <p>{text.split(" ").length} words and characters {text.length}</p>
     

  </div>
    
    </>
    
  )
}
