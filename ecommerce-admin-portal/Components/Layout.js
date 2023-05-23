import React from 'react'
import Nav from './Nav'
// import NewProducts from '@/pages/Products/new'
import { signIn, useSession } from 'next-auth/react'
import Loader from './loader';
// import products  from '@/pages/Products/products'


const Layout = ({children}) => {
  const {data: session, status}= useSession();
  const signInHandler=(e)=> {
    e.preventDefault();
    // console.log(first)
    signIn('google');

  }
  if (status === 'loading'){
    return (
    <Loader/>
    )
  }
  if (!session){
    return (
      <div className='bg-green-700'>
        <button className='bg-black text-white' onClick={(event)=> signInHandler(event)}>
          Sign in
        </button>
      </div>
    )}
    return(
      <>
        <div className= 'h-full'>

        <div  className= 'flex '>
          <Nav />
          <div className= 'flex-grow'>
            {children}
          </div>
          
        </div>
        </div>
      </>
    )
  }
  
  

export default Layout