
import React from 'react'
import Modal from 'react-modal';
import {RxCross2} from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
 import {AiOutlineHeart} from "react-icons/ai";


const customStyles = {
  content: {
    // justifyContent:"center" ,
   textAlign:"center",
    display:"flex",
    flexWrap:"wrap",
    //  top: '10%',
    //  left: '20%',
    //  transform: 'translate(-9%, 1%)',
    
  },
};



const Cards = (props) => {

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

const Navigate = useNavigate()

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

 
  return (
    <div>
        
          <div className="card-container-main" >
            <AiOutlineHeart size={"1.4rem"} marginLeft={"40px"} />  
          <img className="card-img" src={props.Img}  alt={props.Heading}/>

          <div className='card-container-sub'>
           <h4 className='card-heading'>{props.Heading.substring(0,30)}</h4> 
        
         <div className='cart-btn-div'>
         <p className="price"> Price = ₹ {props.Price}</p>
         <p className="cart-btn" onClick={()=>{setIsOpen(true)}}>Details</p>
          <p className="cart-btn">Add to cart</p>
         
        </div>
        </div>
            
        </div>
     
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={()=>{setIsOpen(false)}}
      style={customStyles}
      contentLabel="Example Modal"
    >
      
    <RxCross2  onClick={()=>{setIsOpen(false)}} style={{marginLeft:" 95%", fontSize:"1.2rem"}} />
    <div style={{display:"flex"}}>
    <img className="card-img" src={props.Img}  alt={props.Heading}/>
    <div  style={{display:"flex", flexWrap:"wrap" ,border:"2px solid blue"}}>
    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{props.Heading}</h2>
       <p>{props.Description}</p>
       <p className="cart-btn" style={{display:"inline-block" ,justifyContent:"center"}}>Add to cart</p>  </div>
       </div>
    </Modal>
    </div>
  )
  
}

export default Cards