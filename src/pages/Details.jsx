import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../axios";
import back from "../images/back.svg";
import forward from "../images/forward.svg";

function Details() {
  const { id: playlistId } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    if (playlistId) {
      http
        .get(`https://api.spotify.com/v1/playlists/${playlistId}`)
        .then((response) => setDetails(response.data))
        .catch((error) => console.log(error));
    }
  }, [playlistId]);

  if (!details) return <div className="text-white">Loading...</div>;

  return (
    <div className=" max-w-4xl mx-auto  bg-[linear-gradient(180deg, #DEF628 5.09%, #121212 43.28%)] ">
      <div className="flex gap-[22px] mt-10 ">
        <img src={back} alt="Go back" className="cursor-pointer" />
        <img src={forward} alt="Go forward" className="cursor-pointer" />
      </div>
      <div className="flex gap-8 mt-[57px]">
        {" "}
        <img
          src={details.images[0]?.url}
          alt={details.name}
          className="w-[297px] h-[297px] rounded mb-4"
        />{" "}
        <div>
          {" "}
          <h2 className="text-[122px] font-bold mb-4 text-white">
            {details.name}
          </h2>
          <p className="text-white text-lg mb-4">{details.description}</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-white mb-2">Tracks</h3>
      <ul className="space-y-4">
        {details.tracks.items.map((track, index) => (
          <li key={index} className="flex items-center gap-4 text-white">
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
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Details;
