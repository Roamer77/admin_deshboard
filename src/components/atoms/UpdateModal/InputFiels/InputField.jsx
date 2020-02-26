import React from "react";
import Field from "./Field";
import {Button} from "reactstrap";
import DropDownField from "../../DropDownFields/DropDownFields";

const InputFields = ({data}) => {

    return (
        <div>
            <Field data={data.name} title='name'/>
            <Field data={data.cost} title='cost'/>
            <DropDownField data={data.productDescription} title='Product description'/>
            <Field data={data.brand} title='brand'/>
            <Field data={data.averageRating} title='averageRating'/>
            <Field data={data.productSizes} title='productSizes'/>
            <Field data={data.vendorCode} title='vendorCode'/>
            <Field data={data.similaritiesIndex} title='similaritiesIndex'/>
            <Field data={data.productCategories.categoryName} title='productCategories'/>
        </div>
    );
};

export default InputFields;