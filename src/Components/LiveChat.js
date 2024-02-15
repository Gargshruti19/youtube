import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Utils/chatSlice";

const LiveChat = () => {
	const dispatch = useDispatch();
	const chatMessages = useSelector((store) => store.chat.messages);
	console.log(chatMessages);
	useEffect(() => {
		const i = setInterval(() => {
			//API Polling
			console.log("api");
			dispatch(
				addMessage({
					name: "Shruti garg",
					message: "This is msg.",
				})
			);
		}, 2000);
		return () => {
			clearInterval(i);
		};
	}, []);
	return (
		<div className="m-2 p-2 border border-white w-full h-[450px] rounded-2xl overflow-y-scroll hidden-scrollbar">
			{chatMessages.map((msg, index) => (
				<ChatMessage key={index} name={msg.name} message={msg.message} />
			))}
		</div>
	);
};

export default LiveChat;
