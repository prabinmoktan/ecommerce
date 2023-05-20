import Layout from '@/Components/Layout'
import Link from 'next/link'
// import  {useState, useEffect} from 'react'

const Products = () => {
    // const [products, setProducts] = useState([]);
    // useEffect = (() => {
        // const response = getproducts();
        // setProducts(response.data);
    // },[])
    
  return (
    <Layout>
        <Link href='/products/new'>Add new</Link>
            <table className = 'bg-blue-500 -5'>
                <thead > 
                    <tr >
                        <td>Product Name</td>
                        <td>Product Price</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        // products && products.map ((product)=> {
                        //     return 
                        //     <tr key= {product._id}>
                        //         <td>{product.title}</td>
                        //         <td>{product.price}</td>
                        //     </tr>
                        // })
                    }
                </tbody>
            </table>
     

    </Layout>
  )
}

export default Products