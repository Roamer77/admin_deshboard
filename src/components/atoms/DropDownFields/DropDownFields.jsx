import React, { useState} from "react";
import Field from "../UpdateModal/InputFiels/Field";
import classes from "./DropDownFields.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";

const DropDownField = ({data, title,onFieldChange}) => {

    const [hideFlag, setHideFlag] = useState(false);
    const toggleTrueFalse = () => setHideFlag(!hideFlag);
    return (
        <>
            <div className={classes.dropdownMenu}>
                <span className={classes.descriptionTitle}> {title}</span>
                <div onClick={toggleTrueFalse} className={classes.floatActionBtn}>
                    <FontAwesomeIcon icon={faCaretDown} size="2x"/>
                </div>
            </div>

            <div style={{display: hideFlag ? 'block' : 'none'}}>
                <div ><Field data={data.soleMaterial} onFieldChange={onFieldChange} title={Object.keys(data)[0] }/></div>
                <div ><Field data={data.soleHeight} onFieldChange={onFieldChange} title={Object.keys(data)[1]}/></div>
                <div ><Field data={data.sex} onFieldChange={onFieldChange} title={Object.keys(data)[2]}/></div>
                <div ><Field data={data.season} onFieldChange={onFieldChange} title={Object.keys(data)[3]}/></div>
            </div>
        </>
    );
};

export default DropDownField;