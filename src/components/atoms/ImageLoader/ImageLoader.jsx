import React, {useCallback, useState} from "react";
import {Input, Label, Spinner} from "reactstrap";
import palaceHolder from "../../../images/download.png"

const ImageLoader = ({labelText,getSmallImage}) => {

    const [file, setFile] = useState(palaceHolder);

    const [btnState, setBtnState] = useState(false);
    const [spinnerState, setSpinnerState] = useState(false);

    const reader = new FileReader();


    const wordWithFile = useCallback(  (file) => {
        if (file) {
                reader.readAsDataURL(file);

                setBtnState(true);


                reader.onprogress = (event) => {
                    let percentLoaded = Math.round((event.loaded / event.total) * 100);
                    setSpinnerState(true);
                    console.log(percentLoaded);
                };
                reader.onloadend = () => {
                    //ради эффекта ))
                    setTimeout(() => {
                        setSpinnerState(false);
                        setBtnState(false);
                    }, 1000);
                };
                reader.onload = () => {
                    console.log(reader.result);
                    setFile(reader.result);
                    getSmallImage(base64StringModify(reader.result));
                };
            }
        });
    const base64StringModify=(string)=>{
        return  String(string).split(',')[1];
    };

    return (
        <div>
            <Label>{labelText}</Label>
            <div>
                {spinnerState && <Spinner/>}
                {!spinnerState && <img src={file} width='128' height='128' alt={'img'}/>}

            </div>
            <Input  disabled={btnState} type='file' onChange={(e) => {wordWithFile(e.target.files[0])}}/>
        </div>
    );
};
export default ImageLoader;