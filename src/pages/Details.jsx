import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../axios";
import back from "../images/back.svg";
import forward from "../images/forward.svg";
import download from "../images/download.svg";
import search from "../images/search.svg";
import option from "../images/option.svg";
import heart from "../images/heart.svg";
import time from "../images/time.svg";
import play from "../images/play.svg";

function Details() {
  const { id: playlistId } = useParams();
  const [details, setDetails] = useState(null);
  const [playing, setPlaying] = useState(false);

  const player = new Audio(
    "https://www.w3schools.com/jsref/met_audio_play.asp"
  );

  useEffect(() => {
    if (playlistId) {
      http
        .get(`https://api.spotify.com/v1/playlists/${playlistId}`)
        .then((response) => {
          setDetails(response.data);
          console.log(response.data.tracks.items);
        })
        .catch((error) => console.log(error));
    }
  }, [playlistId]);
  function togglePlay() {
    playing ? player.pause() : player.play();
    setPlaying(!playing);
  }

  if (!details) return <div className="text-white">Loading...</div>;

  return (
    <div className=" max-w-4xl mx-auto bg-[linear-gradient(180deg,_#DEF628_5.09%,_#121212_43.28%)]">
      <div className="p-8">
        <div className="flex gap-[22px] mt-10 w-full bg-[] ">
          <img src={back} alt="Go back" className="cursor-pointer" />
          <img src={forward} alt="Go forward" className="cursor-pointer" />
        </div>
        <div className="flex gap-8 mt-[57px] ">
          {" "}
          <img
            src={details.images[0]?.url}
            alt={details.name}
            className="w-[297px] h-[297px] rounded mb-4"
          />{" "}
          <div>
            {" "}
            <h2 className="text-[122px] font-bold mb-4 text-white max-w-[659px]">
              {details.name}
            </h2>
            <p className="text-white text-lg mb-4 max-w-[319px]">
              {details.description}
            </p>
          </div>
        </div>
        <div className=" flex items-center gap-[400px] cursor-pointer ">
          <div className="flex gap-3">
            {" "}
            <button onClick={() => togglePlay()}>
              {" "}
              <img src={play} alt="play" />
              {playing ? "Stop" : "Play"}
            </button>
            <img src={heart} alt="heart" />
            <img src={download} alt="download" />
            <img src={option} alt="option" />
          </div>
          <div className="flex items-center gap-8">
            <img src={search} alt="search" />
            <select name="" id="">
              <option value="">Custom order</option>
            </select>
          </div>
        </div>
        <div className="flex cursor-pointer border-b-2 border-gray-500 pb-4 text-gray-700 ">
          <span className="mr-[19px]">#</span>
          <h5 className="mr-[291px]">TITLE</h5>
          <h5 className="mr-[190px]">ALBUM</h5>
          <h5 className="mr-[155px]">DATE ADDED</h5>
          <img src={time} alt="time" />
        </div>
      </div>

      <ul className="space-y-4 px-10">
        {details.tracks.items.map((track, index) => (
          <li key={index} className="flex items-center gap-4 text-white">
            {index + 1}
            {track.track.album.images[0] && (
              <img
                src={track.track.album.images[0].url}
                alt={track.track.name}
                className="w-12 h-12 rounded"
              />
            )}
            <div>
              <p className="font-medium">{track.track.name}</p>
              <p className="text-sm text-gray-400">
                {track.track.artists.map((artist) => artist.name).join(", ")}
              </p>{" "}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Details;
