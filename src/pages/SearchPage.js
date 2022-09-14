import classNames from "classnames";
import React, { useEffect } from "react";
import { useMatch } from "react-router-dom";
import SingleCard from "../components/SingleCard";
const SearchPage = ({
	setOpenSearchBar,
	songs,
	searchTerm,
	filteredResults,
	setTrackIndex,
	trackIndex,
	openSearchBar,
	setSearchTerm,
}) => {
	const isSearchRoute = useMatch("/search");
	useEffect(() => {
		if (isSearchRoute) {
			setOpenSearchBar(true);
		} else {
			setOpenSearchBar(false);
		}
	}, [isSearchRoute]);

	useEffect(() => {
		setSearchTerm("");
	}, []);
	const setCorrectIndex = (id) => {
		const index = songs.findIndex((element) => {
			if (element.id === id) {
				return true;
			} else {
				return false;
			}
		});
		return index;
	};

	return (
		<div className="lg:absolute lg:left-[330px] lg:top-[82px] w-contain -z-10 bg-theme-gray-900">
			<div
				className={classNames(
					"pt-[50px] pr-4 pl-4 lg:pl-[52px] lg:pr-[70px] grid grid-cols-1 gap-y-4 lg:gap-x-6 overflow-x-hidden lg:grid-cols-2 lg:gap-y-6 xl:grid-cols-3 2xl:grid-cols-4 pb-[88px]  lg:pb-[130px]",
					openSearchBar ? "pt-[120px] lg:pt-[50px]" : "pt-20 lg:pt-[50px]"
				)}
			>
				{!searchTerm &&
					songs.length > 1 &&
					songs?.map((song, index) => {
						return (
							<div
								key={song?.id}
								className="relative group hover:opacity-50 hover:cursor-pointer"
								onClick={() => {
									setTrackIndex(index);
								}}
							>
								<SingleCard
									songName={song?.attributes?.songName}
									singerName={song?.attributes?.singerName}
									imageSrc={song?.attributes?.image}
									active={trackIndex === index}
								/>
							</div>
						);
					})}

				{searchTerm.length > 0 &&
					filteredResults.length > 0 &&
					filteredResults?.map((song, index) => {
						return (
							<div
								key={song?.id}
								className="relative group hover:opacity-50 hover:cursor-pointer"
								onClick={() => {
									setCorrectIndex(song?.id);
									setTrackIndex(setCorrectIndex(song?.id));
								}}
							>
								<SingleCard
									songName={song?.attributes?.songName}
									singerName={song?.attributes?.singerName}
									imageSrc={song?.attributes?.image}
									active={trackIndex === setCorrectIndex(song?.id)}
								/>
							</div>
						);
					})}

				{searchTerm.length > 0 && filteredResults.length === 0 && (
					<h2 className="w-full text-xl font-bold text-white">
						Oops no matching results
					</h2>
				)}
			</div>
		</div>
	);
};

export default SearchPage;
