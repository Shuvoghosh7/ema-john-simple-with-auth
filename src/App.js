import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Header from './Component/Header/Header';
import Inventory from './Component/Inventory/Inventory';
import Login from './Component/Login/Login';
import Orders from './Component/Orders/Orders';
import RequireAuth from './Component/RequireAuth/RequireAuth';
import Shipment from './Component/Shipment/Shipment';
import Shop from './Component/Shop/Shop';

import SignUp from './Component/SingUp/SingUp';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/orders' element={<Orders/>}></Route>
        
        <Route path='/inventory' element={
        <RequireAuth>
            <Inventory/>
        </RequireAuth>
        }></Route>
        <Route path='/shipment' element={
          <RequireAuth>
            <Shipment/>
          </RequireAuth>
        }>Shipment</Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/singup' element={<SignUp/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
