// import React, { useState ,useEffect } from 'react'
// import { useParams } from 'react-router-dom'

// const SingleProduct = () => {

// const {id}= useParams();
// const [Product, setProduct] = useState([]);
// const [loading,setLoading] =useState(false);

// useEffect(() => {
//    const getProduct = async ()=>{
//     setLoading(true);
//     const response = await fetch('https://fakestoreapi.com/products/${id}');
//     setProduct( await response.json());
//     setLoading(false)
//    }
//    getProduct();
// }, []);

// const Loading=()=>{
//     return(
//         <>
//         Loading.........
//         </>
//     )
// }
// const ShowProduct=()=>{
//     return(
//         <>
        
//         </>
//     )

// }

//   return (
//     <div>
// {loading? <Loading/> : <ShowProduct/>}
//     </div>
//   )
// }

// export default SingleProduct