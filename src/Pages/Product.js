import React from 'react'
import MainNavbar from '../components/MainNavbar'
import Cards from './Cards';
import  { useEffect } from 'react'
import Footer from '../components/Footer';
import axios from 'axios';
import Allbuttons from '../components/All buttons';
import { useDispatch, useSelector  } from 'react-redux';
import {setProducts} from "../Redux/Action/ProductAction"

const Product = () => {

 const  store =useSelector((state) => state)
  const dispatch =  useDispatch()

  // const [ProductPosts, setProductPosts] = useState([]);



  const getMyPostData = async()=>{
    const response = await axios
    .get('https://fakestoreapi.com/products')
    .catch((err)=>{
        console.log("Err",err);
       })       
   dispatch(setProducts(response.data))
  }
  
    useEffect(() => {
      getMyPostData()
    }, []);
 console.log(store,"store")
  

  return (
    <div>
      <MainNavbar SearchTab heart login/>

      <Allbuttons/>

      <div style={{height:"10vh"}}>

</div>
      
      <div className=''>
  <Cards/>
      {/* {ProductPosts.map((post)=>{
      return(
        <Cards
        key={post.id}
        Heading={post.title}
        Price={post.price}
        Description={post.description}
        Img={post.image}
        Category={post.category}
        />
      )
    })} */}
    </div>
    <div style={{height:"20vh"}}>

</div>
<Footer/>
    </div>
  )
}

export default Product;