import {Stack} from "@chakra-ui/react";
import MenuItem from "./menuitem";

const MenuLinks = () => {
    return (
        <Stack
            spacing={8}
            align="center"
            justify={["center", "space-between", "flex-end", "flex-end"]}
            direction={["column", "row", "row", "row"]}
            pt={0}
            display={['none', 'none', 'flex','flex']}
            alignItems={"center"}
            justifyContent={"center"}
        >
            <MenuItem to="/" >Home</MenuItem>
            <MenuItem to="/visitors" >Visitor Log</MenuItem>
        </Stack>
    )
};

export default MenuLinks;