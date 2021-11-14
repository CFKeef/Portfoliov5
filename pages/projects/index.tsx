import React from "react";
import Layout from "../../modules/layout/layout";
import { Box, Heading, Text } from "@chakra-ui/react";
import ProjectList from "../../modules/projects/components/projectlist";

const Index = () => {
	return (
		<Layout>
			<Box as="main" m={["0", "1rem 0 0 0"]} w={"100%"}>
				<Heading
					as={"h1"}
					fontSize={["4xl", "5xl"]}
					textAlign={"left"}
					w={"100%"}
				>
					Here&apos;s what I&apos;ve done
				</Heading>
				<Text fontSize={"md"} as={"p"} m={"2rem 0"}>
					Current tech stack consists of Typescript, NextJS and React
					for Front end. On the backend I&apos;ve worked with
					Javascript, Java and currently working to learn Golang!
				</Text>

				<Box m={"2rem 0"}>
					<ProjectList />
				</Box>
			</Box>
		</Layout>
	);
};

export default Index;
