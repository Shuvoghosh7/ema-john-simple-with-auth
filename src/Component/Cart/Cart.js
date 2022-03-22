import React from 'react';

const Cart = ({cart}) => {
  
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Selected Items:{cart.length}</p>
            <p>Total Price:</p>
            <p>Total Shipping Charge:</p>
            <p>Tax:</p>
            <h4>Grand Total:</h4>
        </div>
    );
};

export default Cart;