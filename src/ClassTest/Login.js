import { useContext } from "react";
import { UserContext } from "../App";

const Contact=()=>
{
    const User = useContext(UserContext);
    return(
           <h1>{User.Contact}</h1>
    )
}
export  default Contact;