import React from 'react'
import Layout from '@/Components/Layout'
import { useState, useEffect } from 'react';
import { getProducts } from './services/axios.services';
import axios from 'axios'

const orders = () => {
    const [orders, setOrders] = useState([]);
    const getOrders = async ()=> {
        const response = await axios.get('/api/orders')
        setOrders(response.data);
    }
    useEffect(() => {
        getOrders();
    }, []);
    
  return (
    <Layout>
        <h1>ORDERS</h1>
        <table>
            <thead>
                <tr>
                    <td>Order name</td>
                    <td>Order price</td>
                    <td>Order price</td>

                </tr>
            </thead>
        </table>
    </Layout>
  )
}

export default orders