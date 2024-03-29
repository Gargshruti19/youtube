import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../Utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
	const [videos, setVideos] = useState([]);
	useEffect(() => {
		getVideos();
	}, []);
	if (videos === undefined) return null;
	const getVideos = async () => {
		const data = await fetch(YOUTUBE_VIDEO_API);
		const json = await data.json();
		setVideos(json?.items);
	};
	return (
		<div className="flex flex-wrap mt-4">
			{videos &&
				videos.map((video) => (
					<Link key={video?.id} to={"/watch?v=" + video?.id}>
						<VideoCard videoInfo={video} />
					</Link>
				))}
		</div>
	);
};

export default VideoContainer;
