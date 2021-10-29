import React from 'react';
import {Box, Flex, Heading, IconButton, Text} from "@chakra-ui/react";
import ChakraNextImage from "./chakranextimage";
import {ImGithub} from "react-icons/im";
import {FiExternalLink} from "react-icons/fi";
import {openLinkInNewTab} from "../utils/functions";

interface Props {
    name: string;
    description: string;
    image: StaticImageData;
    imageAlt: string;
    gitLink: string;
    siteLink?: string;
    reverse?: boolean;
}

const FeaturedProject:React.FunctionComponent<Props> = (props) => {
    const { name, description, image, imageAlt, gitLink, siteLink, reverse } = props;

    return (
        <>
            <Box
                pos={"absolute"}
                bg={"rgba(38,25,58,.7)"}
                zIndex={2}
                height={["100%", 330]}
                width={["100%", 475]}
                content={'""'}
                top={0}
                right={reverse ? -2 : "auto"}
                borderRadius={8}
                transition={"all .2s"}
                _hover={{
                    bg: "none"
                }}
            />
            <ChakraNextImage
                src={image}
                alt={imageAlt}
                transition={"all 0.25s cubic-bezier(0.645,0.045,0.355,1)"}
                zIndex={1}
                w={["auto", 475]}
                h={["auto", 330]}
                gridColumn={reverse  ? "6/-1" :"1 / 8"}
                gridRow={"1"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
            />
            <Box
                h={"80%"}
                zIndex={"3"}
                width={"100%"}
                gridColumn={reverse ? "1 / 8" : "7/-1"}
                gridRow={"1"}
                gridTemplateRows={"repeat(4,1fr)"}
                gridRowGap={"1rem"}

            >
                <Text
                    as={"span"}
                    display={"block"}
                    color={"deeppink"}
                    w={"100%"}
                    m={".5rem 0"}
                    textAlign={reverse ? "left" :"right"}
                >
                    Featured Project
                </Text>
                <Heading
                    as={"h4"}
                    fontSize={"2xl"}
                    w={"100%"}
                    textAlign={reverse ? "left" :"right"}
                >
                    {name}
                </Heading>
                <Box
                    bg={"#191D3A"}
                    borderRadius={8}
                    padding={"1rem"}
                    m={"1rem 0"}
                >
                    <Text as={"p"}
                          textAlign={reverse ? "left" :"right"}
                          w={"100%"}
                          fontSize={"sm"}
                          color={"gray.200"}
                    >{description}</Text>
                </Box>
                <Flex
                    justify={reverse ? "flex-start" : "flex-end"}
                >
                    <IconButton
                        aria-label={"Github repo link"}
                        icon={<ImGithub />}
                        onClick={() => openLinkInNewTab(gitLink, window)}
                        bg={"transparent"}
                        _hover={{
                            bg: "transparent",
                            opacity: ".8"
                        }}
                    />
                    {siteLink && <IconButton
                        aria-label={"Site link"}
                        icon={<FiExternalLink />}
                        onClick={() => openLinkInNewTab(siteLink, window)}
                        bg={"transparent"}
                        _hover={{
                            bg: "transparent",
                            opacity: ".8"
                        }}
                    />
                    }
                </Flex>
            </Box>
        </>
    )
};

export default FeaturedProject;