import { FunctionComponent } from "react";
import Layout from "../../modules/layout/layout";
import { Box, Heading, Text } from "@chakra-ui/react";
import ProjectList from "../../modules/projects/components/projectlist";
import { Resp } from "../../common/interfaces";

interface Props {
	data: Resp;
}

const Index: FunctionComponent<Props> = ({ data }) => {
	return (
		<Layout>
			<Box m={["0", "1rem 0 0 0"]} w={"100%"}>
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
					<ProjectList data={data} />
				</Box>
			</Box>
		</Layout>
	);
};

export async function getStaticProps() {
	const res = await fetch("https://ceefgo.herokuapp.com/api/v1/projects", {
		method: "GET",
		headers: {
			"User-Agent":
				"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
			Accept: "application/json; charset=UTF-8",
		},
	})
		.then((res) => res.json())
		.catch((err) => console.log(err));

	const projects = Object.values(res.projects);

	return {
		props: {
			data: {
				count: projects.length,
				commits: Object.values(res.commits),
				projects: projects,
			},
		},
		revalidate: 86400,
	};
}

export default Index;
