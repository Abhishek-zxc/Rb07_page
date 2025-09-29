import React from "react";
import { useNavigate,useParams,Route,Routes, Link } from "react-router-dom";
import BuyNow from "./BuyNow";

const Store=()=>
{
    //const nav = useNavigate();

    //const userId= useParams();

    return(
        <>
        {/*userId
        <div className="App">
            <p>Ipad pro</p>
        </div>
        */}
        <nav>
            <Link to ="BuyNow"><li>BuyNow</li></Link>
        </nav>
        
        <Routes>
            <Route path="BuyNow" element={<BuyNow/>}>BuyNow</Route>
          </Routes>          
        
        </>
    )
}
export default Store;
//<p>This is Ipad Store</p>
//<button onClick={()=> nav("/")}>Navigation</button> 
//
  //      <button onClick={ ()=> nav("/BuyNow")}>BuyNow</button> 