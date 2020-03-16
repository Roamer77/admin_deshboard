import React, {useCallback, useState} from "react";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import classes from "../UpdateModal/UpdateModal.module.css";
import Field from "../UpdateModal/InputFiels/Field";
import DropDownField from "../DropDownFields/DropDownFields";
import useThunkReducer from "react-hook-thunk-reducer";
import {rootReducer} from "../../../store";
import {addNewProductToStorage} from "../actions/actions";
const CreateNewProductModal = ({initialState,isOpen}) => {
    const [state, dispatch] = useThunkReducer(rootReducer, initialState);
    const [modal, setModal] = useState(isOpen);
    const toggle = () => setModal(!modal);

    const productDescriptionTemplate = {
        soleMaterial: '',
        soleHeight: '',
        sex: '',
        season: ''
    };

    const brandsDescriptionTemplate = {
        id: '',
        name: '',
        brandCountry: '',
        manufactureCountry: '',
        manufactureAddress: ''
    };

    const productSizesDescriptionTemplate = {
        sizeValue: '',
        location: '',
        id: ''
    };


    const [prodInfo,setProdInfo]= useState({});
    const [prodDescription, setProdDescription] = useState({});
    const [brandDescription,setBrandDescription]=useState({});
    const [sizesDescription,setSizesDescription]=useState({});

    const handleFieldChanges= useCallback((value,key)=>{
        console.log({...prodInfo,[key]:value});
        setProdInfo({...prodInfo,[key]:value});
     });
    const handleProductDescriptionChanges =useCallback((value, key) => {
        console.log("productDescription ниже");
        console.log({...prodDescription, [key]: value});
        setProdDescription({...prodDescription, [key]: value});
    });
    const handleBrandDescriptionChanges=useCallback((value,key)=>{
        console.log({...brandDescription,[key]:value});
        setBrandDescription({...brandDescription,[key]:value});
    });
    const handleSizesDescriptionChanges=useCallback((value,key)=>{
        console.log({...sizesDescription,[key]:value});
        setSizesDescription({...sizesDescription,[key]:value});
    });



    function createResponseToServer( productInfo, productDescription, productSizeArrayChanges,brandDescription) {
        return {
            id: productInfo.id,
            name: productInfo.name,
            cost: productInfo.cost,
            productDescription: {
                soleMaterial: productDescription.soleMaterial,
                soleHeight: productDescription.soleHeight,
                sex: productDescription.sex,
                season: productDescription.season
            },
            brands: [brandDescription],
            productSizes: [productSizeArrayChanges],
            vendorCode: productInfo.vendorCode,
            similaritiesIndex: productInfo.similaritiesIndex,
            productCategories: productInfo.productCategories
        }
    }
    /*исправить*/
    const test=()=>{
       dispatch(addNewProductToStorage(createResponseToServer(prodInfo,prodDescription,sizesDescription,brandDescription))) ;
    };
    return (
        <div>

            <Modal isOpen={modal} toggle={toggle}>

                <ModalHeader toggle={toggle}>Crate new product</ModalHeader>
                <ModalBody className={classes.modal}>
                    <div>
                        <Field data={''} title='id' onFieldChange={handleFieldChanges}/>
                        <Field data={''} title='name' onFieldChange={handleFieldChanges}/>
                        <Field data={''} title='cost' onFieldChange={handleFieldChanges}/>
                        <Field data={''} title='vendorCode' onFieldChange={handleFieldChanges}/>
                        <Field data={''} title='similaritiesIndex' onFieldChange={handleFieldChanges}/>
                        <Field data={''} title='productCategories' onFieldChange={handleFieldChanges}/>
                        <DropDownField data={productDescriptionTemplate} title='Product description'
                                       onFieldChange={handleProductDescriptionChanges}/>
                        <DropDownField data={brandsDescriptionTemplate} title='brand' onFieldChange={handleBrandDescriptionChanges}/>
                        <DropDownField data={productSizesDescriptionTemplate} title='productSizes'
                                       onFieldChange={handleSizesDescriptionChanges}/>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={()=>console.log(createResponseToServer(prodInfo,prodDescription,sizesDescription,brandDescription)) }>Save</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default CreateNewProductModal;