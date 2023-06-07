// import React from 'react'
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import {BsCartPlus} from "react-icons/bs";
// import {BsSearch} from "react-icons/bs";
// import {AiOutlineHeart} from "react-icons/ai";
//  import {  useNavigate } from 'react-router-dom';



// const Header = ( {SearchTab} ,{HeartIcon}) => {
//  const navigate = useNavigate();
//   return (
//     <div>

//         <Navbar className='main-navbar' >
//           <Container fluid>
//             <Navbar.Brand href="#"style={{color:"white",fontSize:"1.3rem"}}  onClick={()=>navigate("/home")}>Dream shooping.in</Navbar.Brand>
//             <Navbar.Toggle aria-controls="navbarScroll" />
//             <Navbar.Collapse id="navbarScroll">
//               <Nav
//                 className="me-auto my-2 my-lg-0"
//                 style={{ maxHeight: '100px', gap:"20px",marginLeft:"20px" }}
//                 navbarScroll
//               >
//                 <Nav.Link 
//                  style={{color:"white"}} onClick={()=>navigate("/home")}
//                  >Home</Nav.Link>
//                   <Nav.Link 
//                  style={{color:"white"}} onClick={()=>navigate("/product")}
//                  >Products</Nav.Link>
//                 <Nav.Link style={{color:"white"}} onClick={()=>navigate("/contact")}>Contact</Nav.Link>
//                 <Nav.Link href="#" disabled style={{color:"white"}}>
//                   {HeartIcon && <AiOutlineHeart color={'white'} size={'1.5em'}/>}
//                 </Nav.Link>
//               </Nav>
//              {SearchTab && <div style={{marginRight:"20px"}}>
//                 <input type='Search' placeholder='Search here' style={{height
//                 :"45px",padding:"15px"}}/>
//                 <BsSearch style={{fontSize:"1.5em", backgroundColor:"#0D6EFD" , color:"white" ,height:"45px", marginBottom:"4px"}}
//                   >   </BsSearch>
//               </div>}
//                <br/>
//                <br/>
//                <div >
//               <Button variant="outline-success" onClick={()=>navigate("/Login")} style={{marginRight:"16px"}}   >Login</Button>
//               <BsCartPlus size={'2.3em'}
//               color={"white"} />
//               </div>
//             </Navbar.Collapse>
//           </Container>
//         </Navbar>
//     </div>
//   )
// }

// export default Header; 