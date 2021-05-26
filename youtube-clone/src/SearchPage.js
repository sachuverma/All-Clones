import { TuneOutlined } from "@material-ui/icons";
import React from "react";

import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import "./SearchPage.css";

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

      <VideoRow
        views={`783k`}
        subs={`289k`}
        description={`Tokyo Revengers OP Full Song "Cry Baby" by Official HIGE DANdism
        TV Anime "Tokyo Revengers" Opening Theme Full
        Official HIGE DANdism - Cry Baby
        
        Buy/Stream...`}
        timestamp={`May 6, 2021`}
        channel={`AniMelody - Anime Music`}
        title={`Tokyo Revengers - Opening Full『Cry Baby』by Official HIGE DANdism`}
        image={`http://i3.ytimg.com/vi/IW0xruff7Hc/hqdefault.jpg`}
      />
    </div>
  );
}

export default SearchPage;
