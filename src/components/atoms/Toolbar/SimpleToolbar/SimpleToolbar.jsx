import classes from "../../../../generalStyles/FlexBox.module.css";
import {Button, Input, InputGroup, InputGroupAddon, InputGroupText} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faSearch} from "@fortawesome/free-solid-svg-icons";
import React, {useState} from "react";
import CustomModalWindow from "../../UpdateModal/UpdateModal";


const SimpleToolbar = ({selectedRecord, toolBarBtns,rowData,titles}) => {
    const [searchInput, setSearchInput] = useState('');

    console.log(rowData);

    return (
        <>
            <div className={classes.searchLine}>
                <InputGroup size='sm'>
                    <InputGroupAddon addonType='prepend'>
                        <InputGroupText><FontAwesomeIcon icon={faSearch} size="xs"/></InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder='search' onChange={event => setSearchInput(event.target.value)}/>
                </InputGroup>
            </div>
            {
                toolBarBtns.map(({title}) => (
                    <Button key={title} hidden={typeof selectedRecord !== "number"} color="danger" size="sm">{title}</Button>
                ))
            }
            <CustomModalWindow hidden={typeof selectedRecord !== "number"} buttonLabel={'Update'} dataForFields={rowData} titles={titles}/>
        </>
    );
};

export default SimpleToolbar;