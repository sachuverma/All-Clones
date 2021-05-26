import React from "react";

import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import SidebarChannel from "./SidebarChannel";

import {
  Home,
  Whatshot,
  Subscriptions,
  History,
  ExpandMoreOutlined,
  ThumbUpAltOutlined,
  WatchLater,
  OndemandVideo,
  VideoLibrary,
  Settings,
  Flag,
  Help,
  Feedback,
} from "@material-ui/icons";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={Home} title="Home" />
      <SidebarRow Icon={Whatshot} title="Trending" />
      <SidebarRow Icon={Subscriptions} title="Subscription" />
      <hr className="hr" />

      <SidebarRow Icon={VideoLibrary} title="Library" />
      <SidebarRow Icon={History} title="History" />
      <SidebarRow Icon={OndemandVideo} title="Your Videos" />
      <SidebarRow Icon={WatchLater} title="Watch Later" />
      <SidebarRow Icon={ThumbUpAltOutlined} title="Liked Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="Show More" />

      <hr className="hr" />

      <h4 className="subs">SUBSCRIPTIONS</h4>

      <SidebarChannel
        logo="https://yt3.ggpht.com/ytc/AAUvwnjzeQNcyBC6TygdOtnDyd80UA74fe7QwLmww7gn=s176-c-k-c0x00ffffff-no-rj-mo"
        title="Aniplex"
      />
      <SidebarChannel
        logo="https://yt3.ggpht.com/ytc/AAUvwnj8K_tyvtm_o4yangEjq6G2tGzPT13LjpACx7sM0kE=s176-c-k-c0x00ffffff-no-rj-mo"
        title="Funimation"
      />
      <SidebarChannel
        logo="https://yt3.ggpht.com/ytc/AAUvwngA83eykGR31KHx1COaJZXEFh8I_yTUKlL5qWLKsg=s176-c-k-c0x00ffffff-no-rj-mo"
        title="WatchMojo"
      />
      <SidebarChannel
        logo="https://yt3.ggpht.com/ytc/AAUvwngy2UeOglBEIpvwHwZicPPXmoSSr62uPEJhbYL8=s176-c-k-c0x00ffffff-no-rj-mo"
        title="Mappa"
      />
      <SidebarChannel
        logo="https://yt3.ggpht.com/ytc/AAUvwnjUrxya4rThWe-zHSTqJqRrBOad1egaszoD2d0=s176-c-k-c0x00ffffff-no-rj"
        title="Gigguk"
      />

      <SidebarRow Icon={ExpandMoreOutlined} title="Show 7 More" />

      <hr className="hr" />

      <SidebarRow Icon={Settings} title="Settings" />
      <SidebarRow Icon={Flag} title="Report history" />
      <SidebarRow Icon={Help} title="Help" />
      <SidebarRow Icon={Feedback} title="Send Feedback" />
    </div>
  );
}

export default Sidebar;
