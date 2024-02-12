import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { IoMusicalNotesSharp } from "react-icons/io5";
import { MdSportsCricket } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import { MdMovieEdit } from "react-icons/md";
import { IoNewspaper } from "react-icons/io5";
import { FaPodcast } from "react-icons/fa6";
import { SiCodingninjas } from "react-icons/si";
import { GrTechnology } from "react-icons/gr";
const Sidebar = () => {
	const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
	if (!isMenuOpen) return null; //early return
	return (
		<div className="p-5 shadow-md w-2/12">
			<ul className="flex flex-col gap-3 pb-14">
				<Link to="/">
					<li className=" bg-[#222222] rounded-xl px-2 py-1 flex items-center gap-2 text-[17px] font-sans hover:bg-[#222222] hover:rounded-xl hover:px-2 hover:py-1 transition-all duration-300">
						<IoHomeSharp />
						Home
					</li>
				</Link>
				<li className="flex items-center gap-2 text-[17px] font-sans hover:bg-[#222222] hover:rounded-xl hover:px-2 hover:py-1 transition-all duration-300">
					<SiYoutubeshorts />
					Shorts
				</li>
				<li className="flex items-center gap-2 text-[17px] font-sans hover:bg-[#222222] hover:rounded-xl hover:px-2 hover:py-1 transition-all duration-300">
					<MdOutlineSubscriptions />
					Subscriptions
				</li>
			</ul>
			<h2 className="font-bold pt-2 pb-5 text-xl border-t border-gray-100 border-opacity-50 pl-3">
				Explore
			</h2>
			<ul className="flex flex-col gap-6">
				<li className="flex items-center gap-2 text-[17px] font-sans hover:bg-[#222222] hover:rounded-xl hover:px-2 hover:py-1 transition-all duration-300">
					<IoMusicalNotesSharp />
					Music
				</li>
				<li className="flex items-center gap-2 text-[17px] font-sans hover:bg-[#222222] hover:rounded-xl hover:px-2 hover:py-1 transition-all duration-300">
					<GrTechnology />
					Technology
				</li>
				<li className="flex items-center gap-2 text-[17px] font-sans hover:bg-[#222222] hover:rounded-xl hover:px-2 hover:py-1 transition-all duration-300">
					<FaPodcast />
					Podcast
				</li>
				<li className="flex items-center gap-2 text-[17px] font-sans hover:bg-[#222222] hover:rounded-xl hover:px-2 hover:py-1 transition-all duration-300">
					<IoNewspaper />
					News
				</li>
				<li className="flex items-center gap-2 text-[17px] font-sans hover:bg-[#222222] hover:rounded-xl hover:px-2 hover:py-1 transition-all duration-300">
					<MdMovieEdit />
					Movies
				</li>
				<li className="flex items-center gap-2 text-[17px] font-sans hover:bg-[#222222] hover:rounded-xl hover:px-2 hover:py-1 transition-all duration-300">
					<MdSportsCricket />
					Sports
				</li>
				<li className="flex items-center gap-2 text-[17px] font-sans hover:bg-[#222222] hover:rounded-xl hover:px-2 hover:py-1 transition-all duration-300">
					<SiCodingninjas />
					Coding
				</li>
				<li className="flex items-center gap-2 text-[17px] font-sans hover:bg-[#222222] hover:rounded-xl hover:px-2 hover:py-1 transition-all duration-300">
					<SiYoutubegaming />
					Gaming
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
