import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'
const Product = ({product,handelAddTocart}) => {
    // const{product,handelAddTocart}=props
    const{img,name,price,ratings,seller}=product

    

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <h4 className='product-name'>{name}</h4>
            <p>Price:${price}</p>
            <p>Seller:{seller}</p>
            <p><small>Ratings:{ratings} stars</small></p>
            </div>
            <button onClick={()=>handelAddTocart(product)} className='btn-cart'>
                <p className='btn-text'>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;