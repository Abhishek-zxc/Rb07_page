import React from "react";
import { useParams } from "react-router-dom";

const User=()=>
{
    const {id}=useParams();
    return (
          <>
          {id ==16 &&
          <div>
            <img src="iphone16.jpg"/>
          <h1>Iphone 16 pro</h1>
          </div>
          }
          {id ==17 &&
          <h1>Iphone 17 pro</h1>
}
          </>       
    );
}
export default User