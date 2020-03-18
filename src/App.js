import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./components/Main";
import store from "./store";
import {Provider} from "react-redux";
import ImageLoader from "./components/atoms/ImageLoader/ImageLoader";


function App() {

    return (
        <>
       {/* <Provider store={store}>
                <Main/>
            </Provider>*/}
        <ImageLoader/>
        </>
    );
}

export default App;
