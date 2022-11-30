import { commentsModel } from "../../helper/model/commentModel";
import userIcon from '../../assets/images/user_icon.png';

const Comments = () => {
    return(
        <div className="comments">
            <div className="write">
                <img src={userIcon} />
                <input type="text" placeholder="write a comment" />
                <button>Send</button>
            </div>
            {
                commentsModel.map((comment)=>(
                    <div className="comment" key={comment.id}>
                        <img src={comment.profilePicture}/>
                        <div className="info">
                            <span>{comment.name}</span>
                            <p>{comment.desc}</p>
                        </div>
                        <span className="date">
                            1 hour ago
                        </span>
                    </div>
                ))
            }
        </div>
    )
}

export default Comments;