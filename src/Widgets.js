import React from 'react'
import "./Widgets.css"
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordingIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {

    const newsArticle = (heading,subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordingIcon/>
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
      <div className="widgets">
        <div className="widgets__header">
          <h2>LinkedIn News</h2>
          <InfoIcon />
        </div>
        {newsArticle("Hey I'm back", "Top news - 99099 readers")}
        {newsArticle("Coronavirus: UK updates", "Top news - 9981 readers")}
        {newsArticle("Tesla hits new hights", "Cars & auto - 734 readers")}
        {newsArticle("Bitcoin Breaks $22k", "Crypto - 8848 readers")}
        {newsArticle("PAPA react launches course?!", "Top news - 8374 readers")}
        {newsArticle("Is Redux too good?", "Code Redux - 83299 readers")}
      </div>
    );
}

export default Widgets
