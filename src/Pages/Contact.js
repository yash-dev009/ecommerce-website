
import React from 'react';
import { Button } from 'react-bootstrap';
import MainNavbar from '../components/MainNavbar';

export default function Contact() {
  return (

<div>

<section className="vh-80 vw-80">
<MainNavbar  />
  <div className="container py-5 h-100">
    <div className="row d-flex align-items-center justify-content-center h-100">
      <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form>
          <h2 style={{textAlign:"center"}}>Contact Us</h2>
          <div className="form-outline mb-4">
          <label className="form-label" for="form1Example13">
              Name :
            </label>
            <input
              type="text"
              id="form1Example13"
              className="form-control form-control-lg"
            />
            
          </div>
          <div className="form-outline mb-4">
          <label className="form-label" for="form1Example13">
              Email address :
            </label>
            <input
              type="email"
              id="form1Example13"
              className="form-control form-control-lg"
            />
            
          </div>

          <div className="form-outline mb-4">
          <label className="form-label" for="form1Example23">
             Suggested Feedback :
            </label>
            <input
              type="textarea"
              placeholder='Type Here'
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
                Send me a copy.{" "}
              </label>
            </div>
          
          </div>

          <Button
            type="submit"
            className="btn btn-primary btn-lg btn-block">
            Submit
          </Button>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
          </div>
          

          <a
            className="btn btn-primary btn-lg btn-block"
            style={{backgroundColor: "#3b5998"}}
            href=""
            role="button">
          <i className="fab fa-facebook-f me-2"></i>Contact with
            Facebook
          </a>
          <br/>
          <br/>
          <a
            className="btn btn-primary btn-lg btn-block"
            style={{backgroundColor: "#55acee"}}
            href=""
            role="button"
          >
            <i className="fab fa-twitter me-2"></i>Contact with Twitter
          </a>
        </form>
      </div>
    </div>
  </div>
</section>
</div>
  );
}