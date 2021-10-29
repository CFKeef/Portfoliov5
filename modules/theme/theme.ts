import {ChakraProps, extendTheme, ThemeConfig} from "@chakra-ui/react";

import colors from "./colors";
import fonts from "./fonts";
import {mode} from "@chakra-ui/theme-tools";

const config : ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: false,
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
        Button: {
            baseStyle: {
                bg:"#191D3A !important"
            }
        },
        IconButton: {
            baseStyle: {
                bg:"#191D3A !important"
            }
        },
    },
});

export default customTheme;