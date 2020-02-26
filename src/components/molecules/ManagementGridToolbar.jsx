import Toolbar from "../atoms/Toolbar/Toolbar";
import React, {useState} from "react";
import classes from "../../generalStyles/FlexBox.module.css";
import {Button, Input, InputGroup, InputGroupAddon, InputGroupText} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import UpdateModal from "../atoms/UpdateModal/UpdateModal";

const ManagementGridToolbar = ({isSelectedRecord,handleRowEdit}) => {
    const [searchInput, setSearchInput] = useState('');


    const toolBarBtns = [{
        title: 'Add new ',
        hidden: false
    }, {
        title: 'Delete',
        hidden: !isSelectedRecord
    }];

    return (<Toolbar>
        <div className={classes.searchLine}>
            <InputGroup size='sm'>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText><FontAwesomeIcon icon={faSearch} size="xs"/></InputGroupText>
                </InputGroupAddon>
                <Input placeholder='search' onChange={event => setSearchInput(event.target.value)}/>
            </InputGroup>
        </div>
        {
            toolBarBtns.map(({title, hidden}) => (
                <Button key={title} hidden={hidden} color="danger" size="sm">{title}</Button>
            ))
        }

        <UpdateModal hidden={!isSelectedRecord} buttonLabel={'Update'} dataForFields={handleRowEdit()} />
    </Toolbar>);
};

export default ManagementGridToolbar;