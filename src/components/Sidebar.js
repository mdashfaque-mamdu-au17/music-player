import { BiSearch } from "react-icons/bi";
import { HiOutlineViewGrid } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import React from "react";
import MLogo from "../assets/M.svg";
import Logo from "../assets/Group-1972.svg";
import ButtonWithIcon from "./ButtonWithIcon";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
	const navigate = useNavigate();
	return (
		<div className="relative pl-2 pr-3 pt-9 overscroll-none">
			<div
				className="flex gap-2.5 pl-6 hover:cursor-pointer"
				onClick={() => navigate("/")}
			>
				<div className="w-[52px] h-[52px] bg-theme-green-700 rounded-full flex items-center justify-center">
					<img src={MLogo} alt="" className="w-8 h-7" />
				</div>
				<div className="h-10 w-36">
					<img src={Logo} alt="" />
				</div>
			</div>

			<div className="mt-[26px] ">
				<ButtonWithIcon
					type="secondary"
					Icon2={BiSearch}
					size={24}
					title="Search"
					onClick={() => navigate("/search")}
				/>
				<ButtonWithIcon
					type="secondary"
					Icon2={HiOutlineViewGrid}
					size={24}
					title="Your Library"
				/>

				<div className="ml-6 bg-theme-gray-300 mt-5 h-[1.33px] mr-5"></div>
			</div>
			{/* <button className="w-full flex items-center gap-4 py-2.5 pl-6   text-theme-gray-700 hover:text-theme-green-700 hover:bg-theme-gray-400 hover:rounded-[10px]">
				<BiSearch size={24} />
				<span className="text-xl font-medium">Search </span>
			</button> */}

			<div className="fixed left-0 w-[330px] bottom-[130px]">
				<ButtonWithIcon
					type="other"
					Icon2={AiFillHome}
					size={24}
					title="Welcome to Medea!"
				/>
			</div>
		</div>
	);
};

export default Sidebar;
