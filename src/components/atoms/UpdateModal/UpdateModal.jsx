import React, {useEffect, useState} from "react";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import InputFields from "./InputFiels/InputField";
import classes from './UpdateModal.module.css';
import {sendUpdatedProductInfo} from '../../../actions/crudOperation'

const UpdateModal = ({buttonLabel, hidden, dataForFields}) => {

    const [modal, setModal] = useState(false);
    const checkDataForFields = ({name = ''} = {}) => name;
    const toggle = () => setModal(!modal);

    const [newRowData, setNewRowData] = useState({
        ...dataForFields,
        productSizes: dataForFields ? dataForFields.productSizes : []
    });

    const handleFieldChanges = (value, key) => {
        console.log({...newRowData, [key]: value});
        setNewRowData({...newRowData, [key]: value});
    };


    const [brandDescription,setBrandDescription]= useState({});
    const defaultState=dataForFields ? dataForFields.productSizes : [];
    const [productSizeArrayChanges, setProductSizeArray] = useState(defaultState);
    const [productDescription, setProductDescription] = useState({});

    console.log(productSizeArrayChanges);

    console.log(dataForFields);
    if (dataForFields)
        console.log(dataForFields.productSizes);

    const handleProductSizesArrayChanges = (list) => {
        console.log("ProductArraySizes ниже");
        console.log(productSizeArrayChanges);
        setProductSizeArray(list);
    };

    const handleProductDescriptionChanges = (value, key) => {
        console.log("productDescription ниже");
        console.log(productDescription);
        setProductDescription({...productDescription, [key]: value});
    };
    const handleBrandDescriptionChanges = (value, key) => {
        console.log(brandDescription);
        setBrandDescription({...brandDescription, [key]: value});
    };


    useEffect(()=>{
        if(dataForFields && dataForFields.productSizes){
            setProductSizeArray(dataForFields.productSizes)
        }
    }, [dataForFields]);

    function createNormalObjectToServer(dataForFields, newRowData, productDescription, productSizeArrayChanges) {
        return {
            id: dataForFields.id,
            name: newRowData.name,
            cost: newRowData.cost,
            productDescription: {
                soleMaterial: productDescription.soleMaterial,
                soleHeight: productDescription.soleHeight,
                sex: productDescription.sex,
                season: productDescription.season
            },
            brands: {
                id:dataForFields.brands[0].id,
                name:brandDescription.name,
                brandCountry:brandDescription.brandCountry,
                manufactureCountry:brandDescription.manufactureCountry,
                manufactureAddress:brandDescription.manufactureAddress
            },
            productSizes: productSizeArrayChanges,
            vendorCode: newRowData.vendorCode,
            similaritiesIndex: newRowData.similaritiesIndex,
            productCategories: newRowData.productCategories
        }
    }

    return (
        <div>
            <Button hidden={hidden} color="danger" onClick={toggle} size="sm">{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle}>

                <ModalHeader toggle={toggle}>Change properties: {checkDataForFields(dataForFields)}</ModalHeader>
                <ModalBody className={classes.modal}>
                    <InputFields data={dataForFields} onFieldChange={handleFieldChanges}
                                 onProductDescriptionChange={handleProductDescriptionChanges}
                                 onProductSizesArrayChanges={handleProductSizesArrayChanges}
                                 onProductBrandDescription={handleBrandDescriptionChanges}
                                 productSizeArrayChanges={productSizeArrayChanges}/>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger"
                            onClick={() => sendUpdatedProductInfo(createNormalObjectToServer(dataForFields, newRowData, productDescription, productSizeArrayChanges))}>Save</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default UpdateModal;