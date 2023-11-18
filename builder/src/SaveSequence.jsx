import * as React from 'react';
import {useState} from 'react'; 
import { HStack, Heading, Container, Button, Text, Spinner } from '@chakra-ui/react';
const BASE_URL ="https://api.airtable.com/v0/appoBT9Iv5LWjgpzz/tbloSz8LJMOm3C9aq";

function SaveSequence({sequence, sequenceParams}) {

  const [isSaved, setisSaved] = useState(false)
  
  async function createRecordInAirtable(data, params) {
    const endpoint = BASE_URL
    const requestOptions = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_AIRTABLE_API}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ records: [ { fields: {
          duration: sequenceParams.duration,
          focus_area: sequenceParams.focusArea,
          sequence_input: data,
      } } ] })
    };
  
    try {
      const response = await fetch(endpoint, requestOptions);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log('Record created:', result);
      return result;
    } catch (error) {
      console.error('Error creating record in Airtable:', error);
    }
  }

  const handleOnClick = (event) => {
    createRecordInAirtable(sequence, sequenceParams)
    setisSaved(true)
  }

  return(
    <Container>
      <Heading as="h1" size="xl" textAlign="center" color="black">
        Here's your sequence. 
      </Heading>
       <Text>{sequence}</Text>
       <Button colorScheme="teal" variant="solid" onClick={handleOnClick} >
        Save Sequence 
      </Button>
    </Container>
    
  );
}

export default SaveSequence;