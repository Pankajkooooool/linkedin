import React, { useState, useEffect } from 'react'
import './feed.css'
import CreateIcon from '@mui/icons-material/Create'
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import EventNoteIcon from '@mui/icons-material/EventNote'
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay'
import Post from './Post.js'
import { db } from "./firebase";
import firebase from 'firebase/compat/app';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import FlipMove from "react-flip-move";

function Feed() {
  
  const user = useSelector(selectUser);
  const [input, setinput] = useState("");
  const [posts, setposts] = useState([]);
  useEffect(() => {

    db.collection("posts")
    .orderBy("timestamp", "desc")
    .onSnapshot(snapshot =>
      setposts(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data(),
      }))
      )
    );

  }, []);


  const sendPost = e => {
    e.preventDefault();

    db.collection('posts').add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setinput('');
  };

  return (
    <>
      <div className="feed">
        <div className="feed__inputContainer">
          <div className="feed__input">
            <CreateIcon />
            <form >
              <input value={input} onChange={e => setinput(e.target.value)} type="text" className='' />
              <button onClick={sendPost} type='submit' ></button>
            </form>
          </div>
          <div className="feed__inputOptions">

            <div className="inputOption">
              <ImageIcon style={{ color: '#7005F9' }} />
              <h4>Photos</h4>
            </div>
            <div className="inputOption">
              <SubscriptionsIcon style={{ color: '#E7A33E' }} />
              <h4>Video</h4>
            </div>
            <div className="inputOption">
              <EventNoteIcon style={{ color: '#C0CBCD' }} />
              <h4>Event</h4>
            </div>
            <div className="inputOption">
              <CalendarViewDayIcon style={{ color: '#7FC15E' }} />
              <h4>Write article</h4>
            </div>

          </div>
        </div>


        {/* Posts */}
        <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}

      </FlipMove>
      </div>

    </>
  )
}

export default Feed