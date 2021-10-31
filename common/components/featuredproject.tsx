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
            <ChakraNextImage
                src={image}
                alt={imageAlt}
                transition={"all 0.25s cubic-bezier(0.645,0.045,0.355,1)"}
                zIndex={1}
                w={["auto", 475]}
                h={["auto", 330]}
                gridColumn={["",reverse  ? "6/-1" :"1 / 8"]}
                gridRow={"1"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                _after={{
                    display:"none"
                }}
                opacity={["1",".5"]}
                _hover={{
                    opacity: "1"
                }}
                cursor={"pointer"}
                to={siteLink ?? gitLink}
            />

            <Box
                h={"80%"}
                zIndex={"3"}
                width={"100%"}
                gridColumn={reverse ? "1 / 8" : "7/-1"}
                gridRow={"1"}
                gridTemplateRows={"repeat(4,1fr)"}
                gridRowGap={"1rem"}
                display={["none", "block"]}
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
                    fontSize={"3xl"}
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
                        bg={"#191D3A"}
                        _hover={{
                            bg: "deeppink"
                        }}
                    />
                    {siteLink && <IconButton
                        aria-label={"Site link"}
                        icon={<FiExternalLink />}
                        onClick={() => openLinkInNewTab(siteLink, window)}
                        ml={"1rem"}
                        bg={"#191D3A"}
                        _hover={{
                            bg: "deeppink"
                        }}
                    />
                    }
                </Flex>
            </Box>

            <Box
                display={["flex", "none"]}
                flexDirection={"column"}
            >
                <Text
                    as={"span"}
                    display={"block"}
                    color={"deeppink"}
                    w={"100%"}
                    m={".5rem 0"}
                    textAlign={"left"}
                >
                    Featured Project
                </Text>
                <Heading
                    as={"h4"}
                    fontSize={"2xl"}
                    w={"100%"}
                    textAlign={"left"}
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
                          textAlign={"center"}
                          w={"100%"}
                          fontSize={"sm"}
                          color={"gray.200"}
                    >{description}</Text>
                </Box>
                <Flex
                    justify={"center"}
                >
                    <IconButton
                        aria-label={"Github repo link"}
                        icon={<ImGithub />}
                        onClick={() => openLinkInNewTab(gitLink, window)}
                        bg={"#191D3A"}
                        _hover={{
                            bg: "deeppink"
                        }}
                    />
                    {siteLink && <IconButton
                        aria-label={"Site link"}
                        icon={<FiExternalLink />}
                        onClick={() => openLinkInNewTab(siteLink, window)}
                        ml={"1rem"}
                        bg={"#191D3A"}
                        _hover={{
                            bg: "deeppink"
                        }}
                    />
                    }
                </Flex>
            </Box>

        </>
    )
};

export default FeaturedProject;