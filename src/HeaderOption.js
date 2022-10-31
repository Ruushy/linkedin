import { Avatar } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './HeaderOption.css'

function HeaderOption({ avatar , Icon , title , onClick}) {
    const user = useSelector(selectUser);
    return (
        <div onClick={onClick} className="header_option">
            {Icon && <Icon className="headeroption_icon"/>}
            {avatar && (
                <Avatar className='headeroption_icon'>{user && user.email[0]}</Avatar>
            )
            }
            <h3 className="headeroption_title">{title}</h3>
            
        </div>
    )
}

export default HeaderOption
