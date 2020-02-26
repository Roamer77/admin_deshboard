import {Provider, useSelector} from "react-redux";

import Login from "../components/atoms/Login/Login.jsx";
import PageRouter from "./atoms/PageRouter/PageRouter";
import React from "react";

const Main = () => {

    if(localStorage.getItem('isUserLogin')==1){
        return <Login/>
    }

    return <PageRouter/>

};

export default Main;