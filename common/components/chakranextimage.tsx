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
const ChakraNextImage = (props: ImageProps & BoxProps & {to?: string}) => {
    const { src, alt, width, quality, height,bg,to, ...rest } = props;

    return (
        <Box
            as={"a"}
            pos={"relative"}
            h={"100%"}
            w={"100%"}
            display={"inline-block"}
            href={to}
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