import { Avatar} from '@mui/material'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';
import ShareIcon from '@mui/icons-material/Share';
import React , {forwardRef} from 'react'
import InputOption from './InputOption'
import './Post.css'

const Post = forwardRef(({name , description ,  messega , photourl }, ref) => {
  return (
    <div ref={ref} className="post">
        <div className="post_header"> 
            <Avatar src={photourl}>{name[0]}</Avatar>
        
        <div className="post_info">
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
        </div>
        <div className="post_body">
            <h2>{messega}</h2>
        </div>
        <div className="post_buttoms">
            <InputOption Icon={ThumbUpIcon} title="Like" color="gray" />
            <InputOption Icon={CommentIcon} title="comment" color="gray" />
            <InputOption Icon={ShareIcon} title="Share" color="gray" />
            <InputOption Icon={SendIcon} title="Send " color="gray" />
            
        </div>
    </div>
  )
}
)
export default Post