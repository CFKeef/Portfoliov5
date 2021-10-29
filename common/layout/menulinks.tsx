import {Button, Flex, Stack} from "@chakra-ui/react";
import MenuItem from "./menuitem";
import Resume from "../../public/GolebiewskiPatryckResume.pdf";
import {openLinkInNewTab} from "../utils/functions";

const MenuLinks = () => {
    return (
        <Stack
            as={"nav"}
            spacing={8}
            align="center"
            justify={"space-between"}
            direction={["row"]}
            pt={0}
            display={['none', 'none', 'flex','flex']}
            m={["0", "1rem 0 0 0"]}
        >
            <Flex
                m={"1rem 0 0 0"}
                w={"50%"}
                spacing={8}
                align="center"
                justify={"space-between"}
            >
                <MenuItem to="/" text={"Home"} />
                <MenuItem to="/projects" text={"Projects"} />
                <MenuItem to="/articles" text={"Articles"} />
                <MenuItem to="/visitors" text={"Visitors"} />
            </Flex>
            <Button
                bg={"#191D3A"}
               _hover={{bg: "deeppink", color: "white"}}
               onClick={() => openLinkInNewTab(Resume, window)}
            >Resume</Button>
        </Stack>
    )
};

export default MenuLinks;