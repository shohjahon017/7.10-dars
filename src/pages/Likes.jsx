import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { addSongToLiked, removeSongFromLiked } from "../redux/likedSongsSlice";

function LikedSongs() {
  const dispatch = useDispatch();
  const likedSongs = useSelector((state) => state.likedSongs.likedSongs);

  function toggleLike(song) {
    if (likedSongs.some((liked) => liked.id === song.id)) {
      dispatch(removeSongFromLiked(song.id));
    } else {
      dispatch(addSongToLiked(song));
    }
  }

  function MusicDuration(ms) {
    if (!ms || ms < 0) return "0:00";
    const minute = Math.floor(ms / 60000);
    const second = Math.floor((ms % 60000) / 1000);
    return `${minute}:${second.toString().padStart(2, "0")}`;
  }

  return (
    <div className="min-h-screen w-full bg-stone-900 flex flex-col">
      <div className="p-8 bg-gradient-to-b from-[#604EC1] to-[#121212] rounded-lg shadow-lg flex-grow">
        <div className="flex gap-[22px] mt-10">
          <img src="/Back.svg" alt="Go back" className="cursor-pointer" />
          <img src="/Forward.svg" alt="Go forward" className="cursor-pointer" />
        </div>
        <div className="flex items-end gap-10 ">
          <img width={297} height={297} src="/songs.png" alt="" />
          <h2 className="text-[85px] max-w-[659px] font-bold mb-4 text-white">
            Liked Songs
          </h2>
        </div>
        <div className="flex items-center  mb-6 justify-between ">
          <div className="flex items-center gap-3">
            {" "}
            <img src="/play.svg" alt="play" className="cursor-pointer" />{" "}
            <img src="/heart.svg" alt="liked" className="" />{" "}
            <img src="/download.svg" alt="download" className="w-8 h-8" />{" "}
            <img src="/option.svg" alt="options" className="w-8 h-8" />
          </div>
          <div className="flex items-center gap-8">
            <img src="/search.svg" alt="search" />
            <select name="" id="">
              <option value="">Custom order</option>
            </select>
          </div>
        </div>
        <div className="border-b border-gray-700 pb-4 mb-4">
          <div className="flex items-center text-gray-400 gap-4">
            <span className="w-8">#</span>
            <span className="w-1/3">Title</span>
            <span className="flex-1 mr-10">Album</span>
            <span className="w-32 mr-20">Date Added</span>
            <img className="mr-10" src="/time.svg" alt="" />
          </div>
        </div>
        <ul className="space-y-4 ">
          {likedSongs.map((song, index) => (
            <li key={song.id} className="flex items-center text-gray-200">
              <span className="w-8">{index + 1}</span>
              <span className="w-1/3 truncate">{song.name || " "}</span>
              <span className="flex-1 truncate ">
                {song.album ? song.album.name : " "}
              </span>
              <span className="w-16 text-center">
                <FaHeart
                  className="cursor-pointer"
                  onClick={() => toggleLike(song)}
                  style={{
                    color: likedSongs.some((liked) => liked.id === song.id)
                      ? "green"
                      : "gray",
                  }}
                />
              </span>
              <span>{MusicDuration(song.track?.duration_ms)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LikedSongs;
