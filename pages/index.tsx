import React from 'react';
import Layout from "../common/layout/layout";
import Hero from "../modules/hero";
import {Heading, List, ListItem} from "@chakra-ui/react";
import FeaturedProject from "../common/components/featuredproject";

// Assets
import Coursor from "../public/images/coursor.svg";
import Expensie from "../public/images/expensie.svg"
import WasteLess from "../public/images/wasteless.svg";

const ProjectListItem:React.FunctionComponent = ({children}) => {
    return (
        <ListItem
            h={["auto","20rem"]}
            w={"100%"}
            display={"grid"}
            gridTemplateColumns={["1fr","repeat(12,1fr)"]}
            gridTemplateRows={["repeat(5,auto)","1fr"]}
            alignItems={"center"}
            pos={"relative"}
            marginBottom={["2rem","5rem"]}
        >
            {children}
        </ListItem>
    )
}

const Index = () => {
  return (
      <Layout>
        <Hero />
        <Heading w={"100%"} as={"h2"} textAlign={"left"} fontSize={"3xl"} m={"0rem 0 2rem 0"}>Some Things I&apos;ve Built</Heading>
        <List
            as={"ul"}
            w={"100%"}
        >
            <ProjectListItem>
                <FeaturedProject
                    name={"Coursor"}
                    description={"Course management dashboard for students and professors. It incorporates session using cookies,\n" +
                    "a db for user accounts and information, and stale-while-revalidate pattern for fetching."}
                    image={Coursor}
                    imageAlt={"Coursor project image"}
                    gitLink={"https://github.com/CFKeef/qcfirst"}
                    siteLink={"https://coursor.io/"}
                />
            </ProjectListItem>
            <ProjectListItem>
                <FeaturedProject
                    name={"Expensie"}
                    description={"Desktop CRUD application built on Electron that assists in the tracking of sales and expenses, " +
                    "improving user experience for reselling items online. "}
                    image={Expensie}
                    imageAlt={"Expensie project image"}
                    gitLink={"https://github.com/CFKeef/ExpensieV2"}
                    reverse={true}
                />
            </ProjectListItem>
            <ProjectListItem>
                <FeaturedProject
                    name={"Waste Less"}
                    description={"Inventory solution for consumers to track whats fresh, spoiled and what they need to restock on."}
                    image={WasteLess}
                    imageAlt={"Waste Less project image"}
                    gitLink={"https://github.com/CFKeef/Waste-Less"}
                />
            </ProjectListItem>
        </List>


      </Layout>
  )
}

export default Index;