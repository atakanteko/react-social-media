import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import UserIcon from '../../assets/images/user_icon.png'
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
import { useContext } from 'react';

const Navbar = () => {
    const { toggle, darkMode } = useContext(DarkModeContext);

    return(
        <div className="navbar">
            <div className="left">
                <Link to="/" style={{textDecoration:'none'}}>
                    <span>socialapp</span>
                </Link>
                <HomeOutlinedIcon />
                {
                    darkMode 
                        ? <WbSunnyOutlinedIcon onClick={toggle} style={{cursor: 'pointer'}}/>
                        : <DarkModeOutlinedIcon onClick={toggle} style={{cursor: 'pointer'}}/>
                }
                
                <GridViewOutlinedIcon />
                <div className="search">
                    <SearchOutlinedIcon />
                    <input type="text" placeholder='Search...' />
                </div>
            </div>
            <div className="right">
                <PersonOutlineOutlinedIcon />
                <EmailOutlinedIcon />
                <NotificationsNoneOutlinedIcon />
                <div className="user">
                    <img src={UserIcon} alt="user" />
                    <span>Agah Fikret </span>
                </div>
            </div>
        </div>
    )
}

export default Navbar;