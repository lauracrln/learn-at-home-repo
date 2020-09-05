import React from 'react';
import logo from './logo.svg';
// import './App.css';


  
const Profile = (props) => (

    <React.Fragment>
    <img src="https://via.placeholder.com/300" alt="profile picture" />
      <div>@[username]</div>
      <button>Follow</button>
      <div>Post</div>
      <div>Followers</div>
      <div>Following</div>
      <div>Bio</div>
    </React.Fragment>
  );


export default function App() {
  const username = "instagram";
  return <Profile username={username}/>
}