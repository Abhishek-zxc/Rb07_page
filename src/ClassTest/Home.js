import { useContext } from "react";
import { UserContext } from "../App";

const Home =()=>
{
     const User = useContext(UserContext);

     return(
        <>
           <h1> {User.Home}</h1> 
        </>
     )
}

export default Home;
