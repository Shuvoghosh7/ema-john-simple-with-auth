import React from 'react';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProduct';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';


const Orders = () => {
    const[product,setProduct]=useProducts()
    const [cart,setCart]=useCart(product)
    return (
      <div className="shop-container">
          <div className="review-item-container">
              {
                  cart.map(product => <ReviewItem
                  key={product.id}
                  product={product}
                  />)
              }

          </div>
          <div className="cart-contaoiner">
              <Cart cart={cart}/>
          </div>
      </div>
    );
};

export default Orders;