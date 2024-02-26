import { ActionTypes } from "../constant/ActionType";




export const ProductReducer=(state= [] ,{type,payload} )=>{
switch (type) {
    case ActionTypes.SET_PRODUCTS:
        return [...state,...payload];
        case   ActionTypes.ADD_NEW_PRODUCT :
          console.log(state,payload,"addnewprdt");
          return [...state,payload]
        
    default:
       return state;
}
}
 export const  cartReducer = (state=[],{type , payload})=>{
  console.log(state,type,payload,"checkState");
    switch (type) {
      case   ActionTypes.CART_PRODUCTS :
        return {...state, ...payload}
      case   ActionTypes.ADD_CART_PRODUCTS :
        return [...state,payload]
      case   ActionTypes.REMOVE_CART_PRODUCTS :
    console.log(state,payload,"removeprdt");
      
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
 
 
 export const registeredReducer = (state=[{email:`Admin@123`,password:`123`,user:"admin"}],{type,payload})=>{
  console.log(state,payload,"newuser") ;
  switch(type){
  case   ActionTypes.ADD_NEW_USER :
        return [...state,payload]
        
        default:
   return state
   
}

 }
 export const userLoginReducer = (state={},{type,payload})=>{
  console.log(state,payload,"admin") ;
  switch(type){
  case   ActionTypes.ADD_LOGIN_USER :
        return payload
        
        default:
   return state
   
}

 }