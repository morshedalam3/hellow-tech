import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [order, setOrder] = useState([])
    useEffect(() => {
        fetch('https://protected-beach-00185.herokuapp.com/orderedProduct?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setOrder(data))
      
    },[])
    const totalPrice = order.reduce((sum, country) => sum + country.products.price,0)
 
    return (
        <div className="row shadow-lg p-3 bg-body rounded">
            <div className="col-md-4 shadow-lg p-3 bg-body rounded pt-5">
                <h1>Customer Information</h1>
                <h3>Total Order:{order.length}</h3>
                <h4>Name:{loggedInUser.name}</h4>
                <h4>Email:{loggedInUser.email}</h4>
            </div>
           
             <div className="justify-content-center mt-4 col-md-6">
             <h4 className="justify-content-start">Order List</h4> <span>Order Time:{order.orderTime}</span>

             <table class="table table-striped">
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
                            <td>$ {parseFloat(pd.products.price)}</td>
                            
                        </tr>)
                    }
                     <tr>
                    <td colspan="2">Total</td>
                       <td>${totalPrice}</td>
                    </tr>
                </tbody>
            </table>


             {/* {
                 order.map(pd => <h1>{pd.products.name}</h1>)
             }
               */}
             </div>
            
        </div>
    );
};

export default Order;