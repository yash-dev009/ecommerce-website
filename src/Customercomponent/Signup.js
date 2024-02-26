import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

  import MainNavbar from "../components/MainNavbar";
import { useDispatch, useSelector } from "react-redux";
import { AddNewUser } from "../Redux/Action/ProductAction";
import { toast } from "react-toastify";



const Signup = () => {
  const  allUsers = useSelector((state) => state.registereduser)
 

  const [name, setName] = useState()
  const [password, setPassword] = useState()
  const [confirmPwd, setConfirmPwd] = useState()
  const [email, setEmail] = useState()

  const[error,setError]= useState(false)

  const navigate= useNavigate()
 const dispatch = useDispatch()

 console.log(allUsers,"allUsers");




 const HandleClick=(e)=>{
   e.preventDefault()


    //  const email = localStorage.getItem(email)

     const filtered = allUsers.find(k => k.email === email)
console.log(filtered,`filtered`);
    if (filtered){
      toast.error(" This email is already registered. ")
      return
      }
      if(!name && !password && !confirmPwd && !email) {
        toast.error("This feild is required to be filled. ")
        return
      }
    if(password!==confirmPwd) {
      toast.error("Password and confirm password do not match. Please try again." );
      return
    }
      
  
  else{
    
  dispatch(AddNewUser({name,email,password,user:`user`}))
  // localStorage.setItem((email) ,(Password));
    toast.success("You are successfully registered")
    navigate("/login")
   
  setName("")
  setPassword("")
  setConfirmPwd("")
  setEmail("")

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
                    <label className="form-label" for="form3Example1c">Your name</label>
                     <input type="text" value={name} onChange={(e)=>setName(e.target.value)} id="form3Example1c" className="form-control" />
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" for="form3Example3c">Your Email</label>
                      <input type="email" value={email}  onChange={(e)=>setEmail(e.target.value)} id="form3Example3c" className="form-control" />
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" for="form3Example4c">Password</label>
                      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} id="form3Example4c" className="form-control" />
                    </div>
                  </div>

                  {error ? <span style={{ color: "red" }}> * </span> : <div className="d-flex flex-row align-items-center mb-4">
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" for="form3Example4cd">Confirm password</label>
                      <input type="password" value={confirmPwd} onChange={(e)=>setConfirmPwd(e.target.value)} id="form3Example4cd" className="form-control" />
                    </div>
                  </div> }

                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label className="form-check-label" for="form2Example3">
                      I agree all statements in<a href="#!">Terms of service</a> 
                    </label>
                  </div>
                  <div><p style={{cursor:"pointer",color:"#0D6EFD",textAlign:`center`}} onClick={()=>navigate("/login")}>Click here, if you are already registered</p></div>



                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" className="btn btn-primary btn-lg" onClick={HandleClick}>Register</button>
                   
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
