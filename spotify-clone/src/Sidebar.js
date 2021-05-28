import React from "react";

import {
  Home,
  Search,
  LibraryMusic,
  AddBox,
  Favorite,
} from "@material-ui/icons";
import { useDataLayerValue } from "./DataLayer";

import SidebarOption from "./SidebarOption";
import "./Sidebar.css";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="logos"
      />

      <SidebarOption title="Home" Icon={Home} />
      <SidebarOption title="Search" Icon={Search} />
      <SidebarOption title="Your Library" Icon={LibraryMusic} />

      <br />

      <SidebarOption title="Create Playlist" Icon={AddBox} />
      <SidebarOption title="Liked Songs" Icon={Favorite} />

      <br />
      <strong className="sidebar__title">MY PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map((playlist) => {
        let playlist_name = playlist.name;

        if (playlist_name.length > 35) {
          playlist_name = playlist_name.substring(0, 35) + "...";
        }

        return <SidebarOption title={playlist_name} />;
      })}
    </div>
  );
}

export default Sidebar;
