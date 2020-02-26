import {Card, Table} from "reactstrap";
import React, {useState} from "react";
import classNames from "classnames";
import classes from "../../../generalStyles/FlexBox.module.css";

const  OrderDetails=(props)=>{
    const [selectedRecord, setSelectedRecord] = useState(null);
    const  gridData  = props.props;
    console.log(gridData);
    return (
        <Card>
            <Table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Product id</th>
                    <th>ProductName</th>
                    <th>Cost</th>

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
                        <td>{data.name}</td>
                        <td>{data.cost}</td>

                    </tr>
                ))}


                </tbody>
            </Table>
        </Card>
    );
 };

export  default OrderDetails;