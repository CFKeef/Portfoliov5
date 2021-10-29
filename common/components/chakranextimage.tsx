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
            w={"100%"}
            {...rest}
        >
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