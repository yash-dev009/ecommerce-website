import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainNavbar from "../components/MainNavbar";

function Login () {
  const [Email, setEmail] = useState()
  const[ Password ,setPassword]= useState()
 const navigate= useNavigate()

  return (
    <div>
      <MainNavbar/>
      <section className="vh-80 vw-80">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid"
                alt="Phone"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form>
                <div className="form-outline mb-4">
                <label className="form-label" for="form1Example13">
                    Email address
                  </label>
                  <input
                    type="email"
                    value={Email}
                    onChange={(e)=>setEmail(e.target.value)}
                    id="form1Example13"
                    className="form-control form-control-lg"
                  />
                  
                </div>

                <div className="form-outline mb-4">
                <label className="form-label" for="form1Example23">
                    Password
                  </label>
                  <input
                  value={Password}
                  onChange={(e)=>setPassword(e.target.value)}
                    type="password"
                    id="form1Example23"
                    className="form-control form-control-lg"
                  />
                 
                </div>

                <div className="d-flex justify-content-around align-items-center mb-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                      
                    />
                    <label className="form-check-label" for="form1Example3">
                      {" "}
                      Remember me{" "}
                    </label>
                  </div>
                  <a style={{cursor:"pointer", }} onClick={()=>navigate("/ForgotPassword")}>Forgot password?</a>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block">
                  Sign in
                </button>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                </div>
                <p style={{cursor:"pointer", }} onClick={()=>navigate("/signup")}> New User ? <a >Click Here!</a>  </p>

                <a
                  className="btn btn-primary btn-lg btn-block"
                  style={{ border :"transparent",backgroundColor: "#3b5998"}}
          
                  role="button">
                <i className="fab fa-facebook-f me-2"></i>Continue with Google
               
                </a>
                <br/>
                <br/>
                <a
                  className="btn btn-primary btn-lg btn-block"
                  style={{border :"transparent", backgroundColor: "red"}}
                 
                  role="button"
                >
                  <i className="fab fa-twitter me-2"></i>Continue with Email
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
