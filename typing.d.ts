
export interface Tweet extends TweetBody{
    _id:string
    _createdAt:string
    _updatedAt:string
    _rev: string
    _type: 'tweet'
    blockTweet: boolean
}

export type TweetBody = {
    text: string
    username:string
    profileImg:string
    Image?:string
}

export type CommentBody = {
    comment: string
    tweetId: string
    profileImg: string
    username: string
}

export interface Comment extends CommentBody{
    _createdAt: string
    _id:string
    _rev: string
    _type: "comment"
    _updatedAt: string
    tweet:{
        _ref:string
        _type:"reference"
    }
}