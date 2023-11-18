import * as React from 'react';
import { HStack, Heading, Container, Button, Text, Spinner, Select } from '@chakra-ui/react';
import { useState, useContext, useEffect} from 'react';

function SequenceParameters({getSequence, isLoading, handleChange, sequenceParams}) {

  return (
    <Container>
      <Heading as="h1" size="xl" textAlign="center" color="black">
        I want to create a sequence that is...
      </Heading>
      <HStack> 
          <Heading as="h2" size="l" textAlign="center" color="black"> 
            Duration
          </Heading>
          <Select placeholder='Select option' name="duration" onChange={handleChange}>
            <option value='2'>2 mins</option>
             <option value='3'>3 mins</option>
             <option value='5'>5 mins</option>
          </Select>
          </HStack>
          <HStack> 
          <Heading as="h2" size="l" textAlign="center" color="black"> 
            Focus Area
          </Heading>
          <Select placeholder='Select option' name="focusArea" onChange={handleChange}>
            <option value='core'>Core</option>
            <option value='hamstring'>Hamstrings</option>
            <option value='legs'>Legs</option>
            <option value='stretch'>Stretch</option>
          </Select>
          </HStack>
      <Button colorScheme="teal" variant="solid" disabled={isLoading} onClick={() => getSequence(sequenceParams)}>
        {isLoading ? "Loading..." : "Build Sequence"}
      </Button>
      {isLoading ? (<Spinner />) : (
        <>
        </>
      )}
    </Container> 
  );
}

export default SequenceParameters;
