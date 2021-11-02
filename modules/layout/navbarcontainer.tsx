import {Flex} from "@chakra-ui/react";
import React, {ReactNode} from "react";

interface Props {
    children: ReactNode
}

const NavBarContainer:React.FunctionComponent<Props> = ({ children, ...props }) => {
    return (
        <Flex
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb={8}
            p={0}
            bg={["primary.500", "primary.500", "transparent", "transparent"]}
            {...props}
        >
            {children}
        </Flex>
    )
}

export default NavBarContainer;