export function setListOfOrders(items) {
    return {
        type: 'SET_LOAD_LIST_OF_ORDERS',
        payload: items
    };
}
export function setListOfAccounts(items) {
    return {
        type: 'SET_LOAD_LIST_OF_ACCOUNTS',
        payload: items
    };
}
export function setListOfManagers(items) {
    return {
        type: 'SET_LOAD_LIST_OF_MANAGERS',
        payload: items
    };
}
export function setListOfProducts(items) {
    return {
        type: 'SET_LOAD_LIST_OF_PRODUCTS',
        payload: items
    };
}

const loadListOfOrdersFromSever = (page) =>{
    return async dispatch => {
        const url = 'http://192.168.176.17:8080/admin/orderList?pageNumber=' + page;
        const resp = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const parsedResp = await resp.json();

        dispatch(setListOfOrders(parsedResp));
    };

} ;

export const loadListOfAccountsFromSever = (page) =>{
    return async dispatch => {
        const url = 'http://192.168.176.17:8080/userCrudOperations/getListOfAccounts?pageNumber=' + page;
        const resp = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const parsedResp = await resp.json();

        dispatch(setListOfAccounts(parsedResp));
    };

} ;
export const loadListOfManagersFromSever = (page) =>{
    return async dispatch => {
        const url = 'http://192.168.176.17:8080/userCrudOperations/getListOfManagers?pageNumber=' + page;
        const resp = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const parsedResp = await resp.json();

        dispatch(setListOfManagers(parsedResp));
    };

} ;
export const loadListOfProductsFromSever = (page) =>{
    return async dispatch => {
        const url = 'http://192.168.176.17:8080/productsCrudOperations/getListOfProducts?pageNumber=' + page;
        const resp = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const parsedResp = await resp.json();

        dispatch(setListOfProducts(parsedResp));
    };

} ;

export default loadListOfOrdersFromSever;