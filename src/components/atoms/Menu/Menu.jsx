import React from 'react';
import Logo from "../../Logo";
import {Button} from "reactstrap";
import classNames from 'classnames';
import {useLocation} from "react-router-dom";

import classes from './Menu.module.css'
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import menuButtens from "../../../constans/menu_buttons";
import CustomAlert from "../Alert/CustomAlert";
import DropDownOptionMenu from "../DropdownOprionMemu/DropDownOptionMenu";

const Menu = (props) => {
    const {className} = props;
    const {pathname} = useLocation();


    return (
        <div className={classNames(classes.menuContainer, className)}>
            <Logo width={240} height={260}/>
            <div className={classes.groupOfBattens}>

                {
                    menuButtens.map(({icon, src, title, handleClick}) => (
                        <Button className={classes.leftNavBarBtn} tag={src? Link : undefined} to={src}  key={title}
                                onClick={handleClick}
                                color={pathname === src ? 'danger' : 'secondary' } size="lg">
                            <FontAwesomeIcon className={classes.icon} icon={icon} size="1x"/> {title}
                        </Button>
                    ))
                }
                <DropDownOptionMenu iconStyle={classes.icon}  class={classes.leftNavBarBtn}/>
                <CustomAlert/>
            </div>

        </div>
    );
};

export default Menu;