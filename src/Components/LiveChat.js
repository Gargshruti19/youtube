/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Utils/chatSlice";
import { generateRandomName, randomMessage } from "../Utils/helper";
import { IoMdSend } from "react-icons/io";
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
					name: generateRandomName(),
					message: randomMessage(20) + " 🚀",
				})
			);
		}, 2000);
		return () => {
			clearInterval(i);
		};
	}, []);
	return (
		<>
			<div className="m-2 p-2 border border-white w-full h-[450px] rounded-2xl overflow-y-scroll hidden-scrollbar flex flex-col-reverse">
				<div>
					{chatMessages.map((msg, index) => (
						<ChatMessage key={index} name={msg.name} message={msg.message} />
					))}
				</div>
			</div>
			<div className="w-full flex items-center mt-4 mx-2 gap-2">
				<input
					className="bg-[#272727] border-0 rounded-full text-gray-500 px-3 text-[15px] py-1 w-full"
					type="text"
					placeholder="Chat..."
				/>
				<div className="text-[#353434] text-2xl">
					<IoMdSend />
				</div>
			</div>
		</>
	);
};

export default LiveChat;
