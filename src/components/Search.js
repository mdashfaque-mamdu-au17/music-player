import classNames from 'classnames';
import React from 'react';
import { IoSearch } from 'react-icons/io5';

const Search = ({
  setSearchTerm,
  searchTerm,
  songs,
  setFilteredResults,
}) => {
  const searchSongs = (searchValue) => {
    setSearchTerm(searchValue);
    if (searchTerm !== '') {
      const filteredData = songs.filter((item) => {
        return Object.values(item)
          .join('')
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(songs);
    }
  };
  return (
    <div
      className={classNames('bg-white rounded-md lg:rounded-full')}
    >
      <div className="relative text-black focus-within:text-black max-w-[350px]">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2.5">
          <button
            type="submit"
            className="p-1 focus:outline-none focus:shadow-outline"
          >
            <IoSearch size={28} />
          </button>
        </span>
        <input
          type="search"
          placeholder="What do you want to listen to ?"
          className="py-2.5 pl-14 text-base text-theme-white-400 rounded-md lg:rounded-full focus:outline-none focus:bg-white focus:text-black w-[350px]"
          value={searchTerm}
          onChange={(e) => searchSongs(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
