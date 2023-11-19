import * as React from 'react';
import { Route, Link } from "react-router-dom";
import MyRouter from './Router';
import { Flex, Spacer, Heading} from '@chakra-ui/react';
  
  function Navbar() {
    return (
        <>
        <Flex p="10px" maxW="100vw" alignItems="center" my='30px' ml='30px' mr='50px'>
         <Link to="/">
         <Heading as="h1" size="xl" textAlign="center" color="black" > 
         YogiBuild 
         </Heading>
         </Link>
         <Spacer /> 
         <Link to="/sequenceinput"> 
         <Heading as="h5" size="l" textAlign="center" color="black" mr='30px' as="u"> 
         Create Sequence 
         </Heading>
         </Link>
         <Link to="/mysequences"> 
         <Heading as="h5" size="l" textAlign="center" color="black" as="u"> 
         My Sequences 
         </Heading>
         </Link> 
         </Flex>
         <MyRouter /> 
        </>
    );
  }
  
  export default Navbar;