import React from 'react'
import  { useEffect, useState } from 'react'
import { Corousel1 } from '../components/Corousel1'
import Corousel2 from '../components/Corousel2'
import Footer from '../components/Footer'
import MainNavbar  from "../components/MainNavbar"
import Cards from './Cards'
// import Allbuttons from '../components/All buttons'
import { BsSearch } from "react-icons/bs";
// import Allbuttons from '../components/All buttons'


const Home = () => {

 
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [Apidata, setApidata] = useState([]);
    const [filtercategory, setFiltercategory] = useState(data)
    const [selectedCat, setSelectedCat] = useState("All")
    const [filterData, setFilterData] = useState([])



const getMyPostData =()=>{
  fetch('https://fakestoreapi.com/products')
            .then(response=>response.json())
            .then(json=>{
              setApidata(json)
              setFilterData(json)
              setData(json)})
    
            
}

 const handleSearch =(value)=>{
setSearchValue(value)
if(!value){
  setData(Apidata)
}
else{
  const filterData = Apidata.filter(text=> text.title.toLowerCase().includes(value.toLowerCase()))
  setData(filterData)
  console.log(Apidata);
}
console.log(searchValue)
 }


      const filterProduct = ()=>{
        if(selectedCat == "All"){
          setFilterData(data)
          return
        }
  const updatedList = data.filter((x)=> x.category == selectedCat)
setFilterData(updatedList)
}

useEffect(() => {
 filterProduct()
}, [selectedCat])

useEffect(() => {
  getMyPostData()

}, []);
console.log(data,"y");
console.log(Apidata,"new");

  return (
    <div>
      <MainNavbar  SearchTab login heart product/>
      <div>
        <div className='home-container1'>
        <div className='home-mainhaeding'>
         <div className='home-head-h2'> <h2>Welcome, buy all essentials at one place . </h2> 
         <h3> i am a new customer here</h3> </div>
         </div>
         <div className='home-Corousel2'><Corousel2/></div> 
        </div>
      </div>
      <div className='home-container2'>    
          <img className='home-main-img' src="/assets/Ecommerce pic 1.jpg" alt=""/>
          <div className='home-container2-heading'>    <h3 className="heading"> Min. 40% discount<br/> Available on prestigious brands</h3>
          <hr/></div>
    
       </div>

      <Corousel1/>
      <div className='card-BestDeal'>
        <h2 className='card-BestDeal-head'> Best Deals Available on fashion & beauty</h2>
        <hr/></div>
         
       <div className='Category-button1'>
          <div className='Category-button2'>

            {/* <Allbuttons/> */}
        <botton className={`${selectedCat == "All" ? "Category-button-all-selected" : "Category-button-all" }`}  onClick={()=> setSelectedCat("All")} > All</botton>
          <botton className={`${selectedCat == "men's clothing" ? "Category-button-all-selected" : "Category-button-all" }`} onClick={()=>setSelectedCat("men's clothing")}> Men's clothes</botton>
          <botton className={`${selectedCat == "women's clothing" ? "Category-button-all-selected" : "Category-button-all" }`} onClick={()=>setSelectedCat("women's clothing")}> Women's clothes</botton>
          <botton className={`${selectedCat == "jewelery" ? "Category-button-all-selected" : "Category-button-all" }`} onClick={()=>setSelectedCat("jewelery")}> Jewellery</botton>
          <botton className={`${selectedCat == "electronics" ? "Category-button-all-selected" : "Category-button-all" }`} onClick={()=>setSelectedCat("electronics")}> Electronics</botton>
        </div>
        </div>
        <div
                  style={{
                    marginRight: "20px",
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <input
                  style={{color:"black"}}
                    placeholder="Search here"
                    className="searchbar"
                    onChange={(e)=>handleSearch(e.target.value)}
                  />
                  <BsSearch className="searchIcon" onClick={(e)=>handleSearch(e)}> </BsSearch>{" "}
                </div>
   <div className="list"> 
  
   {filterData?.map((post)=>{
      return(
        <Cards
        key={post.id}
        Heading={post.title}
        Price={post.price}
        Description={post.description}
        Img={post.image}
        Category={post.category}
        Rating={post.rating}
       
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
 export default Home;
