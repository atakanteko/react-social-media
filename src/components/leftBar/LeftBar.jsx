import { 
    mainContent, 
    yourShortcuts,
    others
 } from "../../helper/leftBarModel";
import UserIcon from '../../assets/images/user_icon.png'
import Menu from "./Menu";

const LeftBar = () => {
    return(
        <div className="leftBar">
            <div className="container">
                <div className="menu">
                    <div className="user">
                        <img src={UserIcon} alt="user" />
                        <span>Agah Fikret </span>
                    </div>
                    <Menu content={mainContent}/>
                </div>
                <hr />
                <div className="menu">
                    <span>Your shortcuts</span>
                    <Menu content={yourShortcuts}/>
                </div>
                <hr />
                <div className="menu">
                    <span>Others</span>
                    <Menu content={others}/>
                </div>
            </div>
        </div>
    )
}

export default LeftBar;