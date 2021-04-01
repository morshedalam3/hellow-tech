import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit} from '@fortawesome/free-solid-svg-icons'

const ManageProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://protected-beach-00185.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const deleteEvent =(id, e)=> {
        fetch(`https://protected-beach-00185.herokuapp.com/deleteProduct/${id}`,{
            method: 'delete'
        })
        .then(res => res.json())
        .then(result =>{
         console.log(result)   
        })
    }
      
    return (
        <div className="row text-center">
            <table class="table table-dark table-striped col-md-7">
                <thead>
                    <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => <tr>
                            <td scope="row">{product.name}</td>
                            <td>{product.brand}</td>
                            <td>${product.price}</td>
                            <td><button class="btn btn-success"><FontAwesomeIcon icon={faEdit} /></button> <button onClick={() => deleteEvent(product._id)} className="btn btn-danger"><FontAwesomeIcon icon={faTrashAlt} /></button></td>
                        </tr>)
                    }
                </tbody>
            </table>

        </div>
    );
};

export default ManageProduct;