import {combineReducers } from "redux";
import {ProductReducer , cartReducer,favReducer} from "./ProductReducer";




const reducers = combineReducers({
    allProducts:ProductReducer,
    cartproduct:cartReducer,
    favProduct:favReducer,
})
export default reducers;