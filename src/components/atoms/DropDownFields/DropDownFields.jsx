import React, {useEffect, useState} from "react";
import Field from "../UpdateModal/InputFiels/Field";
import classes from "./DropDownFields.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown, faCaretUp} from "@fortawesome/free-solid-svg-icons";

const DropDownField = ({data, title, onFieldChange, index}) => {

    const [hideFlag, setHideFlag] = useState(false);
    const [icon,setIcon]=useState(faCaretDown);

    const toggleTrueFalse = () => setHideFlag(!hideFlag);

    function getFilesData(data) {
        return Object.values(data);
    }

    function getFilesNames(data) {
        return Object.keys(data);
    }

    const handleDescriptionChange = (value, title) => {

        onFieldChange(value, title, index);
    };

    useEffect(()=>{
        if(!hideFlag){
            setIcon(faCaretDown);
        }else setIcon(faCaretUp);
    });


    return (
        <>
            <div className={classes.dropdownMenu}>
                <span className={classes.descriptionTitle}> {title}</span>
                <div onClick={toggleTrueFalse} className={classes.floatActionBtn}>
                    <FontAwesomeIcon icon={icon} size="2x"/>
                </div>
            </div>

            <div style={{display: hideFlag ? 'block' : 'none'}}>

                {
                    data !== null && data !== undefined ? getFilesData(data).map((item, index) => (

                        <div key={getFilesNames(data)[index]}>
                            <Field data={item} onFieldChange={handleDescriptionChange} title={getFilesNames(data)[index]}/>
                        </div>
                    )) : []
                }

            </div>
        </>
    );
};

export default DropDownField;