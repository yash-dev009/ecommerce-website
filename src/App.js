import { BrowserRouter,Route,Routes } from 'react-router-dom';
import About from './Pages/About';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// import Home from './Pages/Home';
import Contact from "./Pages/Contact"
import Product from "./Pages/Product"
import Login from './Customercomponent/Login';
import Signup from './Customercomponent/Signup';
import ForgotPassword from './Customercomponent/ForgotPassword';
import Cart from './Pages/cart';
import ProductDetail from './Pages/ProductDetail' 
import { useSelector } from 'react-redux';
import Additems from './Pages/Additem/Additems';
import Home from './Pages/Home';

function App() {

const store = useSelector(state => state)

console.log(store,"store");

  return (
    
      <BrowserRouter>
      <ToastContainer/>
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
        <Route exact path="/additem" element={<Additems/>}/>
        <Route exact path="/productdetail/:productId" element={<ProductDetail/>}/>
      </Routes>
      </BrowserRouter>

  );
}

export default App;
