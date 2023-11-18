import * as React from 'react';
import { HStack, Heading, Container, Button, Text, Spinner, Select } from '@chakra-ui/react';
import OpenAI from 'openai';
import { useState, useContext, useEffect} from 'react';
import SaveSequence from './SaveSequence';

function SequenceInput() {
  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  });

  const [sequence, setSequence] = useState('This is the sequence');
  const [isLoading, setIsLoading] = useState(false);
  const [isData, setIsData] = useState(false);

  async function getSequence() {
    setIsLoading(true); 
    try {
      const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "give me a 30 mins yoga sequence for beginners." }],
        model: "gpt-3.5-turbo",
      });
      setSequence(completion.choices[0].message.content);
    } catch (error) {
      console.error('Error fetching sequence:', error);
    } finally {
      setIsLoading(false); 
      setIsData(true); 
    }
  }

  return (
    isData ? 
    <SaveSequence sequence={sequence} setSequence={setSequence}/> 
    : 
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
      <Button colorScheme="teal" variant="solid" onClick={getSequence} disabled={isLoading}>
        {isLoading ? "Loading..." : "Build Sequence"}
      </Button>
      {isLoading ? (<Spinner />) : (
        <>
        </>
      )}
    </Container> 
  );
}

export default SequenceInput;