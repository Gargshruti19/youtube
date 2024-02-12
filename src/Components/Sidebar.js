import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
	const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
	if (!isMenuOpen) return null; //early return
	return (
		<div className="p-5 shadow-md w-52">
			<ul>
				<li>Home</li>
				<li>Shorts</li>
				<li>Videos</li>
				<li>Live</li>
			</ul>
			<h2 className="font-bold pt-5">Subscriptions</h2>
			<ul>
				<li>Music</li>
				<li>Sports</li>
				<li>Gaming</li>
				<li>Movies</li>
			</ul>
			<h2 className="font-bold pt-5">Watch Later</h2>
			<ul>
				<li>Music</li>
				<li>Sports</li>
				<li>Gaming</li>
				<li>Movies</li>
			</ul>
		</div>
	);
};

export default Sidebar;
