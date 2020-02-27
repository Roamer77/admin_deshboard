import {Input, InputGroup, InputGroupAddon, InputGroupText} from "reactstrap";
import classes from "./InputField.module.css";
import React from "react";

const Field=({title,data,onFieldChange})=>{
    return(
        <InputGroup>
            <InputGroupAddon addonType="prepend">
                <InputGroupText  className={classes.element1}>{title}</InputGroupText>
            </InputGroupAddon>
            <Input  className={classes.element2} placeholder={data} onChange={event=> onFieldChange(event.target.value, title)}/>
        </InputGroup>
    );
};

export  default  Field;