import React, { useEffect } from 'react';
import Header from './Header.js';
import './App.css';
import Feed from './Feed.js';
import Sidebar from './Sidebar.js';
import { login, logout, selectUser } from './features/userSlice'
import Login from './Login.jsx';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { auth } from './firebase.js';
import  Widgets  from './Widgets.jsx';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) =>{
      if(userAuth) {
        //user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.id,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
    } else {
      //user is logged out
      dispatch(logout());
    }
    });

  }, []);
  


  return (<div className="app">
    <Header />
    { ! user ? ( <Login /> ) : (
    <div className="app__body">
      
       <Sidebar />
       <Feed />
       
      <Widgets  />
    </div>
    )}   
   
    </div>
  );
}

export default App;
