import React from 'react'
import { Tweet } from '../typing'

interface Props {
    tweet : Tweet;
}

const Tweet = ({tweet}: Props) => {
  return (
    <div>Tweet</div>
  )
}

export default Tweet