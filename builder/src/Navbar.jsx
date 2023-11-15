import * as React from 'react';
import './App.css'
import { Flex, Spacer, Heading} from '@chakra-ui/react';
  
  function Navbar() {
    return (
        <Flex p="10px" maxW="100vw" alignItems="center" my='30px' ml='30px' mr='50px'>
         <Heading as="h1" size="xl" textAlign="center" color="black" > 
         YogiBuild 
         </Heading>
         <Spacer /> 
         <Heading as="h5" size="l" textAlign="center" color="black" mr='30px' as="u"> 
         Create Sequence 
         </Heading>
         <Heading as="h5" size="l" textAlign="center" color="black" as="u"> 
         My Sequences 
         </Heading>
         </Flex>
    );
  }
  
  export default Navbar;