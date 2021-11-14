import { Box, Text, Heading, Wrap, WrapItem, Link } from "@chakra-ui/layout";
import React from "react";
import { Fields, ProjectSpace } from "../../../common/interfaces";

interface Props {
	data: Fields;
	commit: ProjectSpace.Commit;
}

const ProjectCard: React.FunctionComponent<Props> = (props) => {
	const { data } = props;

	return (
		<Box
			bg={"#191D3A"}
			borderRadius={8}
			padding={"1rem"}
			m={"0"}
			display={"grid"}
			gridTemplateRows={".1fr auto .2fr "}
			gridTemplateColumns={"1fr"}
			gridRowGap={"1rem"}
			border={"2px solid neonPink"}
		>
			<Box
				display={"grid"}
				gridTemplateRows={"1fr"}
				gridTemplateColumns={[".70fr .30fr", ".80fr .20fr"]}
				alignItems={"center"}
			>
				<Heading m={"0"} as={"h4"} fontSize={"2xl"} w={"100%"}>
					{data.title}
				</Heading>
				<Box
					display={"flex"}
					justifyContent={"flex-end"}
					alignItems={"center"}
				>
					<Link w={"100%"} to={data.repoLink} target={"_blank"}>
						View Repo
					</Link>
				</Box>
			</Box>

			<Text
				as={"p"}
				w={"100%"}
				fontSize={"md"}
				color={"gray.200"}
				minH={"5rem"}
			>
				{data.description}
			</Text>
			<Wrap w={"100%"} justify={"flex-start"} align={"flex-start"}>
				{data.tech.map((tech) => (
					<WrapItem
						key={data.repoName + tech}
						color={"neonPink"}
						fontSize={"sm"}
					>
						{tech}
					</WrapItem>
				))}
			</Wrap>
		</Box>
	);
};

export default ProjectCard;
