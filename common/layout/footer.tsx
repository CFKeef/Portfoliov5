import { Flex } from "@chakra-ui/react";
import {ThemeToggle} from "../../modules/theme";

const Footer = () => {
    return (
        <Flex as="footer" width="full" align="center">
            <ThemeToggle />
        </Flex>
    );
};

export default Footer;