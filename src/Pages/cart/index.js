import React from 'react'
// import {RxCross2} from "react-icons/rx";
// import styles from "./styles.module.css"
import { useSelector } from 'react-redux';
import {AiOutlineHeart} from "react-icons/ai";
import MainNavbar from '../../components/MainNavbar';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';







 
  
  function Cart() {
    const Cartitem = useSelector((state)=> state.cartproduct)
 const  cartrender = Cartitem.map(item=>{
  const {id , price, title ,description,image} = item

  return (

<div className='list'> 
    <div className="card-container-main  " key={id}>

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
</div>
  )
 })  

    return (

      <div >
        <MainNavbar/>
{cartrender}
    {/* <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card> */}
 
      </div>
    )
  }
  
  export default Cart