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
    <Layout >
        <button className='bg-green-500 rounded-lg p-2 mx-20 my-10'><Link href='/products/new' className='mx-auto'>Add new</Link></button>
            <table className = 'bg-blue-500 -5 w-3/6 mx-20 my-20 p-4'>
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