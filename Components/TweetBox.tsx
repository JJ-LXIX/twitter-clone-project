
import React, { useRef, useState } from 'react'
import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from '@heroicons/react/outline'
import { useSession } from 'next-auth/react'
import { Tweet, TweetBody } from '../typing'
import toast from 'react-hot-toast'
import { fetchTweets } from '../utils/fetchTweets'

interface Props{
  setTweets: React.Dispatch<React.SetStateAction<Tweet[]>>
}

const TweetBox = ({setTweets}:Props) => {

  const [input,setInput] = useState<string>('')
  const [image, setImage] = useState<string>('')
  const [imageBoxOpen, setImageBoxOpen] = useState<boolean>(false)

  const imageInputRef = useRef<HTMLInputElement>(null)

  const {data:session} = useSession()

  const addImageToTweet = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    if(!imageInputRef.current?.value) return;
    setImage(imageInputRef.current.value)
    imageInputRef.current.value = '';
    setImageBoxOpen(false);
  }

  const postTweet = async() => {
    const tweetInfo: TweetBody = {
      text: input,
      username: session?.user?.name || 'Unknown User',
      profileImg : session?.user?.image || 'https://links.papareact.com/gll',
      Image: image,
    }
    const result = await fetch(`/api/addTweet`,{
      body: JSON.stringify(tweetInfo),
      method : 'POST',
    })
    const json = await result.json();

    const newTweets = await fetchTweets();
    setTweets(newTweets)

    toast('Tweet Posted',{
      icon :'🗿'
    })
    return json;
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault()

    postTweet()

    setInput('')
    setImage('')
    setImageBoxOpen(false);
  }

  return (
    <div className='flex space-x-2 p-5'>
      <div className='mt-4'><img className="rounded-full  object-cover" src={session?.user?.image ||"https://links.papareact.com/gll"} alt="No Profile Picture" width={56} height={56}/> </div>
        
        <div className='flex flex-1 items-center pl-2'>
          <form className='flex flex-1 flex-col'>
            <input onChange={(e)=> setInput(e.target.value)} value={input} className='h-24 w-full text-xl outline-none placeholder:text-xl' type="text" placeholder="What's Happening? "/>

            <div className='flex items-center'>
              <div className='flex space-x-2 flex-1 text-twitter__blue'>  
                <PhotographIcon onClick={()=>setImageBoxOpen(!imageBoxOpen)} className='h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-125 active:scale-90'/>
                <SearchCircleIcon className='h-5 w-5'/>
                <EmojiHappyIcon className='h-5 w-5'/>
                <CalendarIcon className='h-5 w-5'/>
                <LocationMarkerIcon className='h-5 w-5'/>      
              </div>

              <button onClick={handleSubmit} disabled={!input || !session } className='rounded-full bg-twitter__blue text-white px-5 py-2 font-bold disabled:opacity-40'>Tweet</button>
            </div>

          {
            imageBoxOpen && (
              <form  className="rounded-lg mt-5 flex bg-twitter__blue py-2 px-4">
                <input ref={imageInputRef} className='flex-1 bg-transparent p-2 text-white outline-none placeholder:text-white ' type="text" placeholder="Enter Image URL ..."/>
                <button type='submit' onClick={addImageToTweet} className='font-bold text-white'>Add Image</button>
              </form>
            )
          }

          {image && <img className='mt-10  h-40 bg-slate-200/20 w-full  rounded-xl object-contain shadow-lg' src={image} alt="added image"/>}

          </form>
        </div>

    </div>
  )
}

export default TweetBox