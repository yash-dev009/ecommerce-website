import React from 'react'
import MainNavbar from '../components/MainNavbar'
import Cards from './Cards';
import  { useEffect, useState} from 'react'
import Footer from '../components/Footer';
import axios from 'axios';
import Allbuttons from '../components/All buttons';
import { useDispatch, useSelector  } from 'react-redux';
import {setProducts} from "../Redux/Action/ProductAction"
import { BsTextCenter } from 'react-icons/bs';
import Circleloading from '../components/spiner';


const Product = () => {

 const  store = useSelector((state) => state)
 const  isadmin = useSelector((state) => state.loginusers)
  const dispatch =  useDispatch()

  const [loading, setLoading] = useState(false);
 
 

  const getMyPostData = async()=>{
    setLoading(true)
    const response = await axios
    .get('https://fakestoreapi.com/products')
    .catch((err)=>{
        console.log("Err",err);
       })   
       setLoading(false)    
   dispatch(setProducts(response.data.map((product,i) => ({...product,isCart:false}))))

  }
    useEffect(()=>{
      getMyPostData()
    }, []);
 console.log(store,"store")

 console.log(isadmin,`isadmin`);
  return (
    <div>
      {isadmin?.user=="user"?<MainNavbar SearchTab heart product/>:<MainNavbar SearchTab heart additem product/>} 
     

      <Allbuttons/>

   
      <div className=''>

      { loading ? <><h2 className='loading'>Wait a second
      Loading...</h2> 
      <div style={{display:"flex",justifyContent:"center", marginTop:"40px"}}><Circleloading/></div>
      </> :<Cards/> }  
    </div>
    <div style={{height:"20vh"}}>

</div>
<Footer/>
    </div>
  )
}

export default Product;