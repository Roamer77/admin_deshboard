import React, {useState} from "react";
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
    ModalHeader
} from 'reactstrap';
import classes from "../UpdateModal/UpdateModal.module.css";
import customeStylеs from "./CreateProductForm.module.css";
const CreateProductForm = ({isOpen}) => {



    const [modal, setModal] = useState(isOpen);
    const toggle = () => setModal(!modal);

    const [arrayOfSizes,addItemToArrayOfSizes]=useState([]);

    console.log(arrayOfSizes);
    const [name, setName] = useState('');
    const [cost,setCost]=useState('');
    const [vendorCode,setVendorCod]= useState('');
    const [similaritiesIndex,setSimilaritiesIndex]=useState('');
    const [productCategories,setProductCategories]=useState('');

    //productDescription
    const [prodProperty,setProdProperty]=useState('');
    const [prodProperty1,setProdProperty1]=useState('');
    const [sex,setSex]=useState('');
    const [season,setSeason]=useState('');

    //brand description
    const [brandName,setBrandName]=useState('');
    const [brandCountry,setBrandCountry]=useState('');
    const [manufactureCountry,setManufactureCountry]=useState('');
    const [manufactureAddress,setManufactureAddress]=useState('');

    //prudctSize description
    const [sizeValue,setSizeValue]=useState('');
    const [location,setLocation]=useState('');

    let firstArrOfFieldsForValidation = [name,cost,vendorCode,similaritiesIndex,productCategories];
    let secondArrOfFieldsForValidation=[sizeValue,location];

    let descriptionTitlesForKedCategory=['Метериал подошвы','Высота подошвы'];
    let descriptionTitlesForJacketCategory=['Ткань','Материал подкладки'];

    const [descriptionTitle,setDescriptionTitle]=useState(descriptionTitlesForJacketCategory[0]);
    const [descriptionTitle1,setDescriptionTitle1]=useState(descriptionTitlesForJacketCategory[1]);

    const changeDescriptionTitle=(data)=>{
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
        console.log(counter);
        return counter > 0;
    };
    const onSubmit=()=>{
        console.log({});
    };

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create new product</ModalHeader>
            <ModalBody className={classes.modal}>
                <Form>

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

                    <Label size='lg'>Описание продукта( для кед)</Label>
                    <hr color="black"/>
                    <FormGroup>
                        <Label >Категория продукта</Label>
                        <Input  type='select'
                                onChange={(e) => changeDescriptionTitle(e.target.value)}>
                            <option>Куртки</option>
                            <option>Кеды</option>
                        </Input>
                        <FormFeedback valid>Всё хорошо </FormFeedback>
                    </FormGroup>

                    <FormGroup>
                        <Label >{descriptionTitle}</Label>
                        <Input valid={validateField(prodProperty)} invalid={!validateField(prodProperty)}
                               onChange={(e) => setProdProperty(e.target.value)}/>
                        <FormFeedback valid>Всё хорошо </FormFeedback>
                    </FormGroup>

                    <FormGroup>
                        <Label >{descriptionTitle1}</Label>
                        <Input valid={validateField(prodProperty1)} invalid={!validateField(prodProperty1)}
                               onChange={(e) => setProdProperty1(e.target.value)}/>
                        <FormFeedback valid>Всё хорошо </FormFeedback>
                    </FormGroup>

                    <FormGroup>
                        <Label >Пол</Label>
                        <Input valid={validateField(sex)} invalid={!validateField(sex)}
                               onChange={(e) => setSex(e.target.value)}/>
                        <FormFeedback valid>Всё хорошо </FormFeedback>
                    </FormGroup>

                    <FormGroup>
                        <Label >Выберать сезон</Label>
                        <Input  type='select' valid={validateField(season)} invalid={!validateField(season)}
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
                        <Label >Введите название бренда</Label>
                        <Input valid={validateField(brandName)} invalid={!validateField(brandName)}
                               onChange={(e) => setBrandName(e.target.value)}/>
                        <FormFeedback valid>Всё хорошо </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label >Введите страну бренда</Label>
                        <Input valid={validateField(brandCountry)} invalid={!validateField(brandCountry)}
                               onChange={(e) => setBrandCountry(e.target.value)}/>
                        <FormFeedback valid>Всё хорошо </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label >Введите страну производителя </Label>
                        <Input valid={validateField(manufactureCountry)} invalid={!validateField(manufactureCountry)}
                               onChange={(e) => setManufactureCountry(e.target.value)}/>
                        <FormFeedback valid>Всё хорошо </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label >Введите адрес производителя </Label>
                        <Input valid={validateField(manufactureAddress)} invalid={!validateField(manufactureAddress)}
                               onChange={(e) => setManufactureAddress(e.target.value)}/>
                        <FormFeedback valid>Всё хорошо </FormFeedback>
                    </FormGroup>

                    <Label size='lg' >Описание размеров</Label>
                    <hr color="black"/>
                    <FormGroup>
                        <Label >Введите размер</Label>
                        <Input valid={validateField(sizeValue)} invalid={!validateField(sizeValue)}
                               onChange={(e) => setSizeValue(e.target.value)}/>
                        <FormFeedback valid>Всё хорошо </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label >Введите индекс страны размера</Label>
                        <Input valid={validateField(location)} invalid={!validateField(location)}
                               onChange={(e) => setLocation(e.target.value)}/>
                        <FormFeedback valid>Всё хорошо </FormFeedback>
                    </FormGroup>
                    <Button className={customeStylеs.addNewSizeBtn}  disabled={submitStatus(secondArrOfFieldsForValidation)} onClick={()=>addItemToArrayOfSizes([...arrayOfSizes,{sizeValue,location}])}>+</Button>
                    <br/>
                    <Button className={customeStylеs.submitBtn}  disabled={submitStatus(firstArrOfFieldsForValidation)} onClick={onSubmit}> Submit</Button>
                </Form>

            </ModalBody>
                <ModalFooter>
                    <Button color="danger" >Save</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
        </Modal>

    );
};

export default CreateProductForm;