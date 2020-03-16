import React, {useEffect, useState} from 'react';
import useThunkReducer from "react-hook-thunk-reducer";
import {rootReducer} from "../store";
import {loadListOfAccountsFromSever, loadListOfManagersFromSever} from "../actions/actions";
import Grid from "../components/atoms/Grid/Grid.jsx";
import classes from "../generalStyles/FlexBox.module.css";
import Pagination from "@material-ui/lab/Pagination";
import ManagementGridToolbar from "../components/molecules/ManagementGridToolbar";


const gridObjectRenderer = (data) => Object.keys(data).map(key => data[key]).join(' ');
const columns = [
    {
        title: 'id',
        valueKey: 'id'
    },
    {
        title: 'login',
        valueKey: 'login'
    },
    {
        title: 'userName',
        valueKey: 'name'
    },
    {
        title: 'userSecondName',
        valueKey: 'secondName',
    },
    {
        title: 'Role',
        valueKey: 'role',
        renderer:gridObjectRenderer
    }
];


const ManagersPage = ({initialState}) => {

    const [state, dispatch] = useThunkReducer(rootReducer, initialState);
    const {listOfManagers: gridData = []} = state || {};
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedRecord, setSelectedRecord] = useState(null);

    const handleChange = (event, pageNumber) => {
        setCurrentPage(pageNumber);
        console.log("Page:" + pageNumber);
        console.log(gridData);
        dispatch(loadListOfManagersFromSever(pageNumber - 1));
        setSelectedRecord(null);
    };

    useEffect(() => {
        handleChange(null, 1);
    },[]);

    const handleRowEdit = () => {
        if (selectedRecord !== undefined) {
            return gridData[selectedRecord];
        }
        return [];
    };
    const handleRowRemove = () => {
        console.log('remove');
    };
    const handleRowAdd = () => {
        console.log('add');
    };


    return (
        <div color="red">
            <Grid gridData={gridData} columns={columns} iterable
                  recordSelector={setSelectedRecord}
                  toolbar={() => <ManagementGridToolbar handleRowEdit={handleRowEdit}
                                                        isSelectedRecord={!!(selectedRecord || selectedRecord === 0)}
                                                        handleRowRemove={handleRowRemove}
                                                        handleRowAdd={handleRowAdd}/>}/>
            <Pagination style={{height: '60px', display: 'flex', alignItems: 'center'}} className={classes.paginator}
                        page={currentPage} onChange={handleChange} count={10}
                        variant="outlined" color="secondary" shape="rounded"/>
        </div>
    );
};

export default ManagersPage;