import {Box, BoxProps, chakra} from '@chakra-ui/react'
import  React from 'react'
import NextImage, {ImageProps} from 'next/image'

const UnwrappedChakraImg = chakra(NextImage, {
    shouldForwardProp: (prop) =>
        [
            "width",
            "height",
            "src",
            "alt",
            "placeholder",
            "transition",
            "zIndex",
            "bg"
        ].includes(prop),
})
const ChakraNextImage = (props: ImageProps & BoxProps) => {
    const { src, alt, width, quality, height,bg, ...rest } = props;

    return (
        <Box
            pos={"relative"}
            h={"100%"}
            w={"100%"}
            display={"inline-block"}
            {...rest}
        >
            <Box
                pos={"absolute"}
                bg={"rgba(38,25,58,.7)"}
                zIndex={2}
                height={["100%", 330]}
                width={["100%", 475]}
                content={'""'}
                top={0}
                borderRadius={8}
                transition={"all .2s"}
                _hover={{
                    bg: "none"
                }}
            />
                <UnwrappedChakraImg
                    objectFit="cover"
                    layout="fill"
                    src={src}
                    alt={alt}
                    borderRadius={8}
                />
        </Box>
    )
}

export default ChakraNextImage;