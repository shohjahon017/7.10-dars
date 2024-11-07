import React, { useState, useEffect } from "react";
import http from "../axios";
import backIcon from "../../public/back.svg";
import forward from "../images/forward.svg";
import { useNavigate } from "react-router-dom";

function Home() {
  const [playlists, setPlaylists] = useState([]);
  const [topMixes, setTopMixes] = useState([]);
  const [made, setMade] = useState([]);
  const [recent, setRecent] = useState([]);
  const [jump, setJump] = useState([]);
  const [unique, setUnique] = useState([]);
  const navigate = useNavigate();

  const [showAllTopMixes, setShowAllTopMixes] = useState(false);
  const [showAllSections, setShowAllSections] = useState({
    made: false,
    recent: false,
    jump: false,
    unique: false,
  });

  useEffect(() => {
    async function fetchPlaylists() {
      try {
        const playlistsRes = await http.get("featured-playlists");
        setPlaylists(playlistsRes.data.playlists.items.slice(0, 6));

        const topMixesRes = await http.get("categories/toplists/playlists");
        setTopMixes(topMixesRes.data.playlists.items);

        const madeRes = await http.get(
          "categories/0JQ5DAqbMKFHOzuVTgTizF/playlists"
        );
        setMade(madeRes.data.playlists.items);

        const recentRes = await http.get(
          "categories/0JQ5DAqbMKFQ00XGBls6ym/playlists"
        );
        setRecent(recentRes.data.playlists.items);

        const jumpRes = await http.get(
          "categories/0JQ5DAqbMKFLVaM30PMBm4/playlists"
        );
        setJump(jumpRes.data.playlists.items);

        const uniqueRes = await http.get(
          "categories/0JQ5DAqbMKFCbimwdOYlsl/playlists"
        );
        setUnique(uniqueRes.data.playlists.items);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPlaylists();
  }, []);

  function handleClick(id) {
    navigate(`/details/${id}`);
  }

  function toggleShowAllTopMixes() {
    setShowAllTopMixes(!showAllTopMixes);
  }

  function toggleShowAllSection(section) {
    setShowAllSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  }

  const sections = [
    {
      title: "Your top mixes",
      items: topMixes,
      showAll: showAllTopMixes,
      toggleShowAll: toggleShowAllTopMixes,
    },
    {
      title: "Made for you",
      items: made,
      showAll: showAllSections.made,
      toggleShowAll: () => toggleShowAllSection("made"),
    },
    {
      title: "Recently played",
      items: recent,
      showAll: showAllSections.recent,
      toggleShowAll: () => toggleShowAllSection("recent"),
    },
    {
      title: "Jump back in",
      items: jump,
      showAll: showAllSections.jump,
      toggleShowAll: () => toggleShowAllSection("jump"),
    },
    {
      title: "Uniquely yours",
      items: unique,
      showAll: showAllSections.unique,
      toggleShowAll: () => toggleShowAllSection("unique"),
    },
  ];

  return (
    <div className="py-4 rounded-lg w-full max-w-4xl pb-24 mx-auto bg-[linear-gradient(180deg,_#3333A3_5.09%,_#121212_33.4%)]">
      <div className="flex gap-5 mt-10 ml-5">
        <img src={backIcon} alt="Go back" className="cursor-pointer" />
        <img src={forward} alt="Go forward" className="cursor-pointer" />
      </div>
      <div className="p-4 rounded-lg w-full max-w-4xl mx-auto mt-8">
        <h2 className="text-white text-2xl font-semibold mb-4">
          Good afternoon
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {playlists.map((playlist) => (
            <div
              key={playlist.id}
              onClick={() => handleClick(playlist.id)}
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

      {sections.map((section, index) => (
        <div className="mt-10" key={index}>
          <div className="flex justify-between mx-[41px] mb-4">
            <h5 className="text-white text-lg font-semibold">
              {section.title}
            </h5>
            <h6
              onClick={section.toggleShowAll}
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
              (item) => (
                <div
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                  className="bg-gray-800 text-white rounded-lg items-center w-[224px] p-3 cursor-pointer hover:bg-gray-700"
                >
                  <img
                    src={item.images[0]?.url}
                    alt={item.name}
                    className="w-[182px] h-[182px] rounded"
                  />
                  <span className="text-lg font-medium">{item.name}</span>
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
