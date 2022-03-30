import React from 'react';
import useProducts from '../../Hooks/useProduct';




const Orders = () => {
    const[product,setProduct]=useProducts()
    return (
        <div>
            <h1>Order Now:{product.length}</h1>
        </div>
    );
};

export default Orders;