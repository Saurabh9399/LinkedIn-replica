import React, { useState } from 'react'
import "./Feed.css"
import InputOption from "./InputOption"
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import YouTubeIcon from "@material-ui/icons/YouTube";
import DescriptionIcon from "@material-ui/icons/Description";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "./Post";

function Feed() {
   const [posts,setPosts] = useState([]);

   const sendPost = e => {
     e.preventDefault();

   }

    return (
      <div className="feed">
        <div className="feed__inputContainer">
          <div className="feed__input">
            <CreateIcon />
            <form action="">
              <input type="text" name="" id="" />
              <button onClick={sendPost} type="submit">Send</button>
            </form>
          </div>
          <div className="feed__inputOptions">
            <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
            <InputOption Icon={YouTubeIcon} title="Video" color="#7fc15e" />
            <InputOption
              Icon={DescriptionIcon}
              title="Document"
              color="#c79ef7"
            />
            <InputOption
              Icon={CalendarViewDayIcon}
              title="Write Article"
              color="#f5987e"
            />
          </div>
        </div>

        {posts.map((post)=>(
           <Post/>
        ))}
        <Post 
          name="Saurabh J" 
          description="This is a test"
          message="WOW this worked"
        />
      </div>
    );
}

export default Feed
