import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';

const INITIAL_STATE = {
    UserIsLogin: 1,

    user: {
        token: null,
        isAuth: false,
        useName: null
    },
    gridItems: [],
    listOfAccounts: [],
    listOfManagers: [],
    listOfProducts: []
};

export function rootReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'IS_USER_LOGIN':
            return {
                ...state,
                data: [...state.data, action.payload]
            };
        case 'CHANGE_STATUS':
            localStorage.setItem("isUserLogin", action.payload);
            return {
                ...state,
                UserIsLogin: action.payload
            };
        case 'SET_LOAD_LIST_OF_ORDERS':
            return {
                ...state,
                gridItems: action.payload
            };
        case 'SET_LOAD_LIST_OF_ACCOUNTS':
            return {
                ...state,
                listOfAccounts: action.payload
            };
        case 'SET_LOAD_LIST_OF_MANAGERS':
            return {
                ...state,
                listOfManagers: action.payload
            };
        case 'SET_LOAD_LIST_OF_PRODUCTS':
            return {
                ...state,
                listOfProducts: action.payload, test: action.payload
            };
        case 'SET_NEW_PRODUCT_LIST_OF_PRODUCTS':
            return {
                ...state,
                listOfProducts: [...state.listOfProducts, ...action.payload]
            };
        case 'DELETE_PRODUCT_FROM_STORE':
            return {
                ...state,
                listOfProducts: state.listOfProducts.filter(({id})=> id!==action.payload)
            };

        default:
            return state;
    }
}


const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;