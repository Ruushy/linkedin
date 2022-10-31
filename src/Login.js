import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import {auth} from './Firebase'
import './Login.css'

function Login() {
    const [email , setEmail] =  useState("");
    const [password , setPassword] =  useState("");
    const [name , setName] =  useState("");
    const [profilePic , setprofilePic] =  useState("");
    const dispatch = useDispatch();
       const loginTab = (Event) => {
        Event.preventDefault()
        auth.signInWithEmailAndPassword(email , password)
        .then(userAuth => {
          dispatch(login({
            email : userAuth.user.email ,
            uid : userAuth.user.uid,
            displayName :userAuth.user.displayName ,
            profileUrl : userAuth.user.photoURL 
          }))
        }).catch((error) => alert(error))
       };
       const registar = () => {
        if (!name){
          return alert("please enter full name")
        }
        auth.createUserWithEmailAndPassword(email , password)
        .then((userAuth) => {
           userAuth.user.updateProfile({
              displayName: name ,
              photoURL: profilePic
           })
           .then(() => {

            dispatch(login({
              email : userAuth.user.email,
              uid : userAuth.user.uid,
              displayName: name,
              photoURL: profilePic
            }))
           })
        })
        .catch((error) => alert(error))




       };
  return (
    <div className="login">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png" />
        <form>
          <input value={name} onChange={e => setName(e.target.value)} placeholder='full name required if registred' type="text" />
          <input value={profilePic} onChange={e => setprofilePic(e.target.value)} placeholder='photo url {optional} ' type="text" />
          <input value={email} onChange={e => setEmail(e.target.value)} placeholder='email' type="email" />
          <input value={password} onChange={e => setPassword(e.target.value)} placeholder='password' type="password" />
          <button type='submit' onClick={loginTab}>sign in</button>

        </form>
        <p>not a member?{" "}
        <span className='login_registar' onClick={registar}>registar now</span>
        </p>
    </div>
  )
}

export default Login