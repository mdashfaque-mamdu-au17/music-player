import React from "react";

const Title = ({ title }) => {
	return (
		<h2 className="text-2xl lg:text-[40px] text-white font-bold leading-10">
			{title}
		</h2>
	);
};

export default Title;
