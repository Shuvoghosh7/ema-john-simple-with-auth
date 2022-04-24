import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/useProduct';
import { addToDb, getStoreCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useState([])
    const [countPages, setCountPages] = useState(0)
    useEffect(() => {
        fetch('http://localhost:5000/productCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count
                const pages = Math.ceil(count / 10);
                setCountPages(pages)
            })
    }, [])

    useEffect(() => {
        const storeCart = getStoreCart()
        const saveCart = []
        for (const id in storeCart) {
            const addedProduct = products.find(product => product._id === id)
            //check if addedproduct have then add in cart
            if (addedProduct) {
                const quentity = storeCart[id]
                addedProduct.quentity = quentity
                saveCart.push(addedProduct)
            }
        }
        setCart(saveCart)
    }, [products])

    const handelAddTocart = (selectedProduct) => {
        // console.log(product)
        let newCart = []
        const exists = cart.find(product => product._id === selectedProduct._id)
        if (!exists) {
            selectedProduct.quentity = 1
            newCart = [...cart, selectedProduct]
        }
        else {
            const rest = cart.filter(product => product._id !== selectedProduct._id)
            exists.quentity = exists.quentity + 1
            newCart = [...rest, exists]
        }

        setCart(newCart)
        addToDb(selectedProduct._id)
    }
    return (
        <div className='shop-container'>

            <div className="product-container">
                {
                    products.map(product => <Product
                        product={product}
                        key={product._id}
                        handelAddTocart={handelAddTocart}
                    />)
                }
                <div className='pagination'>
                    {
                        [...Array(countPages).keys()].map(number => <button>{number}</button>)
                    }
                </div>
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