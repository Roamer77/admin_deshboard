
import React from "react";

import classes from './Toolbar.module.css';
const  Toolbar=({children})=>{

    return(
        <div className={classes.toolbar}>
            {children}
        </div>
    );
};

export  default Toolbar;