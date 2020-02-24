import {Card, Table} from "reactstrap";
import classNames from "classnames";
import classes from "../../generalStyles/FlexBox.module.css";
import React, {useState} from "react";
import Toolbar from "../Toolbar/Toolbar";
import SimpleToolbar from "../Toolbar/SimpleToolbar/SimpleToolbar";
import Pagination from "@material-ui/lab/Pagination";
import OrderDetails from "../OrderDetails/OrderDetails";

const Grid = ({gridData, titles, toolBarBtns}) => {
    const [selectedRecord, setSelectedRecord] = useState(null);


    const mappedGridItems = gridData.map((data, index) => {
        const mappedTds = Object.values(data).map((value) => <td>{value}</td>);

        return (<tr key={Object.values(data)[0]}
                    className={classNames({[classes.selected]: selectedRecord === index})}
                    onClick={() => {
                        setSelectedRecord(index)
                    }}>
            <th scope="row">{index + 1}</th>
            {mappedTds}
        </tr>)
    });

    return (
        <div>
            <Card>
                <Toolbar>
                    <SimpleToolbar selectedRecord={selectedRecord} toolBarBtns={toolBarBtns}
                                   rowData={gridData[selectedRecord] ? Object.values(gridData[selectedRecord]) : []}
                                   titles={titles}/>
                </Toolbar>
                {
                    <Table>
                        <thead>
                        <tr>
                            {titles.map((data) => (<th>{data}</th>))}
                        </tr>
                        </thead>
                        <tbody>
                        {mappedGridItems}
                        </tbody>
                    </Table>}
            </Card>
        </div>
    );
};

export default Grid;