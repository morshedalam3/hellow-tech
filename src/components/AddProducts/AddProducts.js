import axios from 'axios';
import React, { useState } from 'react';
import { Col, Form } from 'react-bootstrap';
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
        const url = `https://protected-beach-00185.herokuapp.com/addProducts`

        console.log(productData);

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => console.log('server site response', res))
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
        <div className="container col-md-6">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Form>
                    <Form.Row>
                        <Col>
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control name="name" placeholder="Product name" ref={register} />
                        </Col>
                        <Col>
                            <Form.Label>Brand Name</Form.Label>
                            <Form.Control name="brand" placeholder="Brand name" ref={register} />
                        </Col>
                    </Form.Row>
                </Form>
                <Form>
                    <Form.Row>
                        <Col>
                            <br /><br /><Form.Label>Product Price</Form.Label>
                            <Form.Control name="price" placeholder="Enter price" ref={register} />
                        </Col>
                        <Col>
                            <br /><br /><br /> <input className="file btn btn-lg primary" name="file" type="file" onChange={handleImageUpload} />
                        </Col>
                    </Form.Row>
                </Form>
                <br />
                <input className="btn btn-success" type="submit" />
            </form>

        </div>
    );
};

export default AddProducts;