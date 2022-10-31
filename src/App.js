// import { Login } from '@mui/icons-material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import Login from './Login';
import { auth } from './Firebase';
import Widget from './Widget';



function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();
  useEffect(() => {
   auth.onAuthStateChanged(userAuth => {
    if (userAuth){
    dispatch(login( {
      email : userAuth.email ,
      uid : userAuth.uid,
      displayName :userAuth.displayName ,
      photoUrl : userAuth.photoURL 
    }))

    }else{
       dispatch(logout());
    }
   } )

  }, [])

  
  return (
    <div className="App">
    
      <Header />
      {!user ? (<Login />): (
    <div className = "app_body">
    <Sidebar />
    <Feed />
    <Widget />
      
     </div>

      )}

    
    </div>
  );
}

export default App;
