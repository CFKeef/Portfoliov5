import {Column, ColumnEntry, ColumnHeader, FooterContainer} from "./components";
import Link from "next/link";
import Resume from "../../public/GolebiewskiPatryckResume.pdf";
import React from "react";
import {Link as ChakraLink} from "@chakra-ui/react";

const Footer = (): JSX.Element => {
    return (
        <FooterContainer>
            <Column>
                <ColumnHeader>Pages</ColumnHeader>

                <Link href={"/"} passHref={true}>
                    <ChakraLink as={ColumnEntry}>
                        Home
                    </ChakraLink>
                </Link>
                <Link href={"/projects"} passHref={true}>
                    <ChakraLink as={ColumnEntry}>
                        Projects
                    </ChakraLink>
                </Link>
                <Link href={"/articles"} passHref={true}>
                    <ChakraLink as={ColumnEntry}>
                            Articles
                    </ChakraLink>
                </Link>
            </Column>
            <Column>
                <ColumnHeader>Social</ColumnHeader>
                <ChakraLink
                    as={ColumnEntry}
                    href={"https://github.com/CFKeef"}
                    target="_blank"
                >
                    GitHub
                </ChakraLink>
                <ChakraLink as={ColumnEntry}
                    href={"https://www.linkedin.com/in/patryckg/"}
                    target="_blank"
                >
                    Linkedin
                </ChakraLink>
            </Column>
            <Column>
                <ColumnHeader>Documents</ColumnHeader>
                <ChakraLink as={ColumnEntry}
                            href={Resume}
                            target="_blank"
                >
                    Resume
                </ChakraLink>
            </Column>
        </FooterContainer>
    );
};

export default Footer;