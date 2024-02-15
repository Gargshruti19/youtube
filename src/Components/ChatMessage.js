import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

const ChatMessage = ({ name, message }) => {
	return (
		<div className="flex items-center shadow-sm shadow-[#242323] p-1">
			<div className=" text-white cursor-pointer">
				<FaRegUserCircle fontSize={"20px"} />
			</div>
			<span className="font-semibold px-3 text-base">{name}</span>
			<span className="text-sm px-3">{message}</span>
		</div>
	);
};

export default ChatMessage;
