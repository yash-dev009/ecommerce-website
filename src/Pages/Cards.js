import React from 'react'
// import Modal from 'react-modal';
// import {RxCross2} from "react-icons/rx";
// import { useNavigate } from 'react-router-dom';
 import {AiOutlineHeart} from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import { AddToCart, RemoveFromCart } from '../Redux/Action/ProductAction';



// const customStyles = {
//   content: {
//     // justifyContent:"center" ,
//    textAlign:"center",
//     display:"flex",
//     flexWrap:"wrap",
//     //  top: '10%',
//     //  left: '20%',
//     //  transform: 'translate(-9%, 1%)',
//   },
// };



const Cards = () => {

const products = useSelector((state)=> state.allProducts.products)
const navigate = useNavigate()


const dispatch = useDispatch()
const renderlist = products.map((product)=>{
  
  const {id , price, title ,description,image} = product 

  return (
    <div className="card-container-main" key={id} onClick={() => navigate(`/productdetail/${id}`)} >

    <AiOutlineHeart size={"1.4rem"} marginLeft={"40px"} />  
  <img className="card-img" src={image}  alt={title}/>

  <div className='card-container-sub'>
   <h4 className='card-heading'>{title.substring(0,40)}</h4> 

 <div className='cart-btn-div'>

 <p className="cart-btn" >Details{description.substring(0,80)}</p>
 <p className="price" onClick={(event) => {
    event.stopPropagation()
    dispatch(RemoveFromCart(product))
 }} > Price = $ {price}</p>
<p className="cart-btn" onClick={(event) => {
    event.stopPropagation()
    dispatch(AddToCart(product))
 }}>Add to cart</p> 
  <p className="cart-btn" style={{color:"blue"}}>Remove from cart</p>
 
</div>
</div> 
</div>
  )

})

//   let subtitle;
//   const [modalIsOpen, setIsOpen] = React.useState(false);

// const Navigate = useNavigate()

//   function afterOpenModal() {
//     subtitle.style.color = '#f00';
//   }

 
  return (
    <div className='renderred' >
        {renderlist}
     
    {/* <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={()=>{setIsOpen(false)}}
      style={customStyles}
      contentLabel="Example Modal"
    >
      
    <RxCross2  onClick={()=>{setIsOpen(false)}} style={{marginLeft:" 95%", fontSize:"1.2rem"}} />
    <div style={{display:"flex"}}>
    <img className="card-img" src={image}  alt={title}/>
    <div  style={{display:"flex", flexWrap:"wrap" ,border:"2px solid blue"}}>
    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{title}</h2>
       <p>{description}</p>
       <p className="cart-btn" style={{display:"inline-block" ,justifyContent:"center"}}>Add to cart</p>  </div>
       </div>
    </Modal> */}
    </div>
  )
  
}

export default Cards