import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import { useMatch } from "react-router-dom";
import SingleCard from "../components/SingleCard";
import SongCardSkelton from "../components/SongCardSkelton";

const songsSkeltonArr = [...new Array(10)].map(() => 0);
const Home = ({
	songs,
	setTrackIndex,
	setOpenSearchBar,
	trackIndex,
	openSearchBar,
}) => {
	const [loading, setLoading] = useState(true);
	const isSearchRoute = useMatch("/search");
	useEffect(() => {
		if (!isSearchRoute) {
			setOpenSearchBar(false);
		}
	}, [isSearchRoute]);

	useEffect(() => {
		if (songs.length > 0) {
			setLoading(false);
		}
	}, [songs]);

	return (
		<div className="lg:absolute lg:left-[330px]  lg:top-[82px] lg:w-contain -z-10 bg-theme-gray-900">
			<div
				className={classNames(
					"pt-[50px] pr-4 pl-4 lg:pl-[52px] lg:pr-[70px] grid grid-cols-1 gap-y-4 lg:gap-x-6 overflow-x-hidden lg:grid-cols-2 lg:gap-y-6 xl:grid-cols-3 2xl:grid-cols-4 pb-[88px] lg:pb-[130px]",
					openSearchBar ? "pt-[120px] lg:pt-[50px]" : "pt-[80px] lg:pt-[50px]"
				)}
			>
				{loading &&
					songsSkeltonArr.map((data, index) => {
						return <SongCardSkelton key={index} />;
					})}
				{!loading
					? songs?.map((song, index) => {
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
					  })
					: null}
			</div>
		</div>
	);
};

export default Home;
