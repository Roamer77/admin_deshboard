import React, {useEffect, useState} from "react";
import Field from "../UpdateModal/InputFiels/Field";
import {Button, Input, InputGroup, InputGroupAddon, InputGroupText} from "reactstrap";
import classes from "../UpdateModal/InputFiels/InputField.module.css";
import style1 from "./DropDownFields.module.css"

const DropDownField = ({data, title}) => {

    const [hideFlag, setHideFlag] = useState(false);
    const toggleTrueFalse = () => setHideFlag(!hideFlag);
    console.log(hideFlag);
    return (
        <>

            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <Button color="secondary" size='sm' onClick={toggleTrueFalse} className={classes.element1}>{title}</Button>
                </InputGroupAddon>
                <Input className={classes.element2} placeholder={data.soleMaterial}/>
            </InputGroup>
            <ul style={{display: hideFlag ? 'block':'none' }}>
                <li className={style1.li}> <Field data={data.soleHeight} title={Object.keys(data)[1]}/></li>
                <li className={style1.li}> <Field data={data.sex} title={Object.keys(data)[2]}/></li>
                <li className={style1.li}> <Field data={data.season} title={Object.keys(data)[3]}/></li>
            </ul>
        </>
    );
};

export default DropDownField;