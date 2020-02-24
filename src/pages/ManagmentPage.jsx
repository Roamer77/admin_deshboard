import React, {useEffect, useState} from 'react';
import useThunkReducer from "react-hook-thunk-reducer";
import {rootReducer} from "../store";
import {loadListOfProductsFromSever} from "../actions/actions";
import Grid from "../components/Grid/Grid";
import Pagination from "@material-ui/lab/Pagination";
import classes from "../generalStyles/FlexBox.module.css";


const titles = ['#', 'id', "name", 'cost', 'description', 'brand', 'average rating', 'product size', 'vendor code', 'similarities index', 'product categories'];

const toolBarBtns = [{
    title: 'Add new ',
}, {
    title: 'Delete',

}];

const ManagementPage = ({initialState}) => {
    const [state, dispatch] = useThunkReducer(rootReducer, initialState);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedRecord, setSelectedRecord] = useState(null);
    const {listOfProducts: gridData = []} = state || {};


    const handleChange = (event, pageNumber) => {
        setCurrentPage(pageNumber);
        console.log("Page:" + pageNumber);
        console.log(gridData);
        dispatch(loadListOfProductsFromSever(pageNumber - 1));
        setSelectedRecord(null);
    };

    useEffect(() => {
        handleChange(null, 1);
    }, []);

    function transformGridData(data) {
        data.forEach((element, index) => {
            element.productDescription = Object.values(element.productDescription);
            element.productCategories = Object.values(element.productCategories);
        })

    }

    transformGridData(gridData);

    return (
        <>
            <Grid gridData={gridData} titles={titles} toolBarBtns={toolBarBtns}/>
            <Pagination style={{height: '60px', display: 'flex', alignItems: 'center'}} className={classes.paginator}
                        page={currentPage} onChange={handleChange} count={10}
                        variant="outlined" color="secondary" shape="rounded"/>

        </>
    );

};

export default ManagementPage;