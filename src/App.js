import { useState,createContext } from "react";
import Home from "./ClassTest/Home";
import Contact from "./ClassTest/Login";
export const UserContext = createContext();
export default function App()
{
  const [Message , setMessage] = useState({
   Home : "HomePage",
   Contact : "ContactPage" 
  });
  //const Name ="Welcome User";
  //const HomePage =" Home Page";
  function Change()
  {
    ch===0 ? setCh(1) : setCh(0);
  }
  const [ch , setCh] = useState(0);
  return(
    <div>
      <UserContext.Provider value={Message}>
           <button onClick={Change}>Click Here To change </button>
           { ch === 0 ? <Home/> : <Contact/> }
           
      

      </UserContext.Provider>
    </div>
  )
}