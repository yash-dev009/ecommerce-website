import {combineReducers } from "redux";
import {ProductReducer , registeredReducer, cartReducer,favReducer,userLoginReducer } from "./ProductReducer";




const reducers = combineReducers({
    allProducts:ProductReducer,
    cartproduct:cartReducer,
    favProduct:favReducer,
    registereduser:registeredReducer,
    loginusers:userLoginReducer,  
})
export default reducers;