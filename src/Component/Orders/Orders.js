import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProduct';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'


const Orders = () => {
    const [product, setProduct] = useProducts()
    const [cart, setCart] = useCart(product)
    const navigate = useNavigate();
    const handleRemoveProduct = product => {
        const rest = cart.filter(pd => pd._id !== product._id);
        setCart(rest);
        removeFromDb(product._id);
    }
    return (
        <div className="shop-container">
            <div className="review-items-container">
                {
                    cart.map(product => <ReviewItem
                        key={product._id}
                        product={product}
                        handleRemoveProduct={handleRemoveProduct}
                    />)
                }

            </div>
            <div className="cart-contaoiner">
                <Cart cart={cart}>
                    <button onClick={() => navigate('/shipment')}>Proceed Checkout </button>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;