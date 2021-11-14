import React from 'react';
import { ChakraProvider } from "@chakra-ui/react"
import {AppProps} from "next/app";
import {theme} from "../modules/theme";
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

function MyApp({ Component, pageProps }:AppProps) {
    const [queryClient] = React.useState(() => new QueryClient())

    return (

        <ChakraProvider resetCSS={true} theme={theme}>
            <QueryClientProvider client={queryClient}>
                <Hydrate state={pageProps.dehydratedState}>
                    <Component {...pageProps} />
                </Hydrate>
                <ReactQueryDevtools />
            </QueryClientProvider>
        </ChakraProvider>
    )
}
export default MyApp