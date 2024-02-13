import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

const commmentsData = [
	{
		name: "Shruti Garg",
		text: "Lorem ipsum dolor sit amet consectetur, adipiscing elit sociosqu venenatis.",
		replies: [],
	},
	{
		name: "Shruti Garg",
		text: "Lorem ipsum dolor sit amet consectetur, adipiscing elit sociosqu venenatis.",
		replies: [
			{
				name: "Shruti Garg",
				text: "Lorem ipsum dolor sit amet consectetur, adipiscing elit sociosqu venenatis.",
				replies: [],
			},
			{
				name: "Shruti Garg",
				text: "Lorem ipsum dolor sit amet consectetur, adipiscing elit sociosqu venenatis.",
				replies: [
					{
						name: "Shruti Garg",
						text: "Lorem ipsum dolor sit amet consectetur, adipiscing elit sociosqu venenatis.",
						replies: [
							{
								name: "Shruti Garg",
								text: "Lorem ipsum dolor sit amet consectetur, adipiscing elit sociosqu venenatis.",
								replies: [
									{
										name: "Shruti Garg",
										text: "Lorem ipsum dolor sit amet consectetur, adipiscing elit sociosqu venenatis.",
										replies: [],
									},
									{
										name: "Shruti Garg",
										text: "Lorem ipsum dolor sit amet consectetur, adipiscing elit sociosqu venenatis.",
										replies: [],
									},
								],
							},
						],
					},
				],
			},
		],
	},
	{
		name: "Shruti Garg",
		text: "Lorem ipsum dolor sit amet consectetur, adipiscing elit sociosqu venenatis.",
		replies: [],
	},
	{
		name: "Shruti Garg",
		text: "Lorem ipsum dolor sit amet consectetur, adipiscing elit sociosqu venenatis.",
		replies: [
			{
				name: "Shruti Garg",
				text: "Lorem ipsum dolor sit amet consectetur, adipiscing elit sociosqu venenatis.",
				replies: [
					{
						name: "Shruti Garg",
						text: "Lorem ipsum dolor sit amet consectetur, adipiscing elit sociosqu venenatis.",
						replies: [
							{
								name: "Shruti Garg",
								text: "Lorem ipsum dolor sit amet consectetur, adipiscing elit sociosqu venenatis.",
								replies: [],
							},
						],
					},
				],
			},
		],
	},
	{
		name: "Shruti Garg",
		text: "Lorem ipsum dolor sit amet consectetur, adipiscing elit sociosqu venenatis.",
		replies: [],
	},
];

const Comment = ({ data }) => {
	const { name, text, replies } = data;
	return (
		<div className="flex items-center shadow-lg bg-[#222222] p-2 rounded-lg mt-4">
			<div className="px-4">
				<FaRegUserCircle fontSize={"28px"} />
			</div>
			<div className="">
				<p className="font-bold mt-2">{name}</p>
				<p>{text}</p>
			</div>
		</div>
	);
};

const CommentsList = ({ comments }) => {
	return comments.map((comment, index) => (
		<div key={index}>
			<Comment data={comment} />
			<div className="ml-5 border-l border-white pl-5">
				<CommentsList comments={comment.replies} />
			</div>
		</div>
	));
};
const CommentsContainer = () => {
	return (
		<div className="m-5 p-2 px-24 ">
			<CommentsList comments={commmentsData} />
		</div>
	);
};

export default CommentsContainer;
