import React, {useEffect, useState} from 'react';
import useThunkReducer from "react-hook-thunk-reducer";
import {rootReducer} from "../store";
import {loadListOfAccountsFromSever, loadListOfManagersFromSever} from "../actions/actions";
import Grid from "../components/Grid/Grid";
import classes from "../generalStyles/FlexBox.module.css";
import Pagination from "@material-ui/lab/Pagination";


const titles = ["#",'id',  "user name","name", "last name",'user phone','blocking status','user mail'];

const toolBarBtns=[{
    title:'Add new ',
},{
    title:'Delete',

},{
    title:'Update',

}];
const UsersPage=({initialState})=>{

    const [state, dispatch] = useThunkReducer(rootReducer, initialState);
    const {listOfAccounts: gridData = []} = state || {};
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedRecord, setSelectedRecord] = useState(null);

    const handleChange = (event, pageNumber) => {
        setCurrentPage(pageNumber);
        console.log("Page:" + pageNumber);
        console.log(gridData);
        dispatch(loadListOfAccountsFromSever(pageNumber - 1));
        dispatch(loadListOfManagersFromSever(pageNumber - 1));
        setSelectedRecord(null);
    };

    useEffect(() => {
        handleChange(null, 1);
    }, []);

    return (
        <div color="red">
            <Grid gridData={gridData} titles={titles} toolBarBtns={toolBarBtns} />
            <Pagination style={{ height: '60px', display: 'flex', alignItems: 'center' }} className={classes.paginator} page={currentPage} onChange={handleChange} count={10}
                        variant="outlined" color="secondary" shape="rounded"/>
        </div>
    );
};

export  default UsersPage;