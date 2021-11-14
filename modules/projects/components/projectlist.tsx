import React, { useState } from "react";
import { GetStaticProps } from "next";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import { paginatedProjects } from "../../../common/interfaces";
import {
	fetchFilteredPaginatedProjects,
	fetchFilters,
	fetchPaginatedProjects,
} from "../../../common/utils/functions";
import { Box, Button, Grid, Spinner, Text } from "@chakra-ui/react";
import { ListControlsContainer } from "./index";
import FilterSelect from "./filterselect";
import ProjectCard from "./projectcard";

const fetchProjects = async (page: number) => {
	return await fetchPaginatedProjects(page);
};

const options = [
	{ value: "react", label: "React" },
	{ value: "typescript", label: "Typescript" },
	{ value: "nextjs", label: "NextJS" },
	{ value: "sql", label: "SQL" },
	{ value: "express", label: "Express" },
	{ value: "nosql", label: "NoSQL" },
	{ value: "redux", label: "Redux" },
];

const ProjectList = () => {
	const [page, setPage] = useState(1);
	const [isFiltered, setIsFiltered] = useState(false);
	const [filteredData, setFilteredData] =
		useState<paginatedProjects.RootObject>();

	const { isFetching, isLoading, data } = useQuery(["cardData", page], () =>
		fetchProjects(page)
	);

	const { data: filterData } = useQuery("filter", fetchFilters);

	const handleRender = () => {
		if (isLoading || isFetching)
			return (
				<React.Fragment>
					<Spinner />
				</React.Fragment>
			);
		else if (data) {
			return generateProjectCards();
		}
	};

	const generateControls = () => {
		const count = isFiltered
			? filteredData?.projects.totalPages
			: data?.projects.totalPages;
		const arr = Array.from(Array(count), (_e, i) => i + 1);

		return arr.map((num) => {
			const selected: boolean = num == page;

			return (
				<Button
					bg={selected ? "neonPink" : "#191D3A"}
					key={"page" + num + "control"}
					onClick={() => setPage(num)}
				>
					{num}
				</Button>
			);
		});
	};

	const generateProjectCards = () => {
		if (!isFiltered)
			return data?.projects?.items?.map((project, index) => {
				return (
					<ProjectCard
						key={project.repoName}
						commit={data.commits.items[index]}
						data={project}
					/>
				);
			});
		else {
			return filteredData?.projects?.items.map((project) => {
				const commit = data?.commits.items.find(
					(commit) =>
						commit.project.toLowerCase() ===
						project.repoName.toLowerCase()
				);

				return (
					<ProjectCard
						key={project.repoName}
						commit={
							commit
								? commit
								: {
										project: project.repoName,
										message: "Updated index.tsx",
										commitPosted: new Date(),
								  }
						}
						data={project}
					/>
				);
			});
		}
	};

	const handleSelect = async (value: string) => {
		let select = filterData?.filters.find(
			(filter) => filter.value === value
		);

		if (select && data) {
			setIsFiltered(true);
			setPage(1);
			const data = await fetchFilteredPaginatedProjects(
				page,
				select.label
			);

			if (data) setFilteredData(data);
		} else {
			setIsFiltered(false);
			setPage(1);
		}
	};

	return (
		<Box>
			<Box w={"50%"}>
				{filterData ? (
					<FilterSelect
						data={filterData.filters}
						onSelect={handleSelect}
					/>
				) : (
					<FilterSelect data={options} onSelect={handleSelect} />
				)}
			</Box>
			{data && <Text>Results</Text>}
			<Grid>{handleRender()}</Grid>
			{data && (
				<ListControlsContainer>
					<ul>{generateControls()}</ul>
				</ListControlsContainer>
			)}
		</Box>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery("cardData", () => fetchProjects(0));

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
};

export default ProjectList;
