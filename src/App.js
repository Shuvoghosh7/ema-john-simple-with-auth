import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import Inventory from './Component/Inventory/Inventory';
import Orders from './Component/Orders/Orders';
import Shop from './Component/Shop/Shop';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/orders' element={<Orders/>}></Route>
        <Route path='/inventory' element={<Inventory/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
