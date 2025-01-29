import React from "react";

const Header = ({ title = "Default Title" }) => {
	return (
		<header>
			<h1>{title}</h1>
		</header>
	);
};

//old way to do it
// Header.defaultProps = {
// 	title: "Default Title",
// };

export default Header;
