import Image from 'next/image'
import React, { useState } from 'react'
import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from '@heroicons/react/outline'

const TweetBox = () => {

  const [input,setInput] = useState<string>('')

  return (
    <div className='flex space-x-2 p-5'>
      <div className='mt-4'><Image className="rounded-full  object-cover" src={"https://links.papareact.com/gll"} alt="No Profile Picture" width={56} height={56}/> </div>
        
        <div className='flex flex-1 items-center pl-2'>
          <form className='flex flex-1 flex-col'>
            <input onChange={(e)=> setInput(e.target.value)} value={input} className='h-24 w-full text-xl outline-none placeholder:text-xl' type="text" placeholder="What's Happening? "/>

            <div className='flex items-center'>
              <div className='flex space-x-2 flex-1 text-twitter__blue'>  
                <PhotographIcon className='h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150'/>
                <SearchCircleIcon className='h-5 w-5'/>
                <EmojiHappyIcon className='h-5 w-5'/>
                <CalendarIcon className='h-5 w-5'/>
                <LocationMarkerIcon className='h-5 w-5'/>      
              </div>

              <button disabled={!input} className='rounded-full bg-twitter__blue text-white px-5 py-2 font-bold disabled:opacity-40'>Tweet</button>
            </div>

          </form>
        </div>

    </div>
  )
}

export default TweetBox