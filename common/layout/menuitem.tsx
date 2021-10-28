import {ChakraProps} from "@chakra-ui/react";
import Link from 'next/link';
import React from "react";
import { Link as ChakraLink, Text } from "@chakra-ui/react"
import {useRouter} from "next/router";

interface Props  {
    to: string;
    text: string;
    styles?: ChakraProps;
    children?: React.ReactNode;
}

const MenuItem: React.FunctionComponent<Props> = ({ children,text, to = "/", styles }) => {
    const router = useRouter();
    const isActive = router.pathname === to;

    return (
        <Link href={to} passHref={true}>
            <ChakraLink display="block" {...styles}>
                <Text as={"span"} fontSize={"md"} color={isActive ? "deeppink": "gray.200"} letterSpacing={"wide"}>{text}</Text>
                {children}
            </ChakraLink>
        </Link>
    )
}

export default MenuItem;