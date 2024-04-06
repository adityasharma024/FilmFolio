import Header from "./components/Header";
import Cards from "./components/Cards";
import { AddMovie } from "./components/AddMovie";
import {Route, Routes, useBeforeUnload} from 'react-router-dom'
import Detail from "./components/Detail";
import { createContext, useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
const Appstate=createContext();
function App() {
  const [login,setLogin]=useState(false);
  const [username,setUserName]=useState("");

  return (
    <Appstate.Provider value={{login,username,setLogin,setUserName}}>
    <div className="App relative ">
      <Header/>
       <Routes>
        <Route path='/' element={<Cards></Cards>}/>
        <Route path="/addmovie" element={<AddMovie></AddMovie>}/>
        <Route path="/detail/:id" element={<Detail></Detail>}/>
        <Route path="/login" element={<Login></Login>}/>
        <Route path="/signup" element={<Signup></Signup>}/>
      </Routes> 
    </div>
    </Appstate.Provider>
  );
}

export default App;
export {Appstate};