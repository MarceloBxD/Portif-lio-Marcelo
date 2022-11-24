import { Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import {
    List,
    Avatar,
    Stack,
    ListItem,
    ListIcon,
    UnorderedList,
  } from '@chakra-ui/react'

export const NavBar = () => {
  return (
    <Flex p="20px" align="center" justify="space-between">
      <Flex>
        <Stack direction="row">
          <Avatar name="Marcelo Bracet" src="https://lh3.googleusercontent.com/ogw/AOh-ky2_4TD3Cmj-4JGrLg3qfQd_nOwZS8kAtHRqWmLnmw=s32-c-mo" />
        </Stack>
      </Flex>
      <Flex>
        <Flex as='nav'>
          <UnorderedList listStyleType='none' as='ul' display='flex' gap='25px'>
            <ListItem>
              <Link to="/">Home</Link>
            </ListItem>
            <ListItem>
              <Link to="/projects">Projetos</Link>
            </ListItem>
            <ListItem>
              <Link to="/contact">Contact</Link>
            </ListItem>
          </UnorderedList>
        </Flex>
      </Flex>
    </Flex>
  );
};
