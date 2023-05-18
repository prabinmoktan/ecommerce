import Layout from '@/Components/Layout';
import { useSession, signIn, signOut } from 'next-auth/react';
// import Nav from '../Components/Nav'
import Nav from '@/Components/Nav'

export default function Component() {
    const { data: session} = useSession();
    return (
      
        <Layout>
          <div className = 'text-blue-900 justify-between' >
            <h2>Hi, <b>{session?.user?.email}</b></h2>
            <div>
              <img src={session?.user?.image}></img>
              <span>
                {session?.user?.email}
              </span>
            </div>
          </div>
        </Layout>
      
    )

}

