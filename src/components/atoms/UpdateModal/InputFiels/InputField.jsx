import React from "react";
import Field from "./Field";
import DropDownField from "../../DropDownFields/DropDownFields";
import SuperDropDownField from "../../DropDownFields/SuperDrowDownFields";

const InputFields = ({data, onFieldChange,onProductDescriptionChange,onProductSizesArrayChanges,productSizeArrayChanges}) => {

    return (
        <div>
            <Field data={data.name} title='name' onFieldChange={onFieldChange} />
            <Field data={data.cost} title='cost' onFieldChange={onFieldChange}/>
            <Field data={data.vendorCode} title='vendorCode' onFieldChange={onFieldChange}/>
            <Field data={data.similaritiesIndex} title='similaritiesIndex' onFieldChange={onFieldChange}/>
            <Field data={data.productCategories.categoryName} title='productCategories' onFieldChange={onFieldChange}/>
            <DropDownField data={data.productDescription} title='Product description' onProductDescriptionChange={onProductDescriptionChange}/>
            <SuperDropDownField data={data.brands} title='brand'  onFieldChange={onProductDescriptionChange}/>
            <SuperDropDownField data={productSizeArrayChanges} title='productSizes'  onFieldChange={onProductSizesArrayChanges}/>
        </div>
    );
};

export default InputFields;