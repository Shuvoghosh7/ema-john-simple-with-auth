import React from 'react';
import './Product.css'
const Product = (props) => {
    const{img,name,price,ratings,seller}=props.product
    console.log(props)
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h4 className='product-name'>{name}</h4>
            <h5>Price:${price}</h5>
            <p>Seller:{seller}</p>
            <p>Ratings:{ratings}</p>
        </div>
    );
};

export default Product;