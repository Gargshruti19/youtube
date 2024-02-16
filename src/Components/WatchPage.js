/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
	const [searchParams] = useSearchParams();
	// console.log(searchParams.get("v"));
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(closeMenu());
	}, []);
	return (
		<div className="flex flex-col min-h-screen pt-2 w-full">
			<div className="px-24 flex w-full gap-3">
				<div>
					<iframe
						className="rounded-[10px]"
						width="950"
						height="450"
						src={
							"https://www.youtube.com/embed/" +
							searchParams.get("v") +
							"?&autoplay=1"
						}
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen
					></iframe>
				</div>
				<div className="w-full">
					<LiveChat />
				</div>
			</div>
			<CommentsContainer />
		</div>
	);
};

export default WatchPage;
