import React, {useState} from "react";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import InputFields from "./InputFiels/InputField";


const titles=['id','season','sex','sole height','sole_material'];

const CustomModalWindow = ({buttonLabel, hidden, dataForFields, titles}) => {
    const [modal, setModal] = useState(false);
    let productName = dataForFields[1];
    let productDescription=dataForFields[3];
    console.log(productDescription);
    const toggle = () => setModal(!modal);



    return (
        <div>
            <Button hidden={hidden} color="danger" onClick={toggle} size="sm">{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle}>

                <ModalHeader toggle={toggle}>Change properties: {productName}</ModalHeader>
                <ModalBody>
                    <InputFields data={dataForFields} titles={titles}/>

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default CustomModalWindow;