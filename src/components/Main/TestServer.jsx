import Axios from 'axios';
import React, { useEffect, useState } from 'react'

const TestServer = () => {

const [Products, setProducts] = useState([]);


useEffect(() => {
 
    Axios.get('/api/products').then (res =>setProducts(res.data))

}, []);
 
console.log(Products);

    return (
        <div>
            {
                Products.map(el=>
                    <div key={el._id}>
                        <p>{ el.productName }</p>
                    </div>
                    )
            }
        </div>
    )
}

export default TestServer
