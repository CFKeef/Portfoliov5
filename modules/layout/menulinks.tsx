import { Flex, Stack } from "@chakra-ui/react";
import MenuItem from "./menuitem";
import Resume from "/public/GolebiewskiPatryckResume.pdf";

const MenuLinks = () => {
	return (
		<Stack
			as={"nav"}
			spacing={8}
			align="center"
			justify={"space-between"}
			direction={["row"]}
			pt={0}
			display={["none", "none", "flex", "flex"]}
			m={["0", "1rem 0 0 0"]}
		>
			<Flex
				m={"0"}
				w={"50%"}
				spacing={8}
				align="center"
				justify={"space-between"}
			>
				<MenuItem to="/" text={"Home"} />
				<MenuItem to="/projects" text={"Projects"} />
				{/* <MenuItem to="/articles" text={"Articles"} /> */}
				{/* <MenuItem to="/visitors" text={"Visitors"} /> */}
				<MenuItem to={Resume} text={"Resume"} />
			</Flex>
		</Stack>
	);
};

export default MenuLinks;
