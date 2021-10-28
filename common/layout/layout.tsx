import React from 'react';
import {HigherOrderFC} from "../interfaces";
import Header from "./header";
import {Box} from "@chakra-ui/react";
import Head from 'next/head'
import Footer from "./footer";

interface Props extends  HigherOrderFC {
    title?: string
}

const Layout: React.FunctionComponent<Props> = ({children, title = "Patryck's Portfolio"}) => {
    return (
        <Box margin="0 auto" maxWidth={800} transition="0.5s ease-out">
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Box margin="8">
                <Header />
                <Box as="main" marginY={22}>
                    {children}
                </Box>
                <Footer />
            </Box>
        </Box>
    );
};

export default Layout;