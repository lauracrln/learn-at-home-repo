import React, { useState } from 'react';
import logo from './logo.svg';
// import './App.css';


const Post = ({ src }) => <img src={src} alt="profile picture" />;
  
const Profile = (props) => {
  const {username} = props;
  const [isFollowed, setIsFollowed] = useState(false);
  //bakal balikin isfollowed(statenya) sama setter (setisfollowed), state itu read only, makanya kalo mau rubah value di setternya. 
  //setIsFollowed itufunction untuk mengubah statenya 
  const postCount = 11;
  const posts = [...Array(postCount)];
  
  const [inputAccount, setInputAccount] = useState("");

  return (
    <React.Fragment>
      <input onChange={({target: {value} }) => {
        setInputAccount(value); 
        }}
         placeholder="search profile"></input>
      <div>Search Result for account: {inputAccount}</div>
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
        <div className="posts">
          {posts.map((_,idx) => (
          <Post src ="https://via.placeholder.com/100" key={idx} className="post"/>
        ))}
        </div>
      )}
    </React.Fragment>
    );
  };


export default function App() {
  const username = "instagram";
  return <Profile username={username}/>
}