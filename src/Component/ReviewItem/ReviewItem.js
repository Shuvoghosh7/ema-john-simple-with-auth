import React from 'react';

const ReviewItem = ({product}) => {
    const{name,price,shipping,quantity}=product
    return (
        <div>
            <h1>Review item:{name}</h1>
        </div>
    );
};

export default ReviewItem;