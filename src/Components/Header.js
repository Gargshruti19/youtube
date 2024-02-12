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
			<div className="flex items-center gap-3 col-span-1 text-gray-500 ml-6">
				<button className="cursor-pointer" onClick={() => toggleMenuHandler()}>
					<RxHamburgerMenu fontSize={"24px"} />
				</button>
				<a href="/" className="flex items-center">
					<img
						className="w-10 h-10"
						src="https://i.imghippo.com/files/My6Fc1707741618.png"
						alt="logo"
					/>
					<h2 className="font-bold text-white text-xl">Youtube</h2>
				</a>
			</div>

			<div className="col-span-10 flex items-center ml-52">
				<input
					className="border border-gray-100 border-opacity-50 rounded-s-full w-1/2 p-1 pl-4 placeholder:text-gray-500 text-lg bg-black text-white"
					type="text"
					placeholder="Search..."
				/>
				<button className="bg-[#222222] px-5 py-2 rounded-e-full border border-gray-300 border-opacity-50 text-gra-500">
					<IoSearch fontSize={"20px"} />
				</button>
			</div>
			<div className="col-span-1 text-gray-400 cursor-pointer">
				<FaRegUserCircle fontSize={"28px"} />
			</div>
		</div>
	);
};

export default Header;
