import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Shop.css'

const Shop = () => {
    const[products,setProducts]=useState([])
    const[cart,setCart]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const handelAddTocart =(product)=>{
        // console.log(product)
        const newCart=[...cart,product]
        setCart(newCart)
    }
    return (
        <div className='shop-container'>
           
            <div className="product-container">
             {
                products.map(product => <Product
                 product={product}
                 key={product.id}
                 handelAddTocart={handelAddTocart}
                >
                </Product>)    
             }
            </div>
            <div className="cart-contaoiner">
            <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;