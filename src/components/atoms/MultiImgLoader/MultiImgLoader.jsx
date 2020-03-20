import React, {useCallback, useState} from "react";
import {Input, Label} from "reactstrap";
import palaceHolder from "../../../images/download.png"

const MultiImgLoader = ({labelText,getListOfBigImages}) => {

    const [placeHolderState, setPlaceHolderState] = useState(true);
    const [arr, setArr] = useState([]);


    const processAllFiles = (files) => {
        let arr = [];
        Object.values(files).forEach(item => {
            arr.push(URL.createObjectURL(item));
        });
        setArr(arr);
        setPlaceHolderState(false);

        getListOfBigImages(converImgsToBase64(Object.values(files)));
    };

    const converImgsToBase64 = (arr) => {
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            let fileReader = new FileReader();
            fileReader.readAsDataURL(arr[i]);
            fileReader.onload = () => {
                result.push(base64StringModify(fileReader.result));
            };
        }
        return result;
    };
    const base64StringModify=(string)=>{
        return  String(string).split(',')[1];
    };
    return (
        <div>
            <Label>{labelText}</Label>
            <div>
                {placeHolderState && <img src={palaceHolder} width={128} height={128} alt={'img'}/>}
                {!placeHolderState &&
                arr.map((item) => (<img key={item} src={item} height={128} width={128} alt={'img'}/>))
                }
                <Input multiple type='file' onChange={(e) => {
                    processAllFiles(e.target.files)
                }}/>
            </div>
        </div>
    );
};
export default MultiImgLoader;