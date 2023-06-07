import React from 'react'
import MainNavbar from '../components/MainNavbar'
import Cards from './Cards';
import  { useEffect, useState } from 'react'
import Footer from '../components/Footer';
// import { useParams } from 'react-router-dom';
import Allbuttons from '../components/All buttons';

const Product = () => {
  const [ProductPosts, setProductPosts] = useState([]);



  const getMyPostData =()=>{
    fetch('https://fakestoreapi.com/products')
              .then(response=>response.json())
              .then(json=>setProductPosts(json,"yash" ))
              
  }
  
    useEffect(() => {
      getMyPostData()
    }, []);

    // const {category_id} = useParams()

  return (
    <div>
      <MainNavbar SearchTab heart/>

      <Allbuttons/>

      <div style={{height:"10vh"}}>

</div>
      
      <div className='list'>

      {ProductPosts.map((post)=>{
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
    })}
    </div>
    <div style={{height:"20vh"}}>

</div>
<Footer/>
    </div>
  )
}

export default Product;