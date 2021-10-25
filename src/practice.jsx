import react from "react";
import { useState} from "react";

const ContactForm=()=>{

const [status,setStatus]=useState("Submit");
const handleSubmit = async(e)=>{
e.preventDefault();
setStatus("sending");
const{name,email,message}=e.target.elements;
let details={
    name:name.value,
    email:email.value,
    message:message.value,
};
let response=await fetch("http://localhost:5000/contact",{
    method:"POST",
    headers:{
        "Content-Type" : "application/json;charset=utf-8",
        body:JSON.stringify(details),
    }
});
}



}




}