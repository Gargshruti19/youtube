/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../Utils/constants";
import { PiClockCounterClockwise } from "react-icons/pi";
import { cacheResults } from "../Utils/searchSlice";
const Header = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [suggestions, setSuggestions] = useState([]);
	const [showSuggestions, setShowSuggestions] = useState(false);
	const searchCache = useSelector((store) => store.search);
	const dispatch = useDispatch();

	useEffect(() => {
		//make an api call after each key press
		// but if the difference btw 2 api calls is <200ms
		// decline the call

		const timer = setTimeout(() => {
			if (searchCache[searchQuery]) {
				setSuggestions(searchCache[searchQuery]);
			} else {
				getSearchSuggestions();
			}
		}, 200);

		return () => {
			clearTimeout(timer);
		};
	}, [searchQuery]);

	const getSearchSuggestions = async () => {
		const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
		const json = await data.json();
		setSuggestions(json[1]);

		dispatch(
			cacheResults({
				[searchQuery]: json[1],
			})
		);
	};

	const toggleMenuHandler = () => {
		dispatch(toggleMenu());
	};
	return (
		<div className="grid grid-flow-col p-2 shadow-white shadow-sm items-center">
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
					<h2 className="font-bold text-white text-xl">YouTube</h2>
				</a>
			</div>

			<div className="col-span-10 px-10 ">
				<div className="flex items-center ml-52 pb-1">
					<input
						className="border border-gray-100 border-opacity-50 rounded-s-full w-1/2 p-1 pl-10 placeholder:text-gray-500 text-lg bg-black text-white"
						type="text"
						placeholder="Search..."
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						onFocus={() => setShowSuggestions(true)}
						onBlur={() => setShowSuggestions(false)}
					/>
					<button className="bg-[#222222] px-5 py-2 rounded-e-full border border-gray-300 border-opacity-50 text-gra-500">
						<IoSearch fontSize={"20px"} />
					</button>
				</div>
				{showSuggestions && (
					<div className="absolute ml-[212px] bg-[#222222] w-[27.5rem] rounded-lg shadow-lg">
						<ul className="flex flex-col gap-3 w-[27.5rem] px-2">
							{suggestions.map((s) => (
								<li
									key={s}
									className=" py-1 flex items-center gap-4 text-[15px] hover:bg-[#383838] font-sans"
								>
									<PiClockCounterClockwise fontSize={"20px"} />
									{s}
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
			<div className="col-span-1 text-gray-400 cursor-pointer">
				<FaRegUserCircle fontSize={"28px"} />
			</div>
		</div>
	);
};

export default Header;
