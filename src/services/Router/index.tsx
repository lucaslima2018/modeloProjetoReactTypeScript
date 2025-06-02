import { Routes, Route } from "react-router-dom";

import Login from "../../pages/Login";
import Home from "../../pages/Home";



import AccessDenied from "../../components/accessDenied";

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={ <Login/> }/>
        <Route path="/home" element={ <Home/> }/>



        
        <Route path="/accessdenied" element={ <AccessDenied/> }/>
    </Routes>
  )
}

export default Router;
