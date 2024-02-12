import React from "react";
import Button from "./Button";

const listItems = [
	"All",
	"Music",
	"Comedy",
	"Drama",
	"Technology",
	"Cricket",
	"News",
	"Science",
	"Cooking",
	"Coding",
	"ReactJS",
	"Accounting",
];
const ButtonList = () => {
	return (
		<div className="flex">
			{listItems.map((list) => (
				<Button key={list} name={list} />
			))}
		</div>
	);
};

export default ButtonList;
