import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const { _id } = useParams();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    const product = products.find(pd => pd._id === _id);
    console.log(product)
    return (
       <div className="container">
           <h1 className="pt-5">Checkout</h1>
           { product?<table className="table mt-5">
  <thead>
    <tr>
      <th scope="col">Description</th>
      <th scope="col">Quantity</th>
      <th scope="col">Price</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{product.name}</td>
      <td>1</td>
        <td>{product.price}</td>
    </tr>
    <tr>
      <td colspan="2">Total</td>
      <td>{product.price}</td>
    </tr>
  </tbody>
</table>:''}
    <div>
    <button className="btn btn-success">Checkout</button>
    </div>

       </div>
    );
};

export default Checkout;