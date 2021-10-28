import React from 'react';
import {ChakraProps} from "@chakra-ui/react";
import Link from 'next/link'
import { Link as ChakraLink, Text } from "@chakra-ui/react"

interface Props  {
    to: string;
    text: string;
    styles?: ChakraProps;
    children?: React.ReactNode;
}

const Anchor:React.FunctionComponent<Props> = ({to, children, text, styles}) => {
    return (
    <Link href={to} passHref={true}>
        <ChakraLink
            {...styles}
            display={"flex"}
            justifyContent={"flex-start"}
            flexDirection={"row"}
            alignItems={"center"}
        >
            <Text
                as={"span"}
                fontSize={"md"}
                color={"gray.200"}
                letterSpacing={"wide"}
                minW={"12rem"}
            >
                {text}
            </Text>
            {children}
        </ChakraLink>
    </Link>
    )
}

export default Anchor;