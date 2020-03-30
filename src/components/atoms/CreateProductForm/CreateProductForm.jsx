import React, {useEffect, useState} from "react";
import {
    Button,
    Form,
    FormFeedback,
    FormGroup,
    Input,
    Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader, Spinner
} from 'reactstrap';
import classes from "../UpdateModal/UpdateModal.module.css";
import customeStylеs from "./CreateProductForm.module.css";
import classNames from 'classnames';
import ImageLoader from "../ImageLoader/ImageLoader";
import MultiImgLoader from "../MultiImgLoader/MultiImgLoader";
import {addNewProduct} from "../../../actions/crudOperation";

const CreateProductForm = ({isOpen, invertOpenModalCallback}) => {


    const [modal, setModal] = useState(!isOpen);
    const toggle = () => {
        setModal(!modal);
        invertOpenModalCallback(!modal)
    };


    const [dataForSend,setDataForSend]=useState({});

    const [smallImage,getSmallImage]=useState('');
    const [listOfBigImages,getListOfBigImages]=useState([]);

    const [arrayOfSizes, addItemToArrayOfSizes] = useState([]);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [vendorCode, setVendorCod] = useState('');
    const [similaritiesIndex, setSimilaritiesIndex] = useState('');
    const [productCategories, setProductCategories] = useState('');

    //productDescription
    const [prodProperty, setProdProperty] = useState('');
    const [prodProperty1, setProdProperty1] = useState('');
    const [sex, setSex] = useState('');
    const [season, setSeason] = useState('');

    //brand description
    const [brandName, setBrandName] = useState('');
    const [brandCountry, setBrandCountry] = useState('');
    const [manufactureCountry, setManufactureCountry] = useState('');
    const [manufactureAddress, setManufactureAddress] = useState('');

    //prudctSize description
    const [sizeValue, setSizeValue] = useState('');
    const [location, setLocation] = useState('');

    const firstArrOfFieldsForValidation = [name, cost, vendorCode, similaritiesIndex, productCategories];
    const secondArrOfFieldsForValidation = [sizeValue, location];

    const descriptionTitlesForKedCategory = ['Метериал подошвы', 'Высота подошвы'];
    const descriptionTitlesForJacketCategory = ['Ткань', 'Материал подкладки'];

    const [descriptionTitle, setDescriptionTitle] = useState(descriptionTitlesForJacketCategory[0]);
    const [descriptionTitle1, setDescriptionTitle1] = useState(descriptionTitlesForJacketCategory[1]);

    const changeDescriptionTitle = (data) => {
        let statement = String(data).toUpperCase();
        switch (statement) {
            case 'КУРТКИ':
                setDescriptionTitle(descriptionTitlesForJacketCategory[0]);
                setDescriptionTitle1(descriptionTitlesForJacketCategory[1]);
                break;
            case 'КЕДЫ':
                setDescriptionTitle(descriptionTitlesForKedCategory[0]);
                setDescriptionTitle1(descriptionTitlesForKedCategory[1]);
                break;
            default:
                break;
        }
    };

    const validateField = (input) => {
        return input.toString().length !== 0;
    };

    const submitStatus = (data) => {
        let counter = 0;
        data.forEach(item => {
            if (!validateField(item)) {
                ++counter;
            }
        });
        return counter > 0;
    };
    const onSubmit = () => {
        setDataForSend({
            name, cost, vendorCode, similaritiesIndex, productCategories,
            productDescription: {
                soleMaterial:prodProperty,
                soleHeight:prodProperty1,
                sex,
                season,
            },
            brand:{
                name,
                brandCountry,
                manufactureCountry,
                manufactureAddress
            },
            productSizes: arrayOfSizes
            ,
            productImages:{
                smallImage,
                listOfBigImages
            }

        });
        console.log({
            name, cost, vendorCode, similaritiesIndex, productCategories,
            productDescription: {
                prodProperty,
                prodProperty1,
                sex,
                season,
            },
            brand:{
                brandName,
                brandCountry,
                manufactureCountry,
                manufactureAddress
            },
            productSizes: arrayOfSizes,
            productImages:{
                smallImage,
                listOfBigImages
            }

        });
    };
    const [success,onSuccess]=useState(false);
    const [error,onError]=useState('');

    const sendDataToServer=()=>{
        addNewProduct(dataForSend,onSuccess,onError);
            onSuccess(true);

        console.log(error);
    };

    return (
        <Modal  isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create new product</ModalHeader>
            <div className={success? classNames(customeStylеs.background,customeStylеs.blured) : null}>
                <ModalBody className={classes.modal}>
                    <Form >

                        <FormGroup>
                            <Label for="exampleEmail">Название продукта</Label>
                            <Input valid={validateField(name)} invalid={!validateField(name)}
                                   onChange={(e) => setName(e.target.value)}/>
                            <FormFeedback valid>Всё хорошо </FormFeedback>
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleEmail">Введите цену продукта</Label>
                            <Input valid={validateField(cost)} invalid={!validateField(cost)}
                                   onChange={(e) => setCost(e.target.value)}/>
                            <FormFeedback valid>Всё хорошо </FormFeedback>
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleEmail">Введите коде производителя</Label>
                            <Input valid={validateField(vendorCode)} invalid={!validateField(vendorCode)}
                                   onChange={(e) => setVendorCod(e.target.value)}/>
                            <FormFeedback valid>Всё хорошо </FormFeedback>
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleEmail">Введите similaritiesIndex</Label>
                            <Input valid={validateField(similaritiesIndex)} invalid={!validateField(similaritiesIndex)}
                                   onChange={(e) => setSimilaritiesIndex(e.target.value)}/>
                            <FormFeedback valid>Всё хорошо </FormFeedback>
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleEmail">Введите катeгорию продукта</Label>
                            <Input valid={validateField(productCategories)} invalid={!validateField(productCategories)}
                                   onChange={(e) => setProductCategories(e.target.value)}/>
                            <FormFeedback valid>Всё хорошо </FormFeedback>
                        </FormGroup>

                        <Label size='lg'>Описание продукта</Label>
                        <hr color="black"/>
                        <FormGroup>
                            <Label>Категория продукта</Label>
                            <Input type='select'
                                   onChange={(e) => changeDescriptionTitle(e.target.value)}>
                                <option>Куртки</option>
                                <option>Кеды</option>
                            </Input>
                            <FormFeedback valid>Всё хорошо </FormFeedback>
                        </FormGroup>

                        <FormGroup>
                            <Label>{descriptionTitle}</Label>
                            <Input valid={validateField(prodProperty)} invalid={!validateField(prodProperty)}
                                   onChange={(e) => setProdProperty(e.target.value)}/>
                            <FormFeedback valid>Всё хорошо </FormFeedback>
                        </FormGroup>

                        <FormGroup>
                            <Label>{descriptionTitle1}</Label>
                            <Input valid={validateField(prodProperty1)} invalid={!validateField(prodProperty1)}
                                   onChange={(e) => setProdProperty1(e.target.value)}/>
                            <FormFeedback valid>Всё хорошо </FormFeedback>
                        </FormGroup>

                        <FormGroup>
                            <Label>Пол</Label>
                            <Input valid={validateField(sex)} invalid={!validateField(sex)}
                                   onChange={(e) => setSex(e.target.value)}/>
                            <FormFeedback valid>Всё хорошо </FormFeedback>
                        </FormGroup>

                        <FormGroup>
                            <Label>Выберать сезон</Label>
                            <Input type='select' valid={validateField(season)} invalid={!validateField(season)}
                                   onChange={(e) => setSeason(e.target.value)}>
                                <option>Зима</option>
                                <option>Весна</option>
                                <option>Лето</option>
                                <option>Осень</option>
                            </Input>
                            <FormFeedback valid>Всё хорошо </FormFeedback>
                        </FormGroup>

                        <Label size='lg'>Описание бренда</Label>
                        <hr color="black"/>
                        <FormGroup>
                            <Label>Введите название бренда</Label>
                            <Input valid={validateField(brandName)} invalid={!validateField(brandName)}
                                   onChange={(e) => setBrandName(e.target.value)}/>
                            <FormFeedback valid>Всё хорошо </FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label>Введите страну бренда</Label>
                            <Input valid={validateField(brandCountry)} invalid={!validateField(brandCountry)}
                                   onChange={(e) => setBrandCountry(e.target.value)}/>
                            <FormFeedback valid>Всё хорошо </FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label>Введите страну производителя </Label>
                            <Input valid={validateField(manufactureCountry)} invalid={!validateField(manufactureCountry)}
                                   onChange={(e) => setManufactureCountry(e.target.value)}/>
                            <FormFeedback valid>Всё хорошо </FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label>Введите адрес производителя </Label>
                            <Input valid={validateField(manufactureAddress)} invalid={!validateField(manufactureAddress)}
                                   onChange={(e) => setManufactureAddress(e.target.value)}/>
                            <FormFeedback valid>Всё хорошо </FormFeedback>
                        </FormGroup>

                        <Label size='lg'>Описание размеров</Label>
                        <hr color="black"/>
                        <FormGroup>
                            <Label>Введите размер</Label>
                            <Input valid={validateField(sizeValue)} invalid={!validateField(sizeValue)}
                                   onChange={(e) => setSizeValue(e.target.value)}/>
                            <FormFeedback valid>Всё хорошо </FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label>Введите индекс страны размера</Label>
                            <Input valid={validateField(location)} invalid={!validateField(location)}
                                   onChange={(e) => setLocation(e.target.value)}/>
                            <FormFeedback valid>Всё хорошо </FormFeedback>

                            <Button className={customeStylеs.addNewSizeBtn}
                                    disabled={submitStatus(secondArrOfFieldsForValidation)}
                                    onClick={() => addItemToArrayOfSizes([...arrayOfSizes, {
                                        sizeValue,
                                        location
                                    }])}>Добавить новый размер</Button>

                        </FormGroup>

                        <FormGroup>
                            <ImageLoader labelText={'Загрузить большое изображение'} getSmallImage={getSmallImage}/>
                            <MultiImgLoader labelText={'Загрузить маленькое изображение'} getListOfBigImages={getListOfBigImages}/>
                        </FormGroup>
                        <br/>

                        <Button className={customeStylеs.submitBtn} disabled={submitStatus(firstArrOfFieldsForValidation)}
                                onClick={onSubmit}> Submit</Button>
                    </Form>

                </ModalBody>

                <ModalFooter>
                    <Button color="danger" onClick={sendDataToServer}>Save</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </div>

            {success && <Spinner className={customeStylеs.spinner}/>}
        </Modal>

    );
};

export default CreateProductForm;