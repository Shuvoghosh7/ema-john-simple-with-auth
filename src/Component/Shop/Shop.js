import React, { useEffect, useState } from 'react';
import { addToDb, getStoreCart } from '../../utilities/fakedb';
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
   
    useEffect(()=>{
        const storeCart=getStoreCart()
        for(const id in storeCart){
            console.log(id)
        }
        /* const saveCart=[]
        for(const id in storeCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quentity=storeCart[id]
                addedProduct.quantity=quentity
                saveCart.push(addedProduct)
                console.log(addedProduct)
            }  
        }  
        setCart(saveCart)  */ 
    },[])

    const handelAddTocart =(product)=>{
        // console.log(product)
        const newCart=[...cart,product]
        setCart(newCart)
        addToDb(product.id)
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