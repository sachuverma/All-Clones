import React from "react";
import {
  PlayCircleOutline,
  SkipPrevious,
  SkipNext,
  Shuffle,
  Repeat,
  VolumeDown,
  PlaylistPlay,
  FavoriteBorderOutlined,
} from "@material-ui/icons";
import { Grid, Slider } from "@material-ui/core";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src="https://www.coverstory.no/wp-content/uploads/2020/10/Dua-2.jpeg"
          alt="album cover"
        />
        <div className="footer__songInfo">
          <h4>Levitating</h4>
          <p>Dua Lipa, DaBaby</p>
        </div>
        <FavoriteBorderOutlined className="album__icon" />
      </div>
      <div className="footer__center">
        <Shuffle className="footer__green rem-2" />
        <SkipPrevious className="footer__icon rem-2" />
        <PlayCircleOutline className="footer__icon rem-4" fontSize="large" />
        <SkipNext className="footer__icon rem-2" />
        <Repeat className="footer__green rem-2" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay className="rem-2 footer__icon" />
          </Grid>
          <Grid item>
            <VolumeDown className="rem-2 footer__icon" />
          </Grid>
          <Grid item xs>
            <Slider className="rem-2" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
