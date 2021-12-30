import React from "react";
import Layout from "../../modules/layout/layout";
import { Box, Text } from "@chakra-ui/react";

const Index = () => {
	return (
		<Layout>
			<Box
				bg={"#191D3A"}
				borderRadius={8}
				m={"0"}
				w={"75%"}
				p={"1rem 0"}
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
			>
				<Text>Stay Tuned</Text>
			</Box>
		</Layout>
	);
};

export default Index;
