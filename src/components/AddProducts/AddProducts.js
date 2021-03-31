import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddProducts = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageUrl, setImageUrl] = useState(null)
    const onSubmit = data => {
        const productData = {
            name: data.name,
            brand: data.brand,
            price: data.price,
            imageUrl: imageUrl
        }
        const url = `http://localhost:8080/addProducts`

        console.log(productData);
        
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then(res => console.log('server site response' ,res))
     };
 
    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '6bf0cd718179276f282785bb56c7be39');
        imageData.append('image', event.target.files[0])
     
        axios.post('https://api.imgbb.com/1/upload',
        imageData)
          .then(function (response) {
            setImageUrl(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });

    }
    return (
        <div>
             <form onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control" name="name" defaultValue="Enter name" ref={register} /> 
                <input className="form-control" name="brand" defaultValue="Enter brand" ref={register} /> 
                <input className="form-control" name="price" defaultValue="Enter price" ref={register} /> 
                <input className="form-control" name="upload Image" type="file" onChange={handleImageUpload}  /> <br/>
                <input type="submit"/>
            </form>
        </div>
    );
};

export default AddProducts;