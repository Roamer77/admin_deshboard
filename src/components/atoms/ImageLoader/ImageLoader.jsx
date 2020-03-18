import React, {useState} from "react";
import {Button, Label} from "reactstrap";
import logo from '../../../images/download.png'
import myImag from '../../../images/logooo.jpg'
const ImageLoader=()=>{
    const [data,setData]=useState(logo);


    return (
        <div>
            <Label>Загрузить маленькое изображение</Label>
            <Button onClick={()=>setData(myImag)}>+</Button>
            <div>
                <img src={data} width='128' height='128' alt={'img'}/>
            </div>
        </div>
    );
};
export default ImageLoader;