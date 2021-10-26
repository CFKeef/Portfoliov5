import {ChakraProps} from "@chakra-ui/react";
import Link from 'next/link';
import {HigherOrderFC} from "../interfaces";
import React from "react";
import { Link as ChakraLink } from "@chakra-ui/react"
import {useRouter} from "next/router";

interface Props extends HigherOrderFC {
    to: string;
    styles?: ChakraProps
}

const MenuItem: React.FunctionComponent<Props> = ({ children, to = "/", styles }) => {
    const router = useRouter();
    const isActive = router.pathname === to;

    return (
        <Link href={to} passHref={true}>
            <ChakraLink display="block" letterSpacing={"wide"} color={isActive ? "deeppink": "gray.300"} fontWeight={isActive ? "bold" : "normal"} {...styles}>
                {children}
            </ChakraLink>
        </Link>
    )
}

export default MenuItem;