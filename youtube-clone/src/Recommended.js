import React from "react";

import "./Recommended.css";
import VideoCard from "./VideoCard";

let videos = require("./youtube-data.json");

function Recommended() {
  return (
    <div className="recommended">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        {videos.map((video) => (
          <VideoCard
            key={video.title}
            title={video.title}
            views={video.views}
            timestamp={video.timestamp}
            channelImage={video.channelImage}
            channel={video.channel}
            image={video.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Recommended;
