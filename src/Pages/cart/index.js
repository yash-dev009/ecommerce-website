import React from 'react'
// import {RxCross2} from "react-icons/rx";
// import styles from "./styles.module.css"
import { useDispatch, useSelector } from 'react-redux';
import {AiOutlineHeart} from "react-icons/ai";
import MainNavbar from '../../components/MainNavbar';
import { RemoveFromCart } from '../../Redux/Action/ProductAction';
import { useNavigate } from 'react-router-dom';
import Allbuttons from '../../components/All buttons';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';







 
  
  function Cart() {
    const cartproduct = useSelector((state)=> state.cartproduct)
    const navigate = useNavigate()
    const dispatch = useDispatch()

 console.log(cartproduct,"cartrender");
    return (
<div>
<MainNavbar SearchTab heart login/>

<Allbuttons/>

<div className='renderred' >
      {cartproduct.length == 0 ?  <div>
        <h2>Oops, Your cart is empty !!</h2>
      </div>  : cartproduct.map((product)=>{
 
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

   <p className="cart-btn" onClick={(event) => {
     event.stopPropagation()
     dispatch(RemoveFromCart(product))
  }}>Remove from cart</p>
 
  
 </div>
 </div> 
 </div>
   )
 })}

   </div>
</div>

    )
  }
  
  export default Cart 