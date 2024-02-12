/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
	const [searchParams] = useSearchParams();
	console.log(searchParams.get("v"));
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(closeMenu());
	}, []);
	return (
		<div className="px-24 ">
			<iframe
				className="rounded-[10px]"
				width="950"
				height="500"
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
	);
};

export default WatchPage;
