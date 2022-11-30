import userIcon from '../../assets/images/user_icon.png';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TextsmsIcon from '@mui/icons-material/Textsms';
import ShareIcon from '@mui/icons-material/Share';
import { postModel } from '../../helper/model/postModel';
import Comments from '../comments/Comments';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Posts = () => {

    const [isCommentSectionOpen, setIsCommentSectionOpen] = useState(false);

    const toggleCommentSection = () => {
        setIsCommentSectionOpen(!isCommentSectionOpen)
    }

    return(
        postModel.map((post) =>
            <div className="posts" key={post.id}>
                <div className="post-item">
                    <div className='upper'>
                        <div className="left">
                            <img src={userIcon}/>
                            <div className='user-info'>
                                <Link 
                                    to={`/profile/${post.userId}`}
                                >
                                    <span>{post.name}</span>
                                </Link>
                                <span>a few seconds ago</span>
                            </div>
                        </div>
                        <div className="right">
                            <MoreHorizIcon />
                        </div>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatem quis voluptate eaque. Quasi laboriosam hic consectetur ipsa, voluptatum doloribus placeat sint laborum, sed suscipit dicta in error quod dolorem!
                    </p>
                    <img src={post.img}/>
                    <div className='interaction'>
                        <div className="item">
                            <FavoriteBorderIcon />
                            <span>12 Likes</span>
                        </div>
                        <div 
                            className="item"
                            onClick={toggleCommentSection}
                        >
                            <TextsmsIcon />
                            <span>12 Comments</span>    
                        </div>
                        <div className="item">
                            <ShareIcon />
                            <span>12 Share</span>
                        </div>
                    </div>
                    {
                        isCommentSectionOpen && <Comments /> 
                    }
                    
                </div>
            </div>
        )
        
    )
}

export default Posts;