import React from "react";

import { Home, Search, LibraryMusic } from "@material-ui/icons";

import SidebarOption from "./SidebarOption";
import "./Sidebar.css";

function Sidebar() {
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
    </div>
  );
}

export default Sidebar;
