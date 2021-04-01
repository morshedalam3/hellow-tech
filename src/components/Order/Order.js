import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [order, setOrder] = useState([])
    useEffect(() => {
        fetch('https://protected-beach-00185.herokuapp.com/orderedProduct?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrder(data))

    }, [])

    const totalPrice = order.reduce((sum, currentValue) => sum + parseFloat(currentValue.products.price), 0);

    return (
        <div className="row">
            <div className="col-md-4 p-5 bg-light">
                <h1>Customer Information</h1>
                <h3>Total Order:{order.length}</h3>
                <h4>Name:{loggedInUser.name}</h4>
                <h4>Email:{loggedInUser.email}</h4>
            </div>

            <div className="justify-content-center mt-4 p-5 col-md-6">
                <h4 className="text-center">Order List</h4> <span>Order Time:{order.orderTime}</span>

                <table class="table table-striped p-5">
                    <thead>
                        <tr>
                            <th scope="col">Product Name</th>
                            <th scope="col">Brand</th>
                            <th scope="col">Price</th>

                        </tr>

                    </thead>
                    <tbody>
                        {
                            order.map(pd => <tr>
                                <td scope="row">{pd.products.name}</td>
                                <td>{pd.products.brand}</td>
                                <td>${pd.products.price}</td>

                            </tr>)
                        }
                        <tr>
                            <td colspan="2">Total</td>
                            <td>${totalPrice}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Order;