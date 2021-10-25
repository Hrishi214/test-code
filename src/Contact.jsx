import React from 'react'
import { useState } from 'react'

function Contact() {

     const [Name, setName] = useState();
     const [FullName, SetFullName] = useState();
     

     const inputEvent=(event)=>{
         //console.log(event.target.value);
         setName(event.target.value)
        
        };

        const onSubmit =()=>{
           SetFullName(Name); 
        };
  
    return (
        <div>
           <>
   <h1>hello {FullName}</h1> 

           <form>
  <input type="text" id="fname" name="fname"  onChange={inputEvent} value={Name}/><br/>

  <button onClick={onSubmit}>click me</button>
</form>
           </>
        </div>
    )
}

export default Contact
