import React, {useState} from "react";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import InputFields from "./InputFiels/InputField";
import  classes from './UpdateModal.module.css';

const UpdateModal = ({buttonLabel, hidden, dataForFields}) => {
    const [modal, setModal] = useState(false);
    console.log(dataForFields);
    const checkDataForFields=({ name = '' } = {}) => name;
    const toggle = () => setModal(!modal);

    const [newRowData,setNewRowData]=useState({...dataForFields});

    const handleFieldChanges=(value, key)=>{
        console.log({...newRowData, [key]: value});
        setNewRowData({...newRowData, [key]: value});
    };


    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    console.log(newRowData);
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');

    return (
        <div>
            <Button hidden={hidden} color="danger" onClick={toggle} size="sm">{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle}>

                <ModalHeader toggle={toggle}>Change properties: {checkDataForFields(dataForFields)}</ModalHeader>
                <ModalBody className={classes.modal}>
                    <InputFields data={dataForFields} onFieldChange={handleFieldChanges} />
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={()=>console.log(newRowData)}>Save</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default UpdateModal;