import { DeepPartial, Theme } from "@chakra-ui/react";

const extendedColors: DeepPartial<
    Record<string, Theme["colors"]>
    > = {
};

const overriddenChakraColors: DeepPartial<Theme["colors"]> = {
};

const colors = {
    "neonPink": "#DB3B93",
    ...overriddenChakraColors,
    ...extendedColors,
};


export default colors;