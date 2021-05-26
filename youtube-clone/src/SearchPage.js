import { TuneOutlined } from "@material-ui/icons";
import React from "react";

import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import "./SearchPage.css";

let videos = require("./search-data.json");

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlined />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image={`https://yt3.ggpht.com/ytc/AAUvwnh8DgqG3-bmzHGDzGJ8jo2ZOpTr7BX45EdOCsih=s176-c-k-c0x00ffffff-no-rj`}
        channel={`AniMelody – Anime Music`}
        verified
        subs={`289K`}
        noOfVideos={`109`}
        description={`AniMelody is a promotional channel for a variety of Japanese & Anime music outside of Japan.
        
        Contact us if you would like to be promoted on our channel:
        contact@animelody.net
        
        Submit your subtitles:
        cc.animelody.net`}
      />
      <hr />

      {videos.map((video) => (
        <VideoRow
          key={video.title}
          views={video.views}
          subs={video.subs}
          description={video.description}
          timestamp={video.timestamp}
          channel={video.channel}
          title={video.title}
          image={video.image}
        />
      ))}
    </div>
  );
}

export default SearchPage;
