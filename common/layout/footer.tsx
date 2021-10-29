import { Flex } from "@chakra-ui/react";
import {IconButton} from "@chakra-ui/react";
import {ImGithub, ImLinkedin} from "react-icons/im";

const Footer = () => {
    return (
        <Flex as="footer" width="100%" align="center" justify={"center"}  mb={"1rem"}>
            <IconButton aria-label={"View github account"} icon={<ImGithub/>} bg={"#191D3A"}
                        _hover={{
                            bg: "deeppink"
                        }}/>
            <IconButton aria-label={"View linkedin account"} icon={<ImLinkedin />} ml={"1rem"} bg={"#191D3A"}
                        _hover={{
                            bg: "deeppink"
                        }} />
        </Flex>
    );
};

export default Footer;