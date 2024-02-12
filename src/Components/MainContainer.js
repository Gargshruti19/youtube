import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
	return (
		<div className="w-11/12 mt-4">
			<ButtonList />
			<VideoContainer />
		</div>
	);
};

export default MainContainer;
