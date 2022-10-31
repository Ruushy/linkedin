import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import AddHomeIcon from '@mui/icons-material/AddHome';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import EditNotificationsIcon from '@mui/icons-material/EditNotifications';
import HeaderOption from './HeaderOption';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './Firebase';
// import { NotificationAdd } from '@mui/icons-material';


function Header() {
    
    const dispatch = useDispatch();

    const logoutApp = () => {
    dispatch(logout())
    auth.signOut();

    }

    return (
        <div className="header">
            
            <div className= "header_left">
                <img src="https://tatajinnovation.com/wp-content/uploads/2022/08/LinkedIn_icon_circle.svg.png "></img>
                <div className="header_search">
                    {/* search icon */}
                    <SearchIcon />

                    <input placeholder ="search" type="text">

                    </input>
                </div>

            </div>

            <div className= "header_right">
                <HeaderOption Icon={AddHomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title="my network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOption Icon={ChatIcon} title="Messages"/>
                <HeaderOption Icon={EditNotificationsIcon} title="Notifications"/>
                <HeaderOption avatar={true} title="me" 
                onClick={logoutApp}
                />

            </div>


        

            
        </div>
    )
}

export default Header
