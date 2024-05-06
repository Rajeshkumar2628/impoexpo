import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Home from './components/Home';
// import About from './components/About';
// import Nav from './components/Nav';
// import Order from './components/Order';
// import Service from './components/Service';
// import Product from './components/Product';
// import New from './components/New';
// import Offered from './components/Offered';
// import Signup from './components/Signup';
// import Login from './components/Login';
// import Profile from './components/Profile';
// import User from './components/User';
// import UserDetails from './components/UserDetails';
// import RequiredAuth from './components/RequiredAuth';
// import Auth from './components/Auth';
import Service1 from './components/Service1';
import Nav1 from './components/Nav1';
import Home1 from './components/Home1';
import About1 from './components/About1';
import TruckType from './components/TruckType';
import Contact from './components/Contact';
import Signup1 from './components/Signup1';
import Nomatch from './components/Nomatch';
import Log from './components/Log';
import User1 from './components/User1';


function App() {
  return(
   
 <div>

<Nav1/>
<Routes>
<Route path='/' element={<Home1/>}/>
<Route path='/about' element={<About1/>}/>
  <Route path='/service' element={<Service1/>}/>
  <Route path='/truck' element={<TruckType/>}/>
  <Route path='/user' element={<User1/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/signup' element={<Signup1/>}/>
  <Route path='/login' element={<Log/>}/>

  <Route path='*' element={<Nomatch/>}/>

</Routes>

 </div>



  // <Auth>
      // <Nav/>
  /* <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/order' element={<Order/>}/>
    <Route path='/service' element={<Service/>} />
    <Route path='/product' element={<Product />}>
      <Route path='new' element={<New />}/>
      <Route path='offered' element={<Offered />}/>
    </Route>
    <Route path='/user' element={<User/>}>
      <Route path=':userdetails' element={<UserDetails/>}/>
      </Route>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/profile' element={<Profile/>}/>
  </Routes> */
  // </Auth>
  );
} 

export default App;
