import React, { useState } from "react";
import "./RegisterForm.css";

function RegisterForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpass, setcpass] = useState("");
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const [error, setError] = useState({});
    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("message : ");
        let newError={};
        if(!email)
        {
            //setError("Email is Required");
            newError.email ="Email is Required";
        }
        else if(!emailRegex.test(email))
        {

            newError.emailRegex = "Not valid Email ";
        }
        if(!password)
        {
            newError.password ="Password is Required";
        }
        else if(password.length<=5) 
        {newError.passwordLength= "Enter 6 digit"};
        if(password!=cpass) 
        {
            newError.Chpass = "Wrong Password";
        }
        setError(newError);
    
        //console.log(error);


    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login Form</h2>

            <input
                type="text"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {error && <p style={{color:'red'}}>{error.email}</p>}<br/>
            {error && <p style={{color:'red'}}>{error.emailRegex}</p>}<br/>
            <br /><br />
            {/*error && <p style={{color:'red'}}>{error}</p>*/} <br/>
            <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br /><br />
            
            {error && <p style={{color:'red'}}>{error.password}</p>}<br/>
            {error && <p style={{color:'red'}}>{error.passwordLength}</p>}<br/>

            <input type="password" placeholder="Confirm Password" value={cpass} onChange={(e)=>setcpass(e.target.value)}/>
           {error && <p style={{color:'red'}}>{error.Chpass}</p>}<br/>
            <button type="submit">Login</button>
        </form>
    );
}

