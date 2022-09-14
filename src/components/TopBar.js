import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { HiOutlineViewGrid } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import { TbPremiumRights } from "react-icons/tb";
import MLogo from "../assets/Group-1972.svg";
import classNames from "classnames";

const tabsArray = [
	{
		id: 1,
		name: "Home",
		to: "/",
		Icon: AiFillHome,
	},
	{
		id: 2,
		name: "Search",
		to: "/search",
		Icon: BiSearch,
	},
	{
		id: 3,
		name: "Your Library",
		to: "/",
		Icon: HiOutlineViewGrid,
	},
	{
		id: 4,
		name: "Premium",
		to: "/",
		Icon: TbPremiumRights,
	},
];
const TopBar = () => {
	const [value, setValue] = useState(0);
	return (
		<div className={classNames("flex items-center justify-between")}>
			{tabsArray?.map((item, index) => {
				return (
					<Link key={item?.id} to={item?.to} onClick={() => setValue(index)}>
						<div
							className={classNames(
								"flex flex-col items-center",
								value === index ? "text-white" : "text-theme-white-300"
							)}
						>
							<item.Icon size={24} />
							<h6 className="text-xs">{item?.name}</h6>
						</div>
					</Link>
				);
			})}
		</div>
	);
};

export default TopBar;
