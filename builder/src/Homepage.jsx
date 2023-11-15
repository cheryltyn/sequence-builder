import * as React from 'react';
import './App.css'

import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  Stack, 
  VStack,
  Image,
} from '@chakra-ui/react';

function Homepage() {
  return (
      <VStack spacing={8} marginTop="20">
        <Text fontSize="2xl" textAlign="center">
          helping yoga instructors build better classes
        </Text>
        <Button colorScheme="teal" variant="solid">
          Create Sequence
        </Button>
      </VStack>
  );
}

export default Homepage;