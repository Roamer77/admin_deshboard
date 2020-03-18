import Toolbar from "../atoms/Toolbar/Toolbar";
import React, {useCallback, useState} from "react";
import classes from "../../generalStyles/FlexBox.module.css";
import {Button, Input, InputGroup, InputGroupAddon, InputGroupText} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import UpdateModal from "../atoms/UpdateModal/UpdateModal";
import {deleteDataById,addNewProduct} from "../../actions/crudOperation.js"
import {useDispatch} from "react-redux";
import {deleteProductFromStoreById} from "../../actions/actions";
import CreateProductForm from "../atoms/CreateProductForm/CreateProductForm";

const ManagementGridToolbar = ({isSelectedRecord,handleRowEdit,addOperationMenu,handleSearchEvent}) => {
    const [searchInput, setSearchInput] = useState('');
    const AddOperationMenuComponent = addOperationMenu;
    const dispatch = useDispatch();
    const [modal, setModal] = useState(false);
    const openModel = () => setModal(!modal);

    const handleAddProductEvent=useCallback(()=> openModel());
    const handleDeleteProductEvent=useCallback(()=>{

        //Сделать такую проверку ++ для создания новой записи 
        //действия : 1. Отправить id на сервер 2.Удалить на сервере ( если удалилось нормально отправить "OK" если какая-то ошибка отправить "GG")
        //           3. Если всё ок удалить продукт на фронте

        //отправеляет id продукта, для удаления, на сервер
        deleteDataById(handleRowEdit.id);
        //удаляет из стора элемент
        dispatch(deleteProductFromStoreById(handleRowEdit.id));
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
        {modal&&<CreateProductForm isOpen={true}/> }
    </Toolbar>);
};

export default ManagementGridToolbar;