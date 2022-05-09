import type { NextPage } from 'next'
import Head from 'next/head'
import Feed from '../Components/Feed'
import Sidebar from '../Components/Sidebar'
import Widgets from '../Components/Widgets'


const Home: NextPage = () => {
  return (
    <div className='mx-auto lg:max-w-6xl max-h-screen overflow-hidden'>
      <Head>
        <title>Twitter Clone Project</title>
        <meta name="description" content="A Twitter Clone Built with the help of NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='grid grid-cols-9'>

        <Sidebar/>

        <Feed/>

        <Widgets/>


      </main>

      </div>
  )
}

export default Home
