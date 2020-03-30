import React from "react";
import Field from "./Field";
import DropDownField from "../../DropDownFields/DropDownFields";
import SuperDropDownField from "../../DropDownFields/SuperDrowDownFields";

const InputFields = ({data, onFieldChange,onProductDescriptionChange,onProductSizesArrayChanges,onProductBrandDescription,productSizeArrayChanges}) => {

    let brandsWithoutID= JSON.parse(JSON.stringify(data.brands[0]));
   delete  brandsWithoutID.id;

    return (
        <div>
            <Field data={data.name} title='name' onFieldChange={onFieldChange} />
            <Field data={data.cost} title='cost' onFieldChange={onFieldChange}/>
            <Field data={data.vendorCode} title='vendorCode' onFieldChange={onFieldChange}/>
            <Field data={data.similaritiesIndex} title='similaritiesIndex' onFieldChange={onFieldChange}/>
            <Field data={data.productCategories.id} title='productCategories' onFieldChange={onFieldChange}/>
            <DropDownField data={data.productDescription} title='Product description' onFieldChange={onProductDescriptionChange}/>
            <DropDownField data={brandsWithoutID} title='brand'  onFieldChange={onProductBrandDescription}/>
            <SuperDropDownField data={productSizeArrayChanges} title='productSizes'  onFieldChange={onProductSizesArrayChanges}/>
        </div>
    );
};

export default InputFields;