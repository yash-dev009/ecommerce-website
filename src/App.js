import { BrowserRouter,Route,Routes } from 'react-router-dom';
import About from './Pages/About';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './Container/Header';

import Home from './Pages/Home';
import Contact from "./Pages/Contact"
import Product from "./Pages/Product"
import Login from './Customercomponent/Login';
import Signup from './Customercomponent/Signup';
import ForgotPassword from './Customercomponent/ForgotPassword';
import Cart from './Pages/cart';
// import SingleProduct from './Pages/SingleProduct';

function App() {
  return (
    // <div>
    //   <Header/>
    // <h1>Hello</h1>
    // </div>
    
      <BrowserRouter>
      <Routes>
        <Route/>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
        <Route exact path="/ForgotPassword" element={<ForgotPassword/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/product" element={<Product/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
        {/* <Route exact path="/singleproduct/:id" element={<SingleProduct/>}/> */}
      </Routes>
      </BrowserRouter>

  );
}

export default App;
