import { Avatar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './sidebar.css';

function Sidebar() {
    const user = useSelector(selectUser);


    let recentItem = (topic)=>
        (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>)
    ;

  return (
    <>
     <div className="sidebar">
    <div className="sidebar__top">
     <img src='https://images.unsplash.com/photo-1554034483-04fda0d3507b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c29mdCUyMGNvbG9yfGVufDB8fDB8fA%3D%3D&w=1000&q=80' alt="" />
         <Avatar src={user.photoUrl}className='sidebar__avatar' >
            { user.email[0].toUpperCase() }
         </Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>
        
        <hr className='hr_top' />
        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">2,400</p>

            </div>
            <div className="sidebar__stat">
                <p>Views on Post</p>
                <p className="sidebar__statNumber">6,969</p>

            </div>
        </div>
        <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('Learning')}
        {recentItem('One-Million-dollar')}
        {recentItem('CEO2025')}
        {recentItem('Tigerbanglore')}
       

        </div>
    </div>
    </>
  )
}

export default Sidebar

