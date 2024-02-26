import React, { useState } from 'react'
// import Modal from 'react-modal';
// import {RxCross2} from "react-icons/rx";
// import { useNavigate } from 'react-router-dom';
 import {AiOutlineHeart} from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import { AddToCart, RemoveFromCart } from '../Redux/Action/ProductAction';



const Cards = () => {

const products = useSelector((state)=> state.allProducts)
const selectedprdt =  useSelector((state)=> state.cartproduct)
const navigate = useNavigate()
const dispatch = useDispatch()  


console.log(selectedprdt,"selectedprdt");
console.log(products,"products");


const arrayTwoIds = new Set(selectedprdt?.map((el) => el.id));
const arrayOneFiltered = products.filter((el) => !arrayTwoIds.has(el.id));
const newArr = [...arrayOneFiltered,...selectedprdt]

console.log(newArr,"newArr");

const result = newArr.reduce((unique, o) =>{
  if(!unique.some(obj => obj.title === o.title)){
    unique.push(o);
  }
  return unique;
},[]);
console.log(result, 'result');

  return (
    <div className='renderred' >
       {result.sort((a,b) => a.id - b.id).map((product)=>{
  
    const {id , price, title ,description,image,isCart}= product 
  
    return (
      <div className="card-container-main" key={id} onClick={() => navigate(`/productdetail/${id}`)} >
  
      <AiOutlineHeart size={"1.4rem"} marginLeft={"40px"} />  
    <img className="card-img" src={image}  alt={title}/>
  
    <div className='card-container-sub'>
     <h4 className='card-heading'>{title.substring(0,40)}</h4> 
  
   <div className='cart-btn-div'>
  
   <p className="cart-btn" >Detail : {description.substring(0,80)}</p>
   <p className="price"  > Price = $ {price}</p>
   {!isCart ? <p className="cart-btn" onClick={(event) => {
      event.stopPropagation()
      dispatch(AddToCart({...product,isCart:true}))
   }}>Add to cart</p>  :
    <p className="cart-btn" onClick={(event) => {
      event.stopPropagation()
      dispatch(RemoveFromCart(product))
   }}>Remove from cart</p>}
  
   
  </div>
  </div> 
  </div>
    )
  })}

    </div>
  )
  
}

export default Cards