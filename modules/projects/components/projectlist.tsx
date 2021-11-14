import React, { useState, useEffect } from "react";
import { fetchPaginatedProjects } from "../../../common/utils/functions";
import { Box, Grid, Spinner } from "@chakra-ui/react";
import ProjectCard from "./projectcard";
import { ProjectSpace } from "../../../common/interfaces";

interface Resp {
	commits: ProjectSpace.Commit[];
	projects: ProjectSpace.Project[];
	count: number;
}

const ProjectList = () => {
	const [data, setData] = useState<Resp>();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchProjects = async () => {
			const res = await fetchPaginatedProjects();

			if (res) {
				const projects = Object.values(res.projects);
				setData({
					count: projects.length,
					commits: Object.values(res.commits),
					projects: projects,
				});
				setIsLoading(false);
			}
		};

		fetchProjects();
	}, []);

	const handleRender = () => {
		if (isLoading)
			return (
				<React.Fragment>
					<Spinner />
				</React.Fragment>
			);
		else if (data) {
			return generateProjectCards();
		}
	};

	const generateProjectCards = () => {
		return data?.projects?.map((project, index) => {
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
