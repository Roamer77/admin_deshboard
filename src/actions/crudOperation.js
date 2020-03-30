export const  sendUpdatedProductInfo = (updatedProductDescription) => {
    postData('http://192.168.176.17:8080/productsCrudOperations/changeProductInfo', updatedProductDescription)
        .then(data => console.log(JSON.stringify(data)))
        .catch(error => console.error(error));
};
export const deleteDataById=(id)=>{
    postData('http://192.168.176.17:8080/productsCrudOperations/deleteProductById', id)
        .then(data => console.log(JSON.stringify(data)))
        .catch(error => console.error(error));
};
export  const  addNewProduct=(newProduct,onSuccess,onError)=>{
    postData('http://192.168.176.17:8080/productsCrudOperations/addNewProduct', newProduct)
        .then((data) =>{
            //задержка для эффекта)
            setTimeout(() => {
                onSuccess(false);
            }, 1000);
            console.log(JSON.stringify(data))})
        .catch((error) =>{
            onError(error);
            console.error(error)});
};

function postData(url = '', data = {}) {
    console.log(JSON.stringify(data));

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify(data),
    })
        .then(response => JSON.stringify(response) );
}

