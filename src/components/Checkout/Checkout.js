import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';

const Checkout = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const { _id } = useParams();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://protected-beach-00185.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const product = products.find(pd => pd._id === _id);
    console.log(product)

    const handleOrder = () => {
        const orderDetails = {...loggedInUser, products: product, orderTime: new Date() }
        fetch('https://protected-beach-00185.herokuapp.com/adOrder', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('your order placed successfully')
            }
        })
    }
    
    return (
       <div className="container shadow-lg p-3 bg-body rounded">
           <h1 className="pt-5">Checkout</h1>
           { product?<table className="table mt-5 shadow-lg p-3 bg-body rounded">

  <thead>
    <tr>
      <th scope="col">Description</th>
      <th scope="col">Quantity</th>
      <th scope="col">Price</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span>Brand: {product.brand}</span> Name:{product.name}</td>
      <td>1</td>
        <td>{product.price}</td>
    </tr>
    <tr>
      <td colspan="2">Total</td>
      <td>{product.price}</td>
    </tr>
  </tbody>
</table>:<div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden"></span>
                    </div>
                </div>}
    <div>
    <button onClick={handleOrder} className="btn btn-success">Checkout</button>
    </div>

       </div>
    );
};

export default Checkout;