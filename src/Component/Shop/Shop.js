import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/useProduct';
import { addToDb, getStoreCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Shop.css'

const Shop = () => {
    const[products,setProducts]=useProducts()
    const[cart,setCart]=useState([])
  /*   useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]) */
    useEffect(()=>{
        const storeCart=getStoreCart()
        const saveCart=[]
        for(const id in storeCart){
        const addedProduct=products.find(product => product.id === id) 
        //check if addedproduct have then add in cart
        if(addedProduct){
          const quentity = storeCart[id]
          addedProduct.quentity=quentity
          saveCart.push(addedProduct)
        }      
        }
        setCart(saveCart)
    },[products])

    const handelAddTocart =(selectedProduct)=>{
        // console.log(product)
        let newCart=[]
        const exists =cart.find(product => product.id === selectedProduct.id)
        if(!exists){
            selectedProduct.quentity=1
            newCart=[...cart,selectedProduct]
        }
        else{
            const rest =cart.filter(product => product.id !== selectedProduct.id)
            exists.quentity=exists.quentity+1
            newCart=[...rest,exists]
        }
        
        setCart(newCart)
        addToDb(selectedProduct.id)
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
            <Cart cart={cart}>
            <Link to="/orders">
                <button>Review Order </button>
            </Link>
            </Cart>
            </div>
        </div>
    );
};

export default Shop;