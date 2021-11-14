import { Tooltip } from "@chakra-ui/react";
import React from "react";
import ChakraNextImage from "./chakranextimage";

interface Props {
	image: string;
	desc: string;
}

const TechStub: React.FunctionComponent<Props> = (props) => {
	const { image, desc } = props;

	return (
		<Tooltip label={desc} fontSize="md">
			<ChakraNextImage src={image} />
		</Tooltip>
	);
};

export default TechStub;
