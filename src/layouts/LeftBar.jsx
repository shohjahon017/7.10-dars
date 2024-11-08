import React, { useEffect, useState } from "react";
import { getToken } from "../utils/utils";
import { useNavigate } from "react-router-dom";

function LeftBar() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      let token = localStorage.getItem("token");

      if (!token) {
        token = await getToken();
      }

      fetch("https://api.spotify.com/v1/browse/categories/toplists/playlists", {
        method: "GET",
        headers: {
          Authorization: token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.playlists && data.playlists.items) {
            setData(data.playlists.items);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchData();
  }, []);

  return (
    <div className="w-[21vw] max-h-[150vh] h-full fixed overflow-y-auto bg-black text-white top-0">
      <div className="pl-[34px] pt-[72px]">
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-[23px] cursor-pointer"
        >
          <img src="/home.svg" alt="Home" />
          <h2>Home</h2>
        </div>
        <div className="flex items-center pt-5 gap-[23px] cursor-pointer">
          <img src="/search.svg" alt="Search" />
          <h2>Search</h2>
        </div>
        <div className="flex items-center pt-5 gap-[23px] cursor-pointer">
          <img src="/Library.svg" alt="Your Library" />
          <h2>Your Library</h2>
        </div>
        <div className="flex items-center pt-[49px] gap-[23px] cursor-pointer">
          <img src="/add.svg" alt="Create Playlist" />
          <h2>Create Playlist</h2>
        </div>
        <div
          onClick={() => navigate("/liked-songs")}
          className="flex items-center pt-5 gap-[23px] cursor-pointer"
        >
          <img src="/liked.svg" alt="Liked Songs" />
          <h2>Liked Songs</h2>
        </div>
      </div>

      <div className="pl-[34px] pt-10">
        {data.map((playlist) => (
          <div
            key={playlist.id}
            className="text-gray-400 hover:text-white cursor-pointer mb-2"
          >
            {playlist.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeftBar;
