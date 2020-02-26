import React, {useState} from "react";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import InputFields from "./InputFiels/InputField";

const UpdateModal = ({buttonLabel, hidden, dataForFields}) => {
    const [modal, setModal] = useState(false);
    console.log(dataForFields);

    const checkDataForFields=({ name = '' } = {}) => name;

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button hidden={hidden} color="danger" onClick={toggle} size="sm">{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle}>

                <ModalHeader toggle={toggle}>Change properties: {checkDataForFields(dataForFields)}</ModalHeader>
                <ModalBody>
                    <InputFields data={dataForFields}/>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default UpdateModal;