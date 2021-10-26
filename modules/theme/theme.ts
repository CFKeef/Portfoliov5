import {extendTheme, ThemeConfig} from "@chakra-ui/react";

import colors from "./colors";
import fonts from "./fonts";

const config : ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: true,
}

const customTheme = extendTheme({
    config,
    fonts,
    colors,
    components: {
    },
});

export default customTheme;