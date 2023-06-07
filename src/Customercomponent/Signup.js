import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import MainNavbar from "../components/MainNavbar";


const Signup = () => {
  const [Name, setName] = useState()
  const [Password, setPassword] = useState()
  const [ConfirmPwd, setConfirmPwd] = useState()
  const [Email, setEmail] = useState()
  const[Error,setError]= useState(false)

  const navigate= useNavigate()


 const HandleClick=(e)=>{

   e.preventDefault()
  if(Name && Password && ConfirmPwd && Email){
     const email = localStorage.getItem(Email)
     if(email ){
      toast.warn(" This Email is already registered. ")
      return
     }
    if(Password!==ConfirmPwd) {
      toast.warn("Password and confirm password do not match. Please try again." );
      return
    }
  
  else{
    localStorage.setItem((Email) ,(Password));
    navigate("/login")
    toast.success("You are successfully registered.")
    setName("")
  setPassword("")
  setConfirmPwd("")
   setEmail("")

  }
  }
  
 }
  
  return (
    <div>
      <MainNavbar />
  
    <section className="Signup-form">
    <div style={{height:"5vh" }}></div>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius: "25px"}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form className="mx-1 mx-md-4">
                  <div className="d-flex flex-row align-items-center mb-4">
                    
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" for="form3Example1c">Your Name</label>
                      <input type="text" value={Name} onChange={(e)=>setName(e.target.value)} id="form3Example1c" className="form-control" />
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" for="form3Example3c">Your Email</label>
                      <input type="email" value={Email} onChange={(e)=>setEmail(e.target.value)} id="form3Example3c" className="form-control" />
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" for="form3Example4c">Password</label>
                      <input type="password" value={Password} onChange={(e)=>setPassword(e.target.value)} id="form3Example4c" className="form-control" />
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" for="form3Example4cd">Confirm password</label>
                      <input type="password" value={ConfirmPwd} onChange={(e)=>setConfirmPwd(e.target.value)} id="form3Example4cd" className="form-control" />
                    </div>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label className="form-check-label" for="form2Example3">
                      I agree all statements in<a href="#!">Terms of service</a> 
                    </label>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" className="btn btn-primary btn-lg" onClick={HandleClick}>Register</button>
                    <ToastContainer />
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="Sample "/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default Signup;
