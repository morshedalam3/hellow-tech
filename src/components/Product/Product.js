import React from 'react';
import { useHistory } from 'react-router-dom';

const Product = ({product}) => {
    const history = useHistory()
    const handleBuy = (_id) => {
        history.push(`/checkout/${_id}`);
    }
    return (
        <div className=" col-md-3 ms-3 my-3">
        <img style={{height: '300px', width: '400px'}} className="img-fluid" src={product.imageUrl} alt=""/>
        <h3 className="text-center">{product.name} <br/>
        <span className="ms-3">${product.price}</span> <button className="btn btn-success" onClick={() => handleBuy(product._id)}>Buy Now</button></h3>  
    </div>
    );
};

export default Product;