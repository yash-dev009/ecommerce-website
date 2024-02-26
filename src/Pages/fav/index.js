import React from 'react'
import { useSelector } from 'react-redux'
import {AiOutlineHeart} from "react-icons/ai";

function FavItems() {
 const products= useSelector((state)=>state.favProduct)
 

 const  favrender = products.map(item=>{
  
  const {id , price, title ,description,image} = item

  return (


    <div className="card-container-main" key={id}>

    <AiOutlineHeart size={"1.4rem"} marginLeft={"40px"} />  
  <img className="card-img" src={image}  alt={title}/>

  <div className='card-container-sub'>
   <h4 className='card-heading'>{title.substring(0,40)}</h4> 

 <div className='cart-btn-div'>

 <p className="cart-btn" >Details{description.substring(0,80)}</p>
 <p className="price" > Price = $ {price}</p>
 
 
</div>
</div> 
</div>
  )
 })  
 
 
 



  return (
    
<div> {favrender}</div>
  )
}

export default FavItems