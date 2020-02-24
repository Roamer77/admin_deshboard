import {Provider, useSelector} from "react-redux";

import Login from "./Login/Login";
import PageRouter from "./PageRouter/PageRouter";
import React from "react";

const Main = () => {
    const data = useSelector(state => state);
    console.log(data);
    if(localStorage.getItem('isUserLogin')==1){
        return <Login/>
    }

    return <PageRouter/>

};

export default Main;