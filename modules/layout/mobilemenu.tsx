import React from "react";
import { Box } from "@chakra-ui/react";
import MenuItem from "./menuitem";
import Resume from "/public/GolebiewskiPatryckResume.pdf";

const Mobilemenu = () => {
	return (
		<Box
			as={"ul"}
			bg={"#191D3A"}
			borderRadius={"8"}
			p={"1rem"}
			display={"grid"}
			gridGap={"1rem"}
		>
			<MenuItem to="/" text={"Home"} />
			<MenuItem to="/projects" text={"Projects"} />
			{/* <MenuItem to="/articles" text={"Articles"} /> */}
			{/* <MenuItem to="/visitors" text={"Visitors"} /> */}
			<MenuItem to={Resume} text={"Resume"} />
		</Box>
	);
};

export default Mobilemenu;
