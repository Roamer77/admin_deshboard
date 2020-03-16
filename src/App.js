import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./components/Main";
import store from "./store";
import {Provider} from "react-redux";
import DropDownOptionMenu from "./components/atoms/DropdownOprionMemu/DropDownOptionMenu";
import DropDownField from "./components/atoms/DropDownFields/DropDownFields";

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
