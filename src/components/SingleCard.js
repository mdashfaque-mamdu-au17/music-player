import classNames from "classnames";
import React from "react";
import Default from "../assets/default-image.jpeg";

const SingleCard = ({ imageSrc, songName, singerName, active }) => {
	return (
		<>
			<div className="flex items-center gap-4 lg:block">
				<div className="w-12 h-12 lg:w-[277px] lg:h-[275px]">
					<img
						src={imageSrc || Default}
						alt=""
						className="object-cover w-12 h-12 lg:w-[277px] lg:h-[275px]"
					/>
				</div>
				<div className="lg:pt-1">
					<h3
						className={classNames(
							"text-base font-bold leading-5 ",
							active ? "text-theme-green-700" : "text-theme-white-700"
						)}
					>
						{songName}
					</h3>
					<h3 className="text-base font-bold leading-5 text-theme-gray-700 ">
						{singerName}
					</h3>
				</div>
			</div>
		</>
	);
};

export default SingleCard;
