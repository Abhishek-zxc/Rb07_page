import { useState } from "react";
const Counter =()=>{
  const[count , setCount] = useState(1);
  return (
    <> 
       <button onClick={()=>{setCount(count*2)}}>Click here</button>
       {count}
       </>
  ) 


}

export default Counter;


