import React from "react";

const Button = ({ name }) => {
	return (
		<div>
			<button className="px-3 py-1 rounded-lg m-2 bg-[#222222] text-white font-sans text-sm font-bold">
				{name}
			</button>
		</div>
	);
};

export default Button;
