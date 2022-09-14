import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import SupervisorAccountRoundedIcon from '@mui/icons-material/SupervisorAccountRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';


const Header = () => {
    return (
        <div className='header'>
            
            <div className="header__left">
                <img src='https://th.bing.com/th/id/OIP.PLeKSnhFM6BtTs_N1QVAFAHaHa?pid=ImgDet&rs=1' alt='LinkedinIcon' />
                
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>

    
            <div className="header__right">
                <HeaderOption Icon={HomeRoundedIcon} title='Home'/>
                <HeaderOption Icon={SupervisorAccountRoundedIcon} title='My Network' />
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
                <HeaderOption Icon={ChatIcon} title='Messaging' />
                <HeaderOption Icon={NotificationsIcon} title='Notifications' />
                <HeaderOption avatar='https://th.bing.com/th/id/OIP.pegfGc8sWHh2_RuwiuAknwHaHZ?pid=ImgDet&rs=1' title='me' />
            </div>
        </div>
    )
}

export default Header