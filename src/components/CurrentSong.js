import { FiHeart } from "react-icons/fi";
import React from "react";
import Default from "../assets/default-image.jpeg";
const CurrentSong = ({ imageSrc, songName, singerName }) => {
	return (
		<div className="flex items-center gap-4">
			<div className="w-10 h-10 lg:w-[74px] lg:h-[74px]">
				<img
					src={imageSrc || Default}
					alt=""
					className="w-10 h-10 lg:w-[74px] lg:h-[74px]"
				/>
			</div>
			<div className="flex flex-col">
				<h5 className="text-base font-medium text-white text-ellipsis">
					{songName}
				</h5>
				<p className="text-sm text-theme-gray-700 text-clip">{singerName}</p>
			</div>
			<button className="text-theme-gray-700 hover:text-white">
				<FiHeart size={20} />
			</button>
		</div>
	);
};

export default CurrentSong;
