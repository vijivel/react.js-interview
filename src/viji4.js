import React,{useState} from "react";

export default function Form(){
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [error,setError] = useState({});

  function click(event){
    event.preventDefault()
    let errorvalues={}
    
   if (!name){
      errorvalues.name="enter the name";
    }
   else if (!age){
        errorvalues.age="enter the age";
    }
   else if (!email){
        errorvalues.email="enter the email";
    }
    else{
        window.alert("login sucessfully")
        setName("")
        setAge("")
        setEmail("")
    }
    setError(errorvalues)

    
  }

  return(
    <>
    <form onsubmit={click}>
        <div>
            <label>Name :</label>
            <input type="text" 
                   value={name}
                   onchange={(e)=>{setName(e.target.values)}}/>
            <p style={{color:"red"}}>{error.name}</p>       
        </div>

        <div>
            <label>Age :</label>
            <input type="number" 
                   value={age}
                   onchange={(e)=>{setAge(e.target.values)}}/>
            <p style={{color:"red"}}>{error.age}</p>       
        </div>

        <div>
            <label>Email :</label>
            <input type="email" 
                   value={email}
                   onchange={(e)=>{setEmail(e.target.values)}}/>
            <p style={{color:"red"}}>{error.email}</p>       
        </div>

        <button type="submit" onClick={click}>submit</button>
    </form>
    <hr/>
    </>
  );
}