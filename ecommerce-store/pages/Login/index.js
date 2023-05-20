import React from 'react'

const Login = () => {
  return (
    <>
        <Form>
            <Input type= 'text' placeholder='Email'/>
            <Input type= 'password' placeholder='Password' required/>

            <Button classname='bg-dark'>Login</Button>
            <span>Dont Have an account. <a href='./register'>Sign up?</a></span>
        </Form>
    </>
  )
}

export default Login