import React, {useState} from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./components/Main";
import store from "./store";
import {Provider} from "react-redux";
import {Input} from "reactstrap";

function App() {

    return (
        <>
            <Provider store={store}>
                <Main/>
            </Provider>
        </>
    );
}

export default App;
