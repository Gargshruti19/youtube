import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
const Header = () => {
	const dispatch = useDispatch();

	const toggleMenuHandler = () => {
		dispatch(toggleMenu());
	};
	return (
		<div className="grid grid-flow-col p-2 shadow-lg items-center">
			<div className="flex items-center gap-5 col-span-1 text-gray-500 ml-6">
				<button className="cursor-pointer" onClick={() => toggleMenuHandler()}>
					<RxHamburgerMenu fontSize={"28px"} />
				</button>
				<a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
					<img
						className="w-28 h-16"
						src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
						alt="logo"
					/>
				</a>
			</div>

			<div className="col-span-10 flex items-center ml-52">
				<input
					className="border-2 border-gray-300 rounded-s-full w-1/2 p-1 pl-4 placeholder:text-gray-500 text-lg"
					type="text"
					placeholder="Search..."
				/>
				<button className="bg-gray-400 px-3 py-2 rounded-e-full border-2 border-gray-300 text-white">
					<IoSearch fontSize={"21px"} />
				</button>
			</div>
			<div className="col-span-1 text-gray-500 cursor-pointer">
				<FaRegUserCircle fontSize={"28px"} />
			</div>
		</div>
	);
};

export default Header;
