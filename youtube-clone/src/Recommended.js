import React from "react";

import "./Recommended.css";
import VideoCard from "./VideoCard";

function Recommended() {
  return (
    <div className="recommended">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
}

export default Recommended;
