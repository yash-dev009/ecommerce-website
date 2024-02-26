import React, { useEffect, useState } from 'react'
import MainNavbar from '../../components/MainNavbar'
import Styles from "../Additem/Styles.module.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AddNewProduct } from '../../Redux/Action/ProductAction';


function Additems() {
const [name, setName] = useState()
const [price, setPrice] = useState()
const [detail, setDetail] = useState()
const [category, setCategory] = useState()

const [allCat, setAllCat] = useState([])
const dispatch = useDispatch()
 const navigate =useNavigate()


 console.log(category,"cat");

 useEffect(() => {
  getAllCat()
 }, [])
 

 function getAllCat() {
  fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json()  )
            .then(json=>setAllCat(json))
 }

const handleSubmit = (e) => {
 e.preventDefault()

 axios.post(`https://fakestoreapi.com/products`,{
  title: name,
  price: price,
  description: detail,
  image: `https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg` ,
  category: category,
 }).then(res => {
  dispatch(AddNewProduct({...res.data,isCart:false})) 
  navigate("/product")
  console.log(res,`resonse`)
}  ).catch(err => console.log(err,`error`))
          
};


  return (
    <div>
 <MainNavbar/>

<div className={Styles.container}>
<div className={Styles.subcontainer}>
<Form>
      <Form.Group className="mb-2" >
        <Form.Label>Product Name  : </Form.Label>
        <Form.Control type="text" placeholder="Enter product name" onChange={(e)=>setName(e.target.value)}
        value={name} />
      </Form.Group>

      <Form.Group className="mb-4" >
        <Form.Label>Price  :</Form.Label>
        <Form.Control type="text" placeholder="Price " onChange={(e)=>setPrice(e.target.value)}
        value={price} />
      </Form.Group>
      <Form.Group className="mb-3" >
      <Form.Label>Product Detail :</Form.Label>
      <Form.Control type="textarea" placeholder="Product Details" onChange={(e)=>setDetail(e.target.value)}
        value={detail}/>
      </Form.Group>
      <Form.Select value={category} onChange={(e) => setCategory(e.target.value)} >
      {allCat.map(v => {
        return <option value={v} >{v}</option>
      })}
    </Form.Select>
    
      <div className={Styles.submit}>
      <Button variant="primary" type="submit" className={Styles.submitbutton} onClick={handleSubmit}>
        Submit
      </Button></div>
      

    </Form>
    
    </div>
    </div>
    </div>
  )
}

export default Additems