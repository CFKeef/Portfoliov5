import React from 'react';
import {Box, Button } from "@chakra-ui/react";
import MenuItem from "./menuitem";

const Mobilemenu = () => {
   return <Box
         as={"ul"}
         bg={"#191D3A"}
         borderRadius={"8"}
         p={"1rem"}
         display={"grid"}
         gridGap={"1rem"}
   >
      <MenuItem to="/" text={"Home"} />
      <MenuItem to="/projects" text={"Projects"} />
      <MenuItem to="/articles" text={"Articles"} />
      <MenuItem to="/visitors" text={"Visitors"} />
      <Button
          _hover={{bg: "neonPink", color: "white"}}
      >Resume</Button>
   </Box>
};

export default Mobilemenu;