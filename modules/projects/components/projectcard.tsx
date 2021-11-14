import { Box, Text } from "@chakra-ui/layout";
import React from "react";
import { Commit, Fields } from "../../../common/interfaces";

interface Props {
	data: Fields;
	commit: Commit;
}

const ProjectCard: React.FunctionComponent<Props> = (props) => {
	const { data, commit } = props;

	return (
		<Box>
			<Text>{data.title}</Text>
			<Text>{data.description}</Text>
		</Box>
	);
};

export default ProjectCard;
