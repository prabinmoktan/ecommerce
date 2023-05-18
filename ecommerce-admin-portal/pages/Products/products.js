import Layout from '@/Components/Layout'
import React, {useState, useEffect} from 'react'

const products = () => {
    const [products, setProducts] = useState([]);
    useEffect = (() => {
        const response = getproducts();
        setProducts(response.data);
    },[])
    
  return (
    <Layout>
        <Link>
            <table className = 'bg-blue-500'>
                <thead> 
                    <tr>
                        <td>Product Name</td>
                        <td>Product Price</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        products && products.map ((product)=> {
                            return 
                            <tr key= {product._id}>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </Link>

    </Layout>
  )
}

export default products