import CreateIcon from '@mui/icons-material/Create';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import React, { useEffect, useState } from 'react';
import './Feed.css';
import InputOption from './InputOption';
import Post from './Post';
import firebase from 'firebase/compat';
import { db } from './Firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlibMove from "react-flip-move"
// import Firebase from './firebase';
// import * as firebase from "firebase/app";


function Feed() {
    const user = useSelector(selectUser)
    const [input , setinput] = useState("");
    const [posts , setPost] = useState([]);

    useEffect(() => {
          db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) => 
            setPost(
                snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    data: doc.data(),
                }

              ))
            ) 
          );
    } , [])
    
    const Sendpost = (e) =>{
        e.preventDefault();
        db.collection("posts").add({
            name : user.displayName,
            description : user.email,
            messega : input ,
            Photourls : user.photourl || '',
            timestamp : firebase.firestore.FieldValue.serverTimestamp()


        })
        setinput(" ");
    };

    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                     <CreateIcon />
                     <form>
                         <input value={input} onChange={e => setinput(e.target.value)} type='text'/>
                             <button onClick={Sendpost} type='submit'>send</button>
                         
                     </form>

                </div>
                <div className="inputoption">
                    <InputOption Icon={AddPhotoAlternateIcon} title="photo" color="#70B5f9" />
                    <InputOption Icon={SubscriptionsIcon} title="Vidoe" color="#yellow" />
                    <InputOption Icon={EventNoteIcon} title="Event" color="#70B5f9" />
                    <InputOption Icon={CalendarTodayIcon} title="write Article" color="#70B5f9" />
                </div>
                
            </div>
            {/* posts */}
            <FlibMove>
            {posts.map(({id , data:{name , description , messega , Photourls}}) => (
                <Post key={id} name={name} description={description} messega={messega} photourl={Photourls} />
            
            )) }
            </FlibMove>
            



         
            
        </div>
    );}
            

export default Feed
