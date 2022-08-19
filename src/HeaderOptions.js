import React from 'react'
import './HeaderOption.css'
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function HeaderOptions({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);



  return (
    <div>
      <div onClick={onClick} className="HeaderOption">
        {Icon && <Icon className="headerOption__icon" />}
        {avatar && <Avatar className="headerOption__icon" src={user?.photoUrl} >{user?.email[0].toUpperCase()}</Avatar>}
        <h4 className='headerOption__title'>{title}</h4>
      </div>

    </div>
  )
}

export default HeaderOptions