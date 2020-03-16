import Toolbar from "../atoms/Toolbar/Toolbar";
import React, {useCallback, useState} from "react";
import classes from "../../generalStyles/FlexBox.module.css";
import {Button, Input, InputGroup, InputGroupAddon, InputGroupText} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import UpdateModal from "../atoms/UpdateModal/UpdateModal";
import {deleteDataById,addNewProduct} from "../../actions/crudOperation.js"
import CreateNewProductModal from "../atoms/CreateNewProductModal/CreateNewProductModal";

const ManagementGridToolbar = ({isSelectedRecord,handleRowEdit,addOperationMenu,handleSearchEvent}) => {
    const [searchInput, setSearchInput] = useState('');
    const AddOperationMenuComponent = addOperationMenu;

    const [modal, setModal] = useState(false);
    const openModel = () => setModal(!modal);

    const handleAddProductEvent=useCallback(()=> openModel());
    const handleDeleteProductEvent=useCallback(()=>{
        deleteDataById(handleRowEdit.id)
    });


    const toolBarBtns = [{
        title: 'Add new ',
        hidden: false,
        clickEvent: addNewProduct
    }, {
        title: 'Delete',
        hidden: !isSelectedRecord,
        clickEvent:deleteDataById
    }];

    return (<Toolbar>

        {addOperationMenu && <AddOperationMenuComponent />}

        <div className={classes.searchLine}>
            <InputGroup size='sm'>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText onClick={()=>handleSearchEvent(searchInput)} ><FontAwesomeIcon icon={faSearch} size="xs"/></InputGroupText>
                </InputGroupAddon>
                <Input placeholder='search' onChange={event => setSearchInput(event.target.value)}/>

            </InputGroup>
        </div>

        <Button onClick={handleAddProductEvent} hidden={toolBarBtns[0].hidden} color="danger" size="sm">{toolBarBtns[0].title}</Button>
        <Button onClick={handleDeleteProductEvent} hidden={toolBarBtns[1].hidden} color="danger" size="sm">{toolBarBtns[1].title}</Button>
        {isSelectedRecord && <UpdateModal hidden={!isSelectedRecord} buttonLabel={'Update'} dataForFields={handleRowEdit} />}
        {modal&&<CreateNewProductModal isOpen={true}/> }
    </Toolbar>);
};

export default ManagementGridToolbar;