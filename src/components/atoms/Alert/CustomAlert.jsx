import React, { useState} from "react";
import {Alert, Button} from "reactstrap";
import forignClass from "../Menu/Menu.module.css";
import classes from './CustomAlert.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileExcel} from "@fortawesome/free-solid-svg-icons";


const CustomAlert = (props) => {
    const [isOpen, getIsOpen] = useState(false);


    function showAlert() {
        getIsOpen(true);
        window.setTimeout(() => {
            getIsOpen(false);
        }, 1000);
    }

    return (
        <div>

            <Button tag="a" href={'http://192.168.176.17:8080/file/download1?fileName=test.xls'} className={forignClass.leftNavBarBtn} onClick={(e) => {
                showAlert();
            }}
                    color='secondary' size="lg">
                <FontAwesomeIcon className={forignClass.icon} icon={faFileExcel} size="1x"/>
                Report
            </Button>
            <Alert className={classes.alertStyle} color="danger" isOpen={isOpen}>
                Скачиваем Excel!
            </Alert>
        </div>
    );
};


export default CustomAlert;