import React from "react";
import "./Header.css";
import { Routes,Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import CdA from "../CdA";
//import CdB from "../CdB";
import { UserContext } from "../App";
import  { useContext } from "react";
import CdAq from "../CdAq";
import Ipad from "../Ipad";
import User from "../User"; 
import Store from "../Store";

const Header = () => {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <>
    {/*<div className="Header">
      <nav className="menuHeader">
        <ul className="ulHeader">
          <li><img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
            alt="Logo"
            width="60"
            height="60"
          /></li>
          <Link to= "/store"><li>{user.col}</li></Link>
          <Link to ="user/16"><li>{user.col2}</li></Link>
          <li><a href="#resources">Resources</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>*/}
    <div className="Header">
  <nav className="menuHeader">
    <ul className="ulHeader">
      <li>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
          alt="Logo"
        />
      </li>
      <li><Link to="/store">{user.col}</Link></li>
      <li><Link to="/user/16">{user.col2}</Link></li>
      <li><a href="#resources">Resources</a></li>
      <li><a href="#pricing">Pricing</a></li>
      <li><a href="#contact">Contact</a></li>
      <li>
        <button onClick={() => navigate("/store")}>Go to Store</button>
      </li>
    </ul>
  </nav>
</div>
<button onClick={() => navigate("/about")}>Go to About</button>

   {/* <Routes>
        <Route path="/store/*" element ={< Store/>}> </Route>
        <Route path="/user/:id" element ={<User/>}> </Route>
    </Routes>
     <button onClick={() => navigate("/store")}>
      Go to Store
    </button>
    </>
   */}
   </>
  );
};

export default Header;
//CdAq