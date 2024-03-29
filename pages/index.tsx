import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { Toaster } from 'react-hot-toast'
import Feed from '../Components/Feed'
import Sidebar from '../Components/Sidebar'
import Widgets from '../Components/Widgets'
import { Tweet } from '../typing'
import { fetchTweets } from '../utils/fetchTweets'

interface Props {
  tweets:Tweet[]
}

const Home = ({tweets}:Props) => {

  console.log(tweets)

  return (
    <div className='mx-auto lg:max-w-6xl max-h-screen overflow-hidden'>
      <Head>
        <title>Twitter Clone Project</title>
        <meta name="description" content="A Twitter Clone Built with the help of NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Toaster/>

      <main className='grid grid-cols-9'>
        <Sidebar/>

        <Feed tweets={tweets}/>

        <Widgets/>
      </main>

    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async(context) =>{
  const tweets = await fetchTweets();

  return {
    props:{
      tweets,
    }
  }
}
