import React, { useState } from "react";


const Task =(props)=> {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpass, setcpass] = useState("");
    const [age,setAge]=useState(0);
    const userRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-z]{2,}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex =/^[a-zA-z]{8,}$/;
    const [error, setError] = useState({});
    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("message : ");
        let newError={};
        if(!user)
        {
            //setError("Email is Required");
            newError.user ="Email is Required";
        }
        else if(!userRegex.test(user))
        {

            newError.userRegex = "Not valid UserName ";
        }
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
        else if(passwordRegex.test(password))
        {
            newError.invalid_pass="Use some other characters";
        }
        else if(password.length<=8) 
        {newError.passwordLength= "Enter 8 digit"};

        if(age<16)
        {
            newError.AgeError= "Age requirement not met";
        }
        if(password!==cpass) 
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
                placeholder="UserName : "
                value={user}
                onChange={(e) => setUser(e.target.value)}
            />
            {error && <p style={{color:'red'}}>{error.user}</p>}<br/>
            {error && <p style={{color:'red'}}>{error.userRegex}</p>}<br/>
            <br /><br />
            {/*error && <p style={{color:'red'}}>{error}</p>*/} <br/>
            <input type="text"
            placeholder="Email@domain.com: "
            value={email}
            onChange={(e)=>setEmail(e.target.value)}/>
            {error && <p style={{color:'red'}}>{error.email}</p>}<br/>
            {error && <p style={{color:'red'}}>{error.emailRegex}</p>}<br/>
           
            <input 
            type="number"
            placeholder="Enter your Age :"
            value={age}
            onChange={(e)=> setAge(e.target.value)}/>
            {error && <p style={{color:'red'}}>{error.AgeError}</p>}<br/>
            <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            
            <br /><br />
            
            {error && <p style={{color:'red'}}>{error.password}</p>}<br/>
            {error && <p style={{color:'red'}}>{error.passwordLength}</p>}<br/>
            {error && <p style={{color:'red'}}>{error.invalid_pass}</p>}<br/>

            <input type="password" placeholder="Confirm Password" value={cpass} onChange={(e)=>setcpass(e.target.value)}/>
           {error && <p style={{color:'red'}}>{error.Chpass}</p>}<br/>
            <button type="submit">Login</button>
        </form>
    );
}

export default Task;