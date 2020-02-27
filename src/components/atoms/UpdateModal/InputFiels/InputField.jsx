import React from "react";
import Field from "./Field";
import DropDownField from "../../DropDownFields/DropDownFields";

const InputFields = ({data, onFieldChange}) => {

    return (
        <div>
            <Field data={data.name} title='name' onFieldChange={onFieldChange} />
            <Field data={data.cost} title='cost' onFieldChange={onFieldChange}/>
            <Field data={data.brand} title='brand' onFieldChange={onFieldChange}/>
            <Field data={data.averageRating} title='averageRating' onFieldChange={onFieldChange}/>
            <Field data={data.productSizes} title='productSizes' onFieldChange={onFieldChange}/>
            <Field data={data.vendorCode} title='vendorCode' onFieldChange={onFieldChange}/>
            <Field data={data.similaritiesIndex} title='similaritiesIndex' onFieldChange={onFieldChange}/>
            <Field data={data.productCategories.categoryName} title='productCategories' onFieldChange={onFieldChange}/>
            <DropDownField data={data.productDescription} title='Product description' onFieldChange={onFieldChange}/>
        </div>
    );
};

export default InputFields;