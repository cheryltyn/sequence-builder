import * as React from 'react';
import { HStack, Heading, Container, Button, Text, Spinner } from '@chakra-ui/react';


function SaveSequence({sequence, setSequence}) {
  
  setSequence('this is the sequence')
  return(
    <Container>
      <Heading as="h1" size="xl" textAlign="center" color="black">
        Here's your sequence. 
      </Heading>
       <Text>{sequence}</Text>
       <Button colorScheme="teal" variant="solid">
        Save Sequence 
      </Button>
    </Container>
  );
}

export default SaveSequence;























// const BASE_URL = "https://airtable.com/appoBT9Iv5LWjgpzz/tbloSz8LJMOm3C9aq/"

// async function createRecordInAirtable(data) {
//   const endpoint = BASE_URL
//   const requestOptions = {
//     method: 'POST',
//     headers: {
//       'Authorization': `Bearer ${import.meta.env.VITE_AIRTABLE_API}`,
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ records: [ { fields: {
//         // Duration:
//         // Focus Area: 
//         Sequence: data
//     } } ] })
//   };

//   try {
//     const response = await fetch(endpoint, requestOptions);
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const result = await response.json();
//     console.log('Record created:', result);
//     return result;
//   } catch (error) {
//     console.error('Error creating record in Airtable:', error);
//   }
// }

// createRecordInAirtable(newData);
