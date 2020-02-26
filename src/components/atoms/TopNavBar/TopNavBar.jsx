import React,{useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText, Button
} from 'reactstrap';

import classes from './TopNavBar.module.css';
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
const TopNavBar=(props)=>{

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div className={classes.navStyle}>
            <Navbar color="wight" light expand="md">
                <NavbarBrand href="#" className={classes.logoTextStyle}>Admin </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">GitHub</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Option 1
                                </DropdownItem>
                                <DropdownItem>
                                    Option 2
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Reset
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <Button color='danger' tag="a" href={'http://localhost:3000/'} onClick={(e)=>localStorage.setItem('isUserLogin','1')} >
                        <FontAwesomeIcon className={classes.logoutBtn} icon={faSignOutAlt}/>
                        Logout</Button>
                    <NavbarText className={classes.NavbarTextStyle}>Dashboard</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
};

export  default TopNavBar;