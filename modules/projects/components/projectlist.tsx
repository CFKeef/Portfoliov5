import { FunctionComponent } from "react";
import { Box, Grid } from "@chakra-ui/react";
import ProjectCard from "./projectcard";
import { Resp } from "../../../common/interfaces";

interface Props {
	data: Resp;
}

const ProjectList: FunctionComponent<Props> = ({ data }) => {
	const handleRender = () => {
		return generateProjectCards();
	};

	const generateProjectCards = () => {
		return data?.projects.map((project, index) => {
			return (
				<ProjectCard
					key={project.repoName}
					commit={data.commits[index]}
					data={project}
				/>
			);
		});
	};

	return (
		<Box>
			<Grid
				templateRows={["auto", "repeat(auto,1fr)"]}
				templateColumns={["1fr", "repeat(2, 1fr)"]}
				gap={"1rem"}
				margin={"1rem 0"}
			>
				{handleRender()}
			</Grid>
		</Box>
	);
};

export default ProjectList;
