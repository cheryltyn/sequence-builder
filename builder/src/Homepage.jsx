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
    <Container centerContent maxW="100vw">
      <Box backgroundColor='tomato' />
       <Stack spacing={20} direction='row'>
       <Heading as="h1" size="xl" textAlign="center" color="teal.500"> 
       YogiBuild 
       </Heading>
       <Heading as="h5" size="l" textAlign="center" color="teal.500"> 
       Create Sequence 
       </Heading>
       <Heading as="h5" size="l" textAlign="center" color="teal.500"> 
       My Sequences 
       </Heading>
       </Stack>
      <VStack spacing={8} marginTop="20">
        <Text fontSize="2xl" textAlign="center">
          helping yoga instructors build better classes
        </Text>
        <Image
          src="path_to_your_image" // Replace with the path to your image
          alt="Yoga Instructor"
          boxSize="300px"
        />
        <Button colorScheme="teal" variant="solid">
          Create Sequence
        </Button>
      </VStack>
    </Container>
  );
}

export default Homepage;