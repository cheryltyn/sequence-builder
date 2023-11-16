import * as React from 'react';
import { HStack, Heading, Container, Button} from '@chakra-ui/react';
import { Select } from '@chakra-ui/react'; 
import {getSequence} from './sequenceBuilder'
  
function SequenceInput() {
    return (
        <Container>
            <Heading as="h1" size="xl" textAlign="center" color="black"> 
            I want to create a sequence that is...
            </Heading>
        <HStack> 
          <Heading as="h2" size="l" textAlign="center" color="black"> 
            Duration
          </Heading>
          <Select placeholder='Select option'>
            <option value='30'>30 mins</option>
             <option value='60'>60 mins</option>
          </Select>
          </HStack>
          <HStack> 
          <Heading as="h2" size="l" textAlign="center" color="black"> 
            Focus Area
          </Heading>
          <Select placeholder='Select option'>
            <option value='core'>Core</option>
            <option value='hamstring'>Hamstrings</option>
          </Select>
          </HStack>
          <Button colorScheme="teal" variant="solid" onClick={getSequence}>
          Build Sequence
        </Button>
        </ Container>
    );
  }
  
  export default SequenceInput;