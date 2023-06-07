import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsCartPlus,BsSearch } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";






const MainNavbar = ({ SearchTab, login , heart ,onSearch }) => {
  const navigate = useNavigate();
  
  const handleChange =(e)=>{
 const query = e.target.value
   onSearch(query)
  }
  return (
    <div>
      <Navbar expand="lg">
        <Container>
         
                      <Navbar.Brand
            style={{ color: "black", fontSize: "1.6rem",fontWeight:"500" }}
            onClick={() => navigate("/home")}
          >
            Dream shopping
          </Navbar.Brand>

          <div className="nav-main-container">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                style={{ color: "white" }}
                onClick={() => navigate("/home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                style={{ color: "white" }}
                onClick={() => navigate("/product")}
              >
                Products
              </Nav.Link>
              <Nav.Link
                style={{ color: "white" }}
                onClick={() => navigate("/contact")}
              >
                Contact
              </Nav.Link>

              <Nav.Link href="">
                {heart && <AiOutlineHeart color={'white'} size={'1.5em'}/>}
                </Nav.Link>


              {SearchTab && (
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
                    onChange={handleChange}
                  />
                  <BsSearch className="searchIcon"> </BsSearch>{" "}
                </div>
              )}

              {login && 
                <Button
                  variant="outline-success"
                  onClick={() => navigate("/Login")}
                  style={{ marginRight: "16px", width: "5rem" }}
                >
                  Login
                </Button>
              }
              <div className="cart">
                <Badge badgeContent={4} color="secondary">
                  <BsCartPlus
                    size={"2.3em"}
                    color={"white"}
                    style={{ right: "-10px" }}
                    onClick={()=>{navigate("/cart")}}/>
                </Badge>
              </div>
            </Nav>
          </Navbar.Collapse>
          </div>

        </Container>
      </Navbar>

    
    </div>
  );
};

export default MainNavbar;
