import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://protected-beach-00185.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
        setLoading(false)
    }, [])
    return (
        <div>
            { isLoading ?
                <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden"></span>
                    </div>
                </div>
                :<div className="container">
                    <div className="row">
                    {
                        products.map(product => <Product product={product}></Product>)
                    }
                    </div>
                    
                </div>}

        </div>
    );
};

export default Home;