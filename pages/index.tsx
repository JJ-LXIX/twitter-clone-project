import type { NextPage } from 'next'
import Head from 'next/head'
import Feed from '../Components/Feed'
import Sidebar from '../Components/Sidebar'
import Widgets from '../Components/Widgets'


const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Twitter Clone Project</title>
        <meta name="description" content="A Twitter Clone Built with the help of NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <Sidebar/>

        <Feed/>

        <Widgets/>


      </main>

      </div>
  )
}

export default Home
