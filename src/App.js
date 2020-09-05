import React, { useState } from 'react';
import logo from './logo.svg';
// import './App.css';


const Post = ({ src }) => <img src={src} alt="profile picture" />;
  
const Profile = (props) => {
  const {username} = props;
  const [isFollowed, setIsFollowed] = useState(false);
  //bakal balikin isfollowed(statenya) sama setter (setisfollowed), state itu read only, makanya kalo mau rubah value di setternya. 
  //setIsFollowed itufunction untuk mengubah statenya 
  const posts = [...Array(0)];
  const postCount = 0;

  return (
    <React.Fragment>
      <img src="https://via.placeholder.com/100" alt="profile picture" />
      <div>@{props.username}</div>
      <button onClick={() => setIsFollowed(!isFollowed)}>{isFollowed ? "Unfollow" : "Follow"}</button>
      <div>{postCount}Post</div>
      <div>Followers</div>
      <div>Following</div>
      <div>Bio</div>
      {postCount === 0 ? (
        <div>No Post</div>
      ) : (
        posts.map((_,idx) => (
          <Post src ="https://via.placeholder.com/100" key={idx} />
        ))
      )}
    </React.Fragment>
    );
  };


export default function App() {
  const username = "instagram";
  return <Profile username={username}/>
}