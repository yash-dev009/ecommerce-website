
import {  useParams } from 'react-router-dom';

import React  from 'react';
import MainNavbar from '../components/MainNavbar';
import { useSelector } from 'react-redux';


function ProductDetail ()  {
  const allProducts = useSelector((state)=> state.allProducts)
 const Params =useParams()
 console.log(Params, `5`);
  const filterProduct = allProducts.filter(i=> i.id == Params.productId)
  console.log(filterProduct ,`filterProduct`);

   
  const firstItem = filterProduct?.[0]
   console.log(firstItem,`12`);
 const {id , price, title ,description,image,category}= firstItem

 console.log(allProducts ,`allProducts`);
 

  return (

  
    <div className=" ui grid container ">
        <MainNavbar/>
      { Object.keys(firstItem).length === 0 ? (
        <div>Product is Loading...</div>
      ):(
        <div key={id}> 
        <div className='productdetail'> 
        <div className='productdetail1'   > 
               <img style={{ height:"310px",borderRadius:"11px" }}  src={image} alt={title}/>
               </div>
               <div>     
        <h1>{title}</h1>
        <p>Category :{category}</p>
        <p>Detail : {description}</p>
        <p>Price :  ${price}</p>
        
        </div>
        </div>

        </div>
      )}
 
    </div>
  )
      }


export default ProductDetail