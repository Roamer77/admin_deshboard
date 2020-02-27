import React, {useEffect, useState} from 'react';
import useThunkReducer from "react-hook-thunk-reducer";
import {rootReducer} from "../store";
import {loadListOfProductsFromSever} from "../actions/actions";
import Grid from "../components/atoms/Grid/Grid.jsx";
import Pagination from "@material-ui/lab/Pagination";
import classes from "../generalStyles/FlexBox.module.css";
import ManagementGridToolbar from "../components/molecules/ManagementGridToolbar";
import CustomModalWindow from "../components/atoms/UpdateModal/UpdateModal";

const gridObjectRenderer = (data) => Object.keys(data).map(key => data[key]).join(' ');

const columns = [
    {
        title: 'id',
        valueKey: 'id'
    },
    {
        title: 'name',
        valueKey: 'name'
    },
    {
        title: 'cost',
        valueKey: 'cost'
    },
    {
        title: 'description',
        valueKey: 'productDescription',
        renderer: gridObjectRenderer
    },
    {
        title: 'brand',
        valueKey: 'brands'
    },
    {
        title: 'average rating',
        valueKey: 'averageRating'
    },
    {
        title: 'product size',
        valueKey: 'productSizes'
    },
    {
        title: 'vendor code',
        valueKey: 'vendorCode'
    },
    {
        title: 'similarities index',
        valueKey: 'similaritiesIndex'
    },
    {
        title: 'product categories',
        valueKey: 'productCategories',
        renderer: gridObjectRenderer
    }
];

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

    console.log(selectedRecord);

    return (
        <>
            <Grid gridData={gridData} columns={columns}
                  iterable
                  recordSelector={setSelectedRecord}
                  toolbar={() => <ManagementGridToolbar handleRowEdit={handleRowEdit}
                                                        isSelectedRecord={!!(selectedRecord || selectedRecord === 0)}
                                                        handleRowRemove={handleRowRemove}
                                                        handleRowAdd={handleRowAdd}/>}/>

            <Pagination style={{height: '60px', display: 'flex', alignItems: 'center'}}
                        className={classes.paginator}
                        page={currentPage} onChange={handleChange} count={10}
                        variant="outlined" color="secondary" shape="rounded"/>

        </>
    );

};

export default ManagementPage;