import UserIcon from '../../assets/images/user_icon.png'

const RightBar = () => {
    return(
        <div className="rightBar">
            <div className="container">
                <div className="item">
                    <span>Suggestions For You</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src={UserIcon} alt="userIcon" />
                            <span>Ece Ayhan</span>
                        </div>
                        <div className="buttons">
                            <button type='button'>
                                follow
                            </button>
                            <button type='button'>
                                dismiss
                            </button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={UserIcon} alt="userIcon" />
                            <span>Ece Ayhan</span>
                        </div>
                        <div className="buttons">
                            <button type='button'>
                                follow
                            </button>
                            <button type='button'>
                                dismiss
                            </button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <span>Latest Activities</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src={UserIcon} alt="userIcon" />
                            <p>
                                <span>Ece Ayhan</span> changed their cover picture
                            </p>
                        </div>
                       <span>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={UserIcon} alt="userIcon" />
                            <p>
                                <span>Ece Ayhan</span> changed their cover picture
                            </p>
                        </div>
                       <span>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={UserIcon} alt="userIcon" />
                            <p>
                                <span>Ece Ayhan</span> changed their cover picture
                            </p>
                        </div>
                       <span>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={UserIcon} alt="userIcon" />
                            <p>
                                <span>Ece Ayhan</span> changed their cover picture
                            </p>
                        </div>
                       <span>1 min ago</span>
                    </div>
                </div>
                <div className="item">
                    <span>Online Friends</span>
                    <div className="user">
                        <div className="userInfo online">
                            <div className="img-container">
                                <img src={UserIcon} alt="userIcon" />
                            </div>
                            <span>Ece Ayhan</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo online">
                            <div className="img-container">
                                <img src={UserIcon} alt="userIcon" />
                            </div>
                            <span>Ece Ayhan</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo online">
                            <div className="img-container">
                                <img src={UserIcon} alt="userIcon" />
                            </div>
                            <span>Ece Ayhan</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo online">
                            <div className="img-container">
                                <img src={UserIcon} alt="userIcon" />
                            </div>
                            <span>Ece Ayhan</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo online">
                            <div className="img-container">
                                <img src={UserIcon} alt="userIcon" />
                            </div>
                            <span>Ece Ayhan</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo online">
                            <div className="img-container">
                                <img src={UserIcon} alt="userIcon" />
                            </div>
                            <span>Ece Ayhan</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo online">
                            <div className="img-container">
                                <img src={UserIcon} alt="userIcon" />
                            </div>
                            <span>Ece Ayhan</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightBar;