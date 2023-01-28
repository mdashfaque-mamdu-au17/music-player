import React, { useState, useEffect } from 'react';
import './App.css';
import ButtonWithIcon from './components/ButtonWithIcon';
import chevronRight from './assets/chevron-right.svg';
import chevronLeft from './assets/chevron-left.svg';
import Player from './components/Player';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Search from './components/Search';
import SearchPage from './pages/SearchPage';
import classNames from 'classnames';
import TopBar from './components/TopBar';
import { songs } from './data';
function App() {
  const [trackIndex, setTrackIndex] = useState(null);
  const [playList, setPlayList] = useState(songs);
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState();

  // const fetchSongs = async () => {
  // 	try {
  // 		const result = await fetch(
  // 			"https://music-player-api1.herokuapp.com/api/songs"
  // 		);
  // 		const songs = await result.json();
  // 		setPlayList(songs?.data);
  // 	} catch (error) {
  // 		console.log(error);
  // 	}
  // };
  // useEffect(() => {
  // 	fetchSongs();
  // }, []);

  return (
    <BrowserRouter>
      <div className="relative w-full bg-theme-gray-900">
        <div
          className={classNames(
            'hidden lg:block w-[330px] top-0 left-0 h-full bg-theme-gray-900 border-r border-theme-white-500 fixed z-20'
          )}
        >
          <Sidebar />
        </div>

        <div className="fixed top-0 left-0 z-20 w-full px-4 py-4 bg-theme-gray-800 lg:hidden">
          <TopBar />

          <div
            className={classNames(
              'lg:hidden',

              openSearchBar
                ? 'py-2 h-12 transition-all duration-500 ease-in-out'
                : 'h-0 transition-all duration-500 ease-in-out'
            )}
          >
            {openSearchBar && (
              <Search
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                songs={playList}
                setFilteredResults={setFilteredResults}
              />
            )}
          </div>
        </div>
        {trackIndex !== '' ? (
          <div className="h-[80px] lg:h-[120px] w-screen fixed bottom-0 left-0 border-t-[1px] border-theme-green-700 bg-theme-gray-800 z-20">
            <Player
              trackIndex={trackIndex}
              setTrackIndex={setTrackIndex}
              songs={playList}
            />
          </div>
        ) : null}

        <div className="hidden lg:block fixed top-0 left-[330px] w-full bg-theme-gray-900">
          <div className=" pt-[26px] pb-4 pl-[52px] mr-[70px]  border-b-2 border-theme-gray-500 z-20">
            <div className="flex justify-between">
              <div className="flex items-center gap-5">
                <ButtonWithIcon type="primary" icon={chevronLeft} />
                <ButtonWithIcon type="primary" icon={chevronRight} />
                {openSearchBar && (
                  <Search
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    songs={playList}
                    setFilteredResults={setFilteredResults}
                  />
                )}
              </div>
            </div>
            {/* <div className="pt-7">
							<Title title="Recently Added" />
						</div> */}
          </div>
        </div>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              songs={playList}
              setTrackIndex={setTrackIndex}
              setOpenSearchBar={setOpenSearchBar}
              trackIndex={trackIndex}
              openSearchBar={openSearchBar}
            />
          }
        />
        <Route
          path="search"
          element={
            <SearchPage
              setOpenSearchBar={setOpenSearchBar}
              songs={playList}
              searchTerm={searchTerm}
              filteredResults={filteredResults}
              setTrackIndex={setTrackIndex}
              trackIndex={trackIndex}
              openSearchBar={openSearchBar}
              setSearchTerm={setSearchTerm}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
