import * as React from 'react';
import { useTheme, HStack, Heading, Container, Button, VStack, Spinner, Select , Text} from '@chakra-ui/react';

function SequenceParameters({getSequence, isLoading, handleChange, sequenceParams}) {
  const theme = useTheme();
  return (
    <Container align='center'>
      <Heading
        as="h1"
        size="xl"
        textAlign="center"
        color="black"
        mb={8}
        whiteSpace="nowrap"
        overflow="hidden"
        textOverflow="ellipsis"
      > I want to create a sequence that:
      </Heading>

      <VStack spacing={4}>  
        <HStack width="full" justify="space-between">
            <Heading as="h2" size="l" textAlign="center" color="black"> 
              Duration
            </Heading>
            <Select placeholder='Select option' name="duration" onChange={handleChange} value={sequenceParams.duration}>
              <option value='2'>2 mins</option>
              <option value='3'>3 mins</option>
              <option value='5'>5 mins</option>
            </Select>
        </HStack>
        <HStack width="full" justify="space-between">
            <Heading as="h2" size="l" textAlign="center" color="black"> 
              Focus Area
            </Heading>
            <Select placeholder='Select option' name="focusArea" onChange={handleChange} value={sequenceParams.focusArea}>
              <option value='core'>Core</option>
              <option value='hamstring'>Hamstrings</option>
              <option value='legs'>Legs</option>
              <option value='shoulder'>Shoulders</option>
            </Select>
        </HStack>

        <Button 
          bg="button1" 
          variant="solid" 
          isDisabled={isLoading || !sequenceParams.duration || !sequenceParams.focusArea} 
          onClick={() => getSequence(sequenceParams)}
        >
          {isLoading ? "Loading..." : "Build Sequence"}
        </Button>
        <Text> {isLoading ? "Please be patient as it takes awhile to build your sequence..." :null} </Text>
        {isLoading ? (<Spinner />) : null}
      </VStack>
    </Container>
  );
}


export default SequenceParameters;
