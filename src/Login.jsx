import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import './login.css';

function Login() {
    const [email, setemail] = useState('');
    const [name, setname] = useState('');
    const [password, setpassword] = useState('');
    const [Profilepic, setProfilepic] = useState('');
    const dispatch = useDispatch();

    const loginToApp = (e) =>{
        e.preventDefault();

        auth
        .signInWithEmailAndPassword(email,password)
        .then(userAuth => {
            dispatch(
                login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.name,
                photoURL: userAuth.photoURL,
            }))
        })
        .catch((error) => alert(error));
    } ;

    const register = () =>{
        if (!name){
            return alert('Please enter a Full name');
        }
        
        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user
            .updateProfile({
                displayName: name,
                photoURL: Profilepic,
            })
            .then(()=>{
                dispatch(
                    login({
                    email: userAuth.user.email,
                    uid: userAuth.user.id,
                    displayName: name,
                    photoURL: Profilepic,
                 })
                );
            })
        }).catch(error => alert(error));
    };


  return (
    <div className='login'>
        <h2>You are not logged In Right now!</h2>

        <form action="">
            <input type="text" value={name} onChange={(e) => setname(e.target.value)} placeholder='Full Name'/>
            
            <input type="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder='Email'/>

            <input type="text" value={Profilepic} onChange={(e) => setProfilepic(e.target.value)}  placeholder='Profile picture Url' />

            <input type="password" value={password} placeholder='Password' onChange={(e) => setpassword(e.target.value)} />

            <button onClick={loginToApp}>Sign Up</button>
            
            <p>Not a member?
                <span className='login__register' onClick={register}>Register Now</span>
            </p>
        </form>
    </div> 
  )
}

export default Login