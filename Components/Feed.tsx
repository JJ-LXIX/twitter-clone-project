import { RefreshIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import { Tweet } from '../typing'
import TweetBox from './TweetBox'
import TweetComponent from '../Components/Tweet';
import { fetchTweets } from '../utils/fetchTweets';
import toast from 'react-hot-toast';
interface Props {
  tweets : Tweet[]
}

const Feed = ({tweets :tweetsProp}:Props) => {
  const [ tweets, setTweets] = useState<Tweet[]>(tweetsProp)
  console.log(tweets);

  const handleRefresh = async () => {
    const refreshToast = toast.loading("Refreshing...")

    const tweets = await fetchTweets();
    setTweets(tweets);

    toast.success("Feed Updated!",{
      id:refreshToast,
    })
  }

  return (
    <div className='col-span-7 border-x lg:col-span-5'>
        <div className='flex items-center justify-between'>
            <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
            <RefreshIcon onClick={handleRefresh} className="mr-5 mt-5 h-8 w-8 cursor-pointer text-twitter__blue  transition-all duration-500 ease-out 
            hover:-rotate-180 active:scale-75"/>
        </div>

        {/* TweetBox */}
        <div><TweetBox/></div>

        {/* Tweet Feed */}
        {tweets.map(tweet=>(
          <TweetComponent key={tweet._id} tweet={tweet}/>
        ))}
        
    </div>
  )
}

export default Feed