const About=()=>
{

}
export default About;
/*

import './App.css';
import Header from './Subreact/Header';
import Body from "./Subreact/Body";
import Footer from './Subreact/Footer';
import RegisterForm from './RegisterForm';
import Task from './TaskReg/Task';
import Counter from './Counter';
import { useState, createContext } from 'react';
import CdAq from './CdAq';
import { Route,Routes } from 'react-router-dom';
import Store from './Store';
import { Suspense,lazy } from "react";
import Ipad from './Ipad';
const Home=lazy(()=>import("./Rt/Home"));
const About=lazy(()=>import("./Rt/About"));
const Contact=lazy(()=>import("./Rt/Contact"));

// export context so children can use it
export const UserContext = createContext();

function App() {
  const [userName, setUserName] = useState({
    col: "store",
    col2: "ipad",
    theme: 0
  });

  return (
    <div>
      
      <UserContext.Provider value={userName}>
        <Header/>

    <Suspense fallback={<h3>Loading Page...</h3>}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/store" element={<Store />} />
            <Route path="/ipad" element={<Ipad />} />
        </Routes>
    </Suspense>
<Store/>

        
        {/* <Header />
         <Store/>
  
        <button onClick={() => 
          setUserName(prev => ({
            ...prev,
            theme: !prev.theme
          }))
        }>
          Change
        </button>
}
      </UserContext.Provider>

     
    </div>
  );
}

export default App;

/*import logo from './logo.svg';
import './App.css';
import Header from './Subreact/Header';

//import React from "react";

import Body from "./Subreact/Body";
import Footer from './Subreact/Footer';
//import Footer from "./Subreact/Footer";
import RegisterForm from './RegisterForm';
//import Reg from './Reg/Reg';
import Task from './TaskReg/Task';
import Counter from './Counter';
import { useState } from 'react';
import { createContext } from 'react';
import CdAq from './CdAq';
export const UserContext = createContext();
function App() {
   const[userName,setuserName]=useState({col:"store", col2:"ipad" , theme : 0});
   //const UserContext = createContext();
  return (
    
    <div>
 {
      <UserContext.Provider value={userName}>
             
             < CdAq/>
        <button onClick={()=> setuserName(prev=>({
          ...prev,theme:!prev.theme
        }))}>Change</button>
      </UserContext.Provider>
}
<Header/>  
    </div>
  );
}

export default App;*/
