import React, {useCallback, useEffect, useState} from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTable} from "@fortawesome/free-solid-svg-icons";
import {Link, useLocation} from "react-router-dom";

const DropDownOptionMenu = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [color, setColor] = useState("danger");
    const {pathname} = useLocation();
    const [title, setTitle] = useState("Manager");
    const toggle = () => setDropdownOpen(prevState => !prevState);

    const setTitleAsUser = useCallback(() => {
        setTitle('Users');

    }, []);
    const setTitleAsManager = useCallback(() => {
        setTitle('Manager')

    }, []);

    useEffect(()=>{
       if(pathname==='/users'){
           setColor('danger')
       }else if(pathname==='/managers'){
           setColor('danger')
       }else {
           setColor('secondary')
       }
    });

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle} size="lg">

            <DropdownToggle caret className={props.class} color={color}>
                <FontAwesomeIcon className={props.iconStyle} icon={faTable} size="1x"/>
                {title}
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem onClick={setTitleAsUser} tag={Link} to={'/users'}>Users</DropdownItem>
                <DropdownItem divider/>
                <DropdownItem onClick={setTitleAsManager} tag={Link} to={'/managers'}>Managers</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};

export default DropDownOptionMenu;