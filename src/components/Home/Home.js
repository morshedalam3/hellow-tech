import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className="text-center row">
        {
            products.map(product =><Product product={product}></Product>)
        }
    </div>
    );
};

export default Home;