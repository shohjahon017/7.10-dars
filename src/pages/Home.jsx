import React, { useState, useEffect } from "react";
import http from "../axios";
import back from "../assets/back.svg";
import forward from "../assets/forward.svg";

function Home() {
  const [playlists, setPlaylists] = useState([]);
  const [topMixes, setTopMixes] = useState([]);
  const [made, setMade] = useState([]);
  const [recent, setRecent] = useState([]);
  const [jump, setJump] = useState([]);
  const [unique, setUnique] = useState([]);

  useEffect(() => {
    function fetchPlaylists() {
      http
        .get("featured-playlists")
        .then((response) => {
          console.log(
            "https://api.spotify.com/v1/browse/categories/toplists/playlists"
          );

          setPlaylists(response.data.playlists.items.slice(0, 6));
        })
        .catch((error) => console.log(error));

      http
        .get("categories/toplists/playlists")
        .then((response) => {
          setTopMixes(response.data.playlists.items.slice(0, 4));
        })
        .catch((error) => console.log(error));
      http
        .get("categories/0JQ5DAqbMKFHOzuVTgTizF/playlists")
        .then((response) => {
          setMade(response.data.playlists.items.slice(0, 4));
        })
        .catch((error) => console.log(error));
      http
        .get("categories/0JQ5DAqbMKFQ00XGBls6ym/playlists")
        .then((response) => {
          setRecent(response.data.playlists.items.slice(0, 4));
        })
        .catch((error) => console.log(error));
      http
        .get("categories/0JQ5DAqbMKFLVaM30PMBm4/playlists")
        .then((response) => {
          setJump(response.data.playlists.items.slice(0, 4));
        })
        .catch((error) => console.log(error));
      http
        .get("categories/0JQ5DAqbMKFCbimwdOYlsl/playlists")
        .then((response) => {
          setUnique(response.data.playlists.items.slice(0, 4));
        })
        .catch((error) => console.log(error));
    }
    fetchPlaylists();
  }, []);
  return (
    <div className="py-4 rounded-lg w-full max-w-4xl mx-auto">
      <div className="flex gap-[22px] mt-10 ml-5">
        <img src={back} alt="" />
        <img src={forward} alt="" />
      </div>
      <div className="p-4 rounded-lg w-full max-w-4xl mx-auto mt-8  ">
        <h2 className="text-white text-2xl font-semibold mb-4">
          Good afternoon
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {playlists.map((playlist) => (
            <div
              key={playlist.id}
              className="bg-gray-800 text-white rounded-lg flex items-center p-3 space-x-4 cursor-pointer hover:bg-gray-700"
            >
              <img
                src={playlist.images[0]?.url}
                alt={playlist.name}
                className="w-16 h-16 rounded"
              />
              <span className="text-lg font-medium">{playlist.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <div className="flex justify-between mx-[41px] mb-4">
          <h5 className="text-white text-lg font-semibold">Your top mixes</h5>
          <h6 className="text-blue-500 cursor-pointer">SEE ALL</h6>
        </div>
        <div className=" flex  gap-4 px-[41px]">
          {topMixes.map((mix) => (
            <div
              key={mix.id}
              className="bg-gray-800 text-white rounded-lg  items-center w-[224px] p-3 space-x-4 cursor-pointer hover:bg-gray-700"
            >
              <img
                src={mix.images[0]?.url}
                alt={mix.name}
                className="w-[182px] h-[182px] pb-6  rounded"
              />
              <span className="text-lg font-medium ">{mix.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <div className="flex justify-between mx-[41px] mb-4">
          <h5 className="text-white text-lg font-semibold"> Made for you</h5>
          <h6 className="text-blue-500 cursor-pointer">SEE ALL</h6>
        </div>
        <div className=" flex  gap-4 px-[41px]">
          {made.map((mad) => (
            <div
              key={mad.id}
              className="bg-gray-800 text-white rounded-lg  items-center w-[224px] p-3 space-x-4 cursor-pointer hover:bg-gray-700"
            >
              <img
                src={mad.images[0]?.url}
                alt={mad.name}
                className="w-[182px] h-[182px] pb-6  rounded"
              />
              <span className="text-lg font-medium ">{mad.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <div className="flex justify-between mx-[41px] mb-4">
          <h5 className="text-white text-lg font-semibold">Recently played</h5>
          <h6 className="text-blue-500 cursor-pointer">SEE ALL</h6>
        </div>
        <div className=" flex  gap-4 px-[41px]">
          {recent.map((rec) => (
            <div
              key={rec.id}
              className="bg-gray-800 text-white rounded-lg  items-center w-[224px] p-3 space-x-4 cursor-pointer hover:bg-gray-700"
            >
              <img
                src={rec.images[0]?.url}
                alt={rec.name}
                className="w-[182px] h-[182px] pb-6  rounded"
              />
              <span className="text-lg font-medium ">{rec.name}</span>
            </div>
          ))}
        </div>
      </div>{" "}
      <div className="mt-10">
        <div className="flex justify-between mx-[41px] mb-4">
          <h5 className="text-white text-lg font-semibold">Jump back in</h5>
          <h6 className="text-blue-500 cursor-pointer">SEE ALL</h6>
        </div>
        <div className=" flex  gap-4 px-[41px]">
          {jump.map((jum) => (
            <div
              key={jum.id}
              className="bg-gray-800 text-white rounded-lg  items-center w-[224px] p-3 space-x-4 cursor-pointer hover:bg-gray-700"
            >
              <img
                src={jum.images[0]?.url}
                alt={jum.name}
                className="w-[182px] h-[182px] pb-6  rounded"
              />
              <span className="text-lg font-medium ">{jum.name}</span>
            </div>
          ))}
        </div>
      </div>{" "}
      <div className="mt-10">
        <div className="flex justify-between mx-[41px] mb-4">
          <h5 className="text-white text-lg font-semibold">Uniquely yours</h5>
          <h6 className="text-blue-500 cursor-pointer">SEE ALL</h6>
        </div>
        <div className=" flex  gap-4 px-[41px]">
          {unique.map((uniqu) => (
            <div
              key={uniqu.id}
              className="bg-gray-800 text-white rounded-lg  items-center w-[224px] p-3 space-x-4 cursor-pointer hover:bg-gray-700"
            >
              <img
                src={uniqu.images[0]?.url}
                alt={uniqu.name}
                className="w-[182px] h-[182px] pb-6  rounded"
              />
              <span className="text-lg font-medium ">{uniqu.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
