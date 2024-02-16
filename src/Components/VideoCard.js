import React from "react";

const VideoCard = ({ videoInfo }) => {
	const { snippet, statistics } = videoInfo;
	const { channelTitle, title, thumbnails } = snippet;
	return (
		<div className="p-2 m-2 w-72 shadow-md cursor-pointer">
			<img
				className="rounded-lg w-full"
				src={thumbnails?.medium?.url}
				alt="thumbnail"
			/>
			<ul>
				<li className="font-bold py-2">{title}</li>
				<li>{channelTitle}</li>
				<li>{statistics?.viewCount} views</li>
			</ul>
		</div>
	);
};

export default VideoCard;
