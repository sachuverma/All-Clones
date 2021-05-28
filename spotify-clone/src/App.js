import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";

import { useDataLayerValue } from "./DataLayer";

import "./App.css";

import Login from "./Login";
import Player from "./Player";
import { getTokenFromUrl } from "./spotify";

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify
        .getUserPlaylists()
        .then((playlists) => {
          console.log("get playlists", playlists);
          dispatch({
            type: "SET_PLAYLISTS",
            playlists: playlists,
          });
        })
        .catch((err) => console.log("playlist err", err));

      spotify.getPlaylist("37i9dQZEVXcVRtFancsN3s").then((res) => {
        console.log("get weekly", res);
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: res,
        });
      });
    }
  }, [token, dispatch]);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
