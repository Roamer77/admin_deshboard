import React, {useCallback, useEffect, useState} from 'react';
import useThunkReducer from "react-hook-thunk-reducer";
import {rootReducer} from "../store";
import {findProductByName, loadListOfProductsFromSever} from "../actions/actions";
import Grid from "../components/atoms/Grid/Grid.jsx";
import Pagination from "@material-ui/lab/Pagination";
import classes from "../generalStyles/FlexBox.module.css";
import ManagementGridToolbar from "../components/molecules/ManagementGridToolbar";
import {useDispatch, useSelector} from "react-redux";

const gridObjectRenderer = (data) => Object.keys(data).map(key => data[key]).join(' ');
const arrayOfObjectRenderer = (data) => data.map((item) => (
    gridObjectRenderer(item)
));

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
        valueKey: 'brands',
        renderer: arrayOfObjectRenderer
    },
    {
        title: 'average rating',
        valueKey: 'averageRating'
    },
    {
        title: 'product size',
        valueKey: 'productSizes',
        renderer: arrayOfObjectRenderer
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

const ManagementPage = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [selectedRecord, setSelectedRecord] = useState(null);

    const dispatch=useDispatch();
    const gridData = useSelector((state)=>{
        return state.listOfProducts;
    });

    const handleChange = (event, pageNumber) => {
        setCurrentPage(pageNumber);
        console.log("Page:" + pageNumber);
        console.log(gridData);

        dispatch(loadListOfProductsFromSever(pageNumber - 1));
        setSelectedRecord(null);
    };
    const handleSearchEvent = (name) => {
        dispatch(findProductByName(name));
    };

    useEffect(() => {
        handleChange(null, 1);
    }, []);


    const getDataFormRow = () => {
        if (selectedRecord) {
            console.log("gridData");
            console.log(gridData[selectedRecord]);
            return gridData[selectedRecord];
        }
        if (selectedRecord === 0) {
            console.log("gridData");
            console.log(gridData[selectedRecord]);
            return gridData[selectedRecord];
        } else {
            console.log("Нет данных...");
        }
        return [];
    };


    const handleRowEdit = useCallback(
        getDataFormRow()
    );


    console.log(selectedRecord);
    console.log(handleRowEdit);
    return (
        <>
            <Grid gridData={gridData} columns={columns}
                  iterable
                  recordSelector={setSelectedRecord}
                  toolbar={() => <ManagementGridToolbar handleRowEdit={handleRowEdit}
                                                        isSelectedRecord={!!(selectedRecord || selectedRecord === 0)}
                                                        handleSearchEvent={handleSearchEvent}
                  />}/>

            <Pagination style={{height: '60px', display: 'flex', alignItems: 'center'}}
                        className={classes.paginator}
                        page={currentPage} onChange={handleChange} count={10}
                        variant="outlined" color="secondary" shape="rounded"/>

        </>
    );

};

export default ManagementPage;