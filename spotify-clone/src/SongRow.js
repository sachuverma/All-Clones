import React from "react";

import "./SongRow.css";

function SongRow({ track }) {
  return (
    <div className="songRow">
      <img
        src={track.album.images[0].url}
        alt={track.name}
        className="songRow__album"
      />
      <div className="songRow__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => (
            <span key={artist.name}>{artist.name + " "}</span>
          ))}
          | {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
