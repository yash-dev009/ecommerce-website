
import {  useParams } from 'react-router-dom';
import axios from 'axios';
import React , { useEffect, useState } from 'react';
import MainNavbar from '../components/MainNavbar';

function ProductDetail ()  {

 const [product,setProduct] = useState({})
  const {image , title, category , description,price}= product
    const {productId}= useParams()


  console.log(product,"1");

  const fetchProductdetail = async () => {
     const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
.catch(err=>{console.log("Err",err);
}) 

setProduct(response.data)
 }
 useEffect(() => {
   fetchProductdetail()
 }, [productId])

  return (

  
    <div className=" ui grid container ">
        <MainNavbar/>
      { Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ):(
        <> 
        <img src={image} alt={title}/>
        <h1>{title}</h1>
        <p>Category :{category}</p>
        <p>{description}</p>
        <p>Price : ${price}</p>
        
        
        </>
      )}

    </div>
  )
      }


export default ProductDetail