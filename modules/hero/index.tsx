import React from "react";
import { Box, Heading, List, ListItem, ListIcon, Text } from "@chakra-ui/react";
import Anchor from "../../common/components/anchor";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { IoMdBuild } from "react-icons/io";
import { FaBook } from "react-icons/fa";
import { BsFillPencilFill } from "react-icons/bs";

const ListElement: React.FunctionComponent = ({ children }) => {
	return (
		<ListItem
			display={"flex"}
			justifyContent={"flex-start"}
			flexDirection={"row"}
			alignItems={"center"}
		>
			{children}
		</ListItem>
	);
};

const Hero = () => {
	return (
		<Box m={["0", "1rem 0 0 0"]}>
			<Text as={"span"} color={"neonPink"} fontSize={["2xl", "3xl"]}>
				Hi, my name is
			</Text>
			<Heading as={"h1"} fontSize={["4xl", "5xl"]}>
				Patryck Golebiewski
			</Heading>
			<Text as={"span"} color={"gray.300"} fontSize={["2xl", "2xl"]}>
				I&apos;m into building stuff for the web.
			</Text>

			<Text fontSize={"md"} as={"p"} m={"2rem 0"}>
				My interest in the web comes from spending my childhood playing
				random MMOs and browsing the web. I love being able to
				contribute to it, I get satisfaction from building things that
				can be accessed by people worldwide and most of all I love the
				constant learning that comes from this field.
			</Text>

			<Text as={"p"}>
				Currently looking for Early Careers/Junior positions in Software
				Engineering
			</Text>

			<Box m={"2rem 0"}>
				<Text as={"span"} color={"neonPink"} fontSize={"2xl"}>
					Things to do while you&apos;re here!
				</Text>
				<List m={"1rem 0"} spacing={"1rem"}>
					<ListElement>
						<ListIcon as={IoMdBuild} />
						<Anchor to={"/projects"} text={"Check out my projects"}>
							<ArrowForwardIcon />
						</Anchor>
					</ListElement>
					<ListElement>
						<ListIcon as={FaBook} />
						<Anchor
							to={"/articles"}
							text={"Read through my rantings"}
						>
							<ArrowForwardIcon />
						</Anchor>
					</ListElement>
					<ListElement>
						<ListIcon as={BsFillPencilFill} />
						<Anchor
							to={"/visitors"}
							text={"Sign your name stranger️"}
						>
							<ArrowForwardIcon />
						</Anchor>
					</ListElement>
				</List>
			</Box>
		</Box>
	);
};

export default Hero;
