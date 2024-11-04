import React, { useState, useEffect } from "react";
import http from "../axios";
import back from "./../images/back.svg";
import forward from "./../images/forward.svg";

function Home() {
  const [playlists, setPlaylists] = useState([]);
  const [topMixes, setTopMixes] = useState([]);
  const [made, setMade] = useState([]);
  const [recent, setRecent] = useState([]);
  const [jump, setJump] = useState([]);
  const [unique, setUnique] = useState([]);

  const [showAllTopMixes, setShowAllTopMixes] = useState(false);
  const [showAllMade, setShowAllMade] = useState(false);
  const [showAllRecent, setShowAllRecent] = useState(false);
  const [showAllJump, setShowAllJump] = useState(false);
  const [showAllUnique, setShowAllUnique] = useState(false);

  useEffect(() => {
    function fetchPlaylists() {
      http
        .get("featured-playlists")
        .then((response) => {
          setPlaylists(response.data.playlists.items.slice(0, 6));
        })
        .catch((error) => console.log(error));

      http
        .get("categories/toplists/playlists")
        .then((response) => {
          setTopMixes(response.data.playlists.items);
        })
        .catch((error) => console.log(error));

      http
        .get("categories/0JQ5DAqbMKFHOzuVTgTizF/playlists")
        .then((response) => {
          setMade(response.data.playlists.items);
        })
        .catch((error) => console.log(error));

      http
        .get("categories/0JQ5DAqbMKFQ00XGBls6ym/playlists")
        .then((response) => {
          setRecent(response.data.playlists.items);
        })
        .catch((error) => console.log(error));

      http
        .get("categories/0JQ5DAqbMKFLVaM30PMBm4/playlists")
        .then((response) => {
          setJump(response.data.playlists.items);
        })
        .catch((error) => console.log(error));

      http
        .get("categories/0JQ5DAqbMKFCbimwdOYlsl/playlists")
        .then((response) => {
          setUnique(response.data.playlists.items);
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
      <div className="p-4 rounded-lg w-full max-w-4xl mx-auto mt-8">
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
          <h6
            onClick={() => setShowAllTopMixes(!showAllTopMixes)}
            className="text-blue-500 cursor-pointer"
          >
            {showAllTopMixes ? "SHOW LESS" : "SEE ALL"}
          </h6>
        </div>
        <div
          className={`flex gap-4 px-[41px] justify-center ${
            showAllTopMixes ? "flex-wrap" : "flex-nowrap"
          }`}
        >
          {(showAllTopMixes ? topMixes : topMixes.slice(0, 4)).map((mix) => (
            <div
              key={mix.id}
              className="bg-gray-800 text-white rounded-lg items-center w-[224px] p-3 cursor-pointer hover:bg-gray-700"
            >
              <img
                src={mix.images[0]?.url}
                alt={mix.name}
                className="w-[182px] h-[182px] rounded"
              />
              <span className="text-lg font-medium">{mix.name}</span>
            </div>
          ))}
        </div>
      </div>

      {[
        {
          title: "Made for you",
          items: made,
          showAll: showAllMade,
          setShowAll: setShowAllMade,
        },
        {
          title: "Recently played",
          items: recent,
          showAll: showAllRecent,
          setShowAll: setShowAllRecent,
        },
        {
          title: "Jump back in",
          items: jump,
          showAll: showAllJump,
          setShowAll: setShowAllJump,
        },
        {
          title: "Uniquely yours",
          items: unique,
          showAll: showAllUnique,
          setShowAll: setShowAllUnique,
        },
      ].map((section, index) => (
        <div className="mt-10 " key={index}>
          <div className="flex justify-between mx-[41px] mb-4">
            <h5 className="text-white text-lg font-semibold">
              {section.title}
            </h5>
            <h6
              onClick={() => section.setShowAll(!section.showAll)}
              className="text-blue-500 cursor-pointer"
            >
              {section.showAll ? "SHOW LESS" : "SEE ALL"}
            </h6>
          </div>
          <div
            className={`flex gap-4 px-[41px] justify-center ${
              section.showAll ? "flex-wrap" : "flex-nowrap"
            }`}
          >
            {(section.showAll ? section.items : section.items.slice(0, 4)).map(
              (item, itemIndex) => (
                <div
                  key={`${item.id}-${itemIndex}`}
                  className="bg-gray-800 text-white rounded-lg items-center w-[224px] p-3 cursor-pointer hover:bg-gray-700"
                >
                  <img
                    src={item.images[0]?.url}
                    alt={item.name}
                    className="w-[182px] h-[182px] rounded"
                  />
                  <span className="text-lg font-medium ">{item.name}</span>
                </div>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
