import React from 'react'
import { useNavigate } from 'react-router-dom'

const ForgotPassword = () => {
  const navigate=useNavigate();
  return (
    <div>
  
  <div className=" card-f-pwd" >
    <div className="card h4 text-white bg-primary">Password Reset</div>
    <div className="card-body px-5">
        <p className="card-text py-2">
            Enter your email address and we'll send you an email with instructions to reset your password.
        </p>
        <div className="form-outline">
            <label className="form-label fontfamily-cursive" for="typeEmail">Email input :</label>
            <input type="email" id="typeEmail" className="form-control my-3" />
        </div>
        <p className="btn btn-primary w-100">Reset password</p>
        <div className="d-flex justify-content-between mt-4">
            <a className="" href="#" onClick={()=>navigate("/login")}>Login</a>
            <a className="" href="#" onClick={()=>navigate("/signup")}>Register</a>
        </div>
    </div>
</div>
    </div>
  )
}

export default ForgotPassword