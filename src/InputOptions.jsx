import React from 'react'
// import  CreateIcon from '@mui/icons-material/Create'
// import ImageIcon from '@mui/icons-material/Image';
// import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
// import EventNoteIcon from '@mui/icons-material/EventNote'
// import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay'
import './InputOptions.css'

function InputOptions({Icon, color,title}) {
  return (<>
  
  <div className="inputOption">
              <Icon style={{color : color}} />
              <h4>{title}</h4>
            </div>

  </>)
}

export default InputOptions