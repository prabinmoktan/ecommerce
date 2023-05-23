import Layout from "@/Components/Layout";
import axios from "axios";
import React, { useEffect, useState } from "react";
// import Input from 'react'

const NewProducts = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get('/api/categories').then((response)=> {
      setCategories(response.data);
    })
  }, []);
  


  

  return (
    <Layout>
      <form className=''>
         <div className='my-5 border-gray-500 ' >
            <label className='mx-4'>Product name</label>
            <input type="text" placeholder="Product name" className='border-gray-500 mx-5' />

         </div>


         <label>Category</label>
         <select className='mx-4'>
            <option value="">Electronics</option>
            <option value="">Uncategorized</option>
         </select>
          <br/>
        
           <label className="mx-4 my-14 ">Photos</label>
           
            <svg
                
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>

            <input type="file" className="hidden" />
        
        

        <div className="my-10 mx-10">
         <label>Product description</label>
         <input type="text" placeholder="Product description" className="mx-10" />
        </div>
        <div className="my-10 mx-10" >
          <label>Product price</label>
          <input type="text" placeholder="Product price" className="mx-10"/>
        </div>  


      </form>
    </Layout>
  );
  }


export default NewProducts;
