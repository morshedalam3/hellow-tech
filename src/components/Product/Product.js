import React from 'react';
import { useHistory } from 'react-router-dom';

const Product = ({product}) => {
    const history = useHistory()
    const handleBuy = (_id) => {
        history.push(`/checkout/${_id}`);
    }
    return (
        <div className=" col-md-4">
        <img className="img-fluid" src={product.imageUrl} alt=""/>
        <h3 className="text-center">{product.name} <br/>
        <span style={{float: 'left', marginLeft:'20px'}}>${product.price}</span> <button style={{float:"right", marginRight:'20px'}} className=" btn btn-success" onClick={() => handleBuy(product._id)}>Buy Now</button></h3>  
    </div>
    );
};

export default Product;