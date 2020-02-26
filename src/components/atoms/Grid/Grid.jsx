import {Card, Table} from "reactstrap";
import classNames from "classnames";
import classes from "../../../generalStyles/FlexBox.module.css";
import React, {useState} from "react";


const Grid = ({gridData, columns, toolbar, recordSelector, iterable}) => {
    const [selectedRecord, setSelectedRecord] = useState(null);

    const handleRecordSelect = (recordIndex) => {
        if (recordSelector) {
            recordSelector(recordIndex);
        }

        setSelectedRecord(recordIndex);
    };

    const mappedGridItems = gridData.map((data, index) => {
        return (<tr key={Object.values(data)[0]}
                    className={classNames({[classes.selected]: selectedRecord === index})}
                    onClick={() => {
                        handleRecordSelect(index)
                    }}>
            {iterable && <th scope="row">{index + 1}</th>}
            {columns.map(({valueKey, renderer}) => {
                return <th key={valueKey}>{renderer ? renderer(data[valueKey]) : data[valueKey]}</th>
            })}
        </tr>)
    });

    return (
        <div>
            <Card>
                {toolbar && toolbar()}
                {
                    <Table>
                        <thead>
                        <tr>
                            {iterable && <th>#</th>}
                            {columns.map(({title}) => (<th key={title}>{title}</th>))}
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