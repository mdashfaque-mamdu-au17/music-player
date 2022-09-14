import classNames from "classnames";
import React from "react";

const ButtonWithIcon = ({ icon, Icon2, size, title, type, ...props }) => {
	const applyStyle = () => {
		switch (type) {
			case "primary":
				return "w-[42px] h-[42px] bg-theme-white-300 hover:bg-theme-white-700 rounded-full flex items-center justify-center";
			case "secondary":
				return "w-full flex items-center gap-4 py-2.5 pl-6 text-theme-gray-700 hover:text-theme-green-700 hover:bg-theme-gray-400 hover:rounded-[10px] transition-all duration-500";
			case "other":
				return "w-full flex items-center gap-4 py-2.5 pl-6 text-theme-gray-700";

			default:
				break;
		}
	};

	return (
		<button className={classNames(applyStyle(), "")} {...props}>
			{icon ? (
				<span className="">
					{icon ? <img src={icon} alt="" className="" /> : null}
				</span>
			) : null}

			{Icon2 ? (
				<span
					className={classNames(type === "other" ? "text-theme-green-700" : "")}
				>
					<Icon2 size={size} />
				</span>
			) : null}
			{title ? <span className="text-xl font-medium">{title}</span> : null}
		</button>
	);
};

export default ButtonWithIcon;
