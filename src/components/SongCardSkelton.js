import React from "react";

const SongCardSkelton = () => {
	return (
		<div className="flex items-center gap-4 lg:block animate-pulse">
			<div className="w-12 h-12 lg:w-[277px] lg:h-[275px] border-2 border-white bg-theme-gray-500"></div>
			<div className="lg:pt-1">
				<div className="w-24 h-3 rounded-full lg:w-28 lg:h-4 bg-theme-gray-700"></div>
				<div className="h-2 mt-1 rounded-full w-22 lg:w-24 bg-theme-gray-700"></div>
			</div>
		</div>
	);
};

export default SongCardSkelton;
