import React from "react"
import { Box, IconButton } from "@chakra-ui/react"
import {HamburgerIcon,CloseIcon} from "@chakra-ui/icons";

interface Props {
    isOpen: boolean;
    toggle: (val:boolean) => void;
}

const MenuToggle:React.FunctionComponent<Props> = ({ toggle, isOpen }) => {
    return (
        <Box display={['flex', 'flex', 'none', 'none']} justifyContent={"flex-end"} width={"100%"}>
            <IconButton aria-label={"Open menu"} onClick={() => toggle(!isOpen)} icon={isOpen ? <CloseIcon /> : <HamburgerIcon /> } />
        </Box>
    )
}

export default MenuToggle;