import {Button, Card, Input, InputGroup, InputGroupAddon, InputGroupText} from "reactstrap";
import React, {useState} from "react";
import classes from './Login.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLock, faUser} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";

const Login=()=>{

    const [ login, getLogin]=useState('');
    const [password,getPassword]=useState('');
    const dispatch = useDispatch();

    return (
        <div>

            <Card  className={classes.cardStyle}>
                <h1 className={classes.title}>Sign in</h1>
                <InputGroup>
                    <InputGroupAddon addonType='prepend'>
                        <InputGroupText><FontAwesomeIcon icon={faLock} size="1x"/></InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="username" onChange ={ event => getLogin(event.target.value)}/>
                </InputGroup>
                <br/>
                <InputGroup>
                    <InputGroupAddon addonType='prepend'>
                        <InputGroupText><FontAwesomeIcon icon={faUser} size="1x"/></InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder='password' onChange ={ event => getPassword(event.target.value)} />
                </InputGroup>
                <br/>
                <Button color='danger' onClick={ (e)=>sandAuthInfo(login,password)}>
                    Login
                </Button>
            </Card>

        </div>
    );

     async function sandAuthInfo(login, password) {
        const url = 'http://192.168.176.17:8080/admin/login';
        const adminInfo = {login: login, password: password};
        try {
            const response =await fetch(url, {
                method: 'POST',
                body: JSON.stringify(adminInfo),
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const isLogin = await response.json();
            const flag= JSON.stringify(isLogin);
            changeLoginFlag(flag);
            console.log('Успех:', flag);
        } catch (error) {
            console.error('Ошибка:', error);
        }
    }

    function changeActionLoginStatus(flag) {
            return {type: 'CHANGE_STATUS', payload: flag};
    }

    function  changeLoginFlag(flag) {
        dispatch(changeActionLoginStatus(flag))
    }

};


export  default  Login;