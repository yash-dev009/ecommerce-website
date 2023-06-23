import { ActionTypes } from "../constant/ActionType";


export const setProducts=(products)=>{
    return{
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const favProducts=(product)=>{
    return{
        type: ActionTypes.FAV_PRODUCTS,
        payload: product,
    };
};
export const cartProducts=(product)=>{
    return{
        type: ActionTypes.CART_PRODUCTS,
        payload: product,
    };
};
export const AddToCart=(product)=>{
    return{
        type: ActionTypes.ADD_CART_PRODUCTS,
        payload: product,
    };
};
export const RemoveFromCart=(product)=>{
    return{
        type: ActionTypes.REMOVE_CART_PRODUCTS,
        payload: product,
    };
};