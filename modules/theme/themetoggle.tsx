import { IconButton, useColorMode } from "@chakra-ui/react";
import {MoonIcon, SunIcon} from "@chakra-ui/icons";

const ThemeToggle = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <IconButton
            aria-label={"theme toggle"}
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
        />
    );
};

export default ThemeToggle;