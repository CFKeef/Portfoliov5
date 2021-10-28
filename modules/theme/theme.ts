import {ChakraProps, extendTheme, ThemeConfig} from "@chakra-ui/react";

import colors from "./colors";
import fonts from "./fonts";
import {mode} from "@chakra-ui/theme-tools";

const config : ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: true,
}

const styles = {
        global: (props:ChakraProps) => ({
            body: {
                bg: mode("white", "#081228")(props),
            },
        }),
    }

const customTheme = extendTheme({
    config,
    styles,
    fonts,
    colors,
    components: {
    },
});

export default customTheme;