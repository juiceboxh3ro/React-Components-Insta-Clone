//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import dummydata from "../../dummy-data"
// import data 

const PostsPage = () => {

  const [ myData ] = useState(dummydata);

  // set up state for your data
  return (
    <div className="posts-container-wrapper">
      { myData.map(item => (
        <Post post={item}/>
      ))}
    </div>
  );
};

export default PostsPage;

