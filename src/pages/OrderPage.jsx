import React, {useEffect, useState} from 'react';
import {Card, Table} from "reactstrap";
import useThunkReducer from "react-hook-thunk-reducer";
import {rootReducer} from "../store";
import loadListOfOrdersFromSever from "../actions/actions";
import Toolbar from "../components/Toolbar/Toolbar";
import classes from "../generalStyles/FlexBox.module.css";

import classNames from "classnames";
import Pagination from "@material-ui/lab/Pagination";
import OrderDetails from "../components/OrderDetails/OrderDetails";
import SimpleToolbar from "../components/Toolbar/SimpleToolbar/SimpleToolbar";

const toolBarBtns = [{
    title: 'Delete',
}, {
    title: 'Update',
}];


const OrderPage = ({initialState}) => {

    const [state, dispatch] = useThunkReducer(rootReducer, initialState);
    const [selectedRecord, setSelectedRecord] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const {gridItems: gridData = []} = state || {};
    const selectedProductData = selectedRecord || selectedRecord === 0 ? gridData[selectedRecord].products : null;

    const handleChange = (event, pageNumber) => {
        setCurrentPage(pageNumber);
        console.log("Page:" + pageNumber);
        console.log(gridData);
        setSelectedRecord(null);
        dispatch(loadListOfOrdersFromSever(pageNumber - 1));
    };

    useEffect(() => {
        handleChange(null, 1);
    }, []);

    return (
        <div>
            <Toolbar>
                <SimpleToolbar selectedRecord={selectedRecord} toolBarBtns={toolBarBtns}/>
            </Toolbar>
            <Card>
                <Table>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Order id</th>
                        <th>Address for courier</th>
                        <th>Total sum</th>
                        <th>Type of payment</th>
                        <th>Type of delivery</th>
                    </tr>
                    </thead>
                    <tbody>
                    {gridData.map((data, index) => (
                        <tr key={data.id}
                            className={classNames({[classes.selected]: selectedRecord === index})}
                            onClick={() => {
                                setSelectedRecord(index)
                            }}>
                            <th scope="row">{index + 1}</th>
                            <td>{data.id}</td>
                            <td>{data.addressForCourier}</td>
                            <td>{data.fullPrice}</td>
                            <td>{interpretTypeOfPayment(data.typeOfPayment)}</td>
                            <td>{interpretTypeOfDelivery(data.typeOfDelivery)}</td>
                        </tr>
                    ))}


                    </tbody>
                </Table>

            </Card>
            <Pagination style={{ height: '60px', display: 'flex', alignItems: 'center' }} className={classes.paginator} page={currentPage} onChange={handleChange} count={10}
                        variant="outlined" color="secondary" shape="rounded"/>
            {selectedProductData && <OrderDetails props={selectedProductData}/>}

        </div>
    );

    function interpretTypeOfPayment(type) {
        switch (type) {
            case '1':
                return 'PayPal';
            case '2':
                return 'ERIP';
            case '3':
                return 'Cash';
            default:
                return 'did not selected'
        }
    }

    function interpretTypeOfDelivery(type) {
        switch (type) {
            case '1':
                return 'By courier';
            case '2':
                return 'Pickup ';
            default:
                return 'did not selected'
        }
    }

};

export default OrderPage;