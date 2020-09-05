import React, { useState } from 'react';
import logo from './logo.svg';
// import './App.css';


const Post = props => (
  <img src="test" />
)
  
const Profile = (props) => {
  const [isFollowed, setIsFollowed] = useState(false);
  //bakal balikin isfollowed(statenya) sama setter (setisfollowed), state itu read only, makanya kalo mau rubah value di setternya
  return (
    <React.Fragment>
      <img src="https://via.placeholder.com/300" alt="profile picture" />
      <div>@{props.username}</div>
      <button onClick={() => setIsFollowed(!isFollowed)}>{isFollowed ? "Unfollow" : "Follow"}</button>
      <div>Post</div>
      <div>Followers</div>
      <div>Following</div>
      <div>Bio</div>
    </React.Fragment>
    );
  };


export default function App() {
  const username = "instagram";
  return <Profile username={username}/>
}