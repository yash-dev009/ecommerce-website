import { ActionTypes } from "../constant/ActionType";


const initialState= {
    products:[],

}
export const ProductReducer=(state= initialState ,{type,payload} )=>{
switch (type) {
    case ActionTypes.SET_PRODUCTS:
        return {...state , products:payload};

        
    default:
       return state;
}
}
 export const  cartReducer = (state=[], {type , payload})=>{
  console.log(state,type,payload,"checkState");
    switch (type) {
      case   ActionTypes.CART_PRODUCTS :
        return {...state, ...payload}
      case   ActionTypes.ADD_CART_PRODUCTS :
        return [...state,payload]
      case   ActionTypes.REMOVE_CART_PRODUCTS :
      
return state?.filter(k => k !== payload)
            
        default:
   return state
    }
 }  
 export const  favReducer = (state=[], {type , payload})=>{
    switch (type) {
      case   ActionTypes.FAV_PRODUCTS :
        return {...state,  ...payload}
            
     
    
        default:
   return state
    }
 }  