import { Avatar } from "@material-ui/core";
import React from "react";

import "./SidebarRow.css";

function SidebarChannel({ selected, logo, title }) {
  return (
    <div className={`sidebarRow ${selected && "selected"}`}>
      <Avatar className="sidebarChannel__logo" src={logo} alt={title} />
      <h2 className="sidebarRow__title">{title}</h2>
    </div>
  );
}

export default SidebarChannel;
