import React ,{useState}from 'react'


export default function Textform() {
    const [text ,setText] = useState('Enter the text here');
    const newtext = (evt) =>{
        const newText = evt.target.value ;
        setText(newText);
        };
        const Uppercase =() =>{
        setText(text.toUpperCase());
        
        };
        const Lowercase =() =>{
          setText(text.toLowerCase());
          
          };
    

    return (
      <>
     <form>
    <div class="mb-3">
      <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
      <textarea className="form-control" id="exampleInputEmail1" value={text} onChange={newtext} aria-describedby="emailHelp"/>
     
    </div>
  
  {/* onChange is working on reload of the page */}
  <button className="btn btn-primary mx-1 my-3" type="button" onClick={Uppercase}>ChangeToUpperCase</button>
  <button className="btn btn-primary mx-1 my-3" type="button" onClick={Lowercase}>ChangeToLowerCase</button>
  <div>
    <h3>More Details about text</h3>
    <p>{text.length} words and {text.split(" ").length} characters</p>
    <p>{0.008*text.split(" ").length} minutes to read</p>
    <h5>Preview</h5>
    <p>{text}</p>
  </div>
</form>
{/* // The reason for the page reload was that we have not set the type attribute of button to be button hence it is considering the type to be the submit and was submitting the form */}
</>
  )
}
