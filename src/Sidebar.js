import { Avatar } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './sidebar.css';

function Sidebar() {

    const user = useSelector(selectUser)



    function recentItem(topic) {
        return (
            <div className="sidebar_reanItem">
                <span className="sidebar_hash">#</span>
                <p>{topic}</p>
            </div>
        );
    }
    return (
        <div className="sidebar">
            
            <div className="sidebar_top">
            <img src="https://i.pinimg.com/736x/bd/7c/02/bd7c023464c09a677651d5204b6dd6b6--black-and-white-cover-photos-facebook-twitter-header-black-and-white.jpg" />
            <Avatar src={user.photoUrl} className = "avatar_sidebar">{user.email[0]}</Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>

            </div>
        <div className="sidebar_stats">
            <div className = "sidebar_stat">
                <p>who viewed you</p>
                <p className="sidebar_statNum">
                    2,331
                </p>

            </div>
            <div className = "sidebar_stat">
            <p>Views on post</p>
                <p className="sidebar_statNum">
                    4,211
                </p>
                
            </div>
        </div>
        <div className="sidebar_botton">
            <p>Recent</p>
            {recentItem('react js')}
            {recentItem('node js')}
            {recentItem('softwareEngineer')}
            {recentItem('python')}
            {recentItem('developer')} 
        </div>
            
        </div>
    );
}

export default Sidebar
