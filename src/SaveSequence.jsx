import * as React from 'react';
import {useState} from 'react'; 
import { useTheme, useToast, Heading, Container, Button, Text, Spinner } from '@chakra-ui/react';
const BASE_URL ="https://api.airtable.com/v0/appoBT9Iv5LWjgpzz/tbloSz8LJMOm3C9aq";

function SaveSequence({sequence, sequenceParams}) {

  const [isSaving, setisSaving] = useState(false);
  const [isSavedData, setisSavedData] = useState(false);
  const toast = useToast();
  const theme = useTheme();

  async function createRecordInAirtable(data, params) {
    const endpoint = BASE_URL
    const requestOptions = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_AIRTABLE_API}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ records: [ { fields: {
          duration: params.duration,
          focus_area: params.focusArea,
          sequence_input: data,
      } } ] })
    };
  
    try {
      const response = await fetch(endpoint, requestOptions);
      if (!response.ok) {
        toast({
          title: "Error",
          description: `Error creating record in Airtable: ${error.message}`,
          status: "error",
          duration: 5000,
          isClosable: true,
      }); 
      throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setisSaving(false)
      setisSavedData(true)
      toast({
        title: "Success",
        description: "Record created successfully!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      return result;
    } catch (error) {
      setisSaving(false)
      toast({
        title: "Error",
        description: `Error creating record in Airtable: ${error.message}. Please try again later.`,
        status: "error",
        duration: 5000,
        isClosable: true,
    }); 
  }}

  const handleOnClick = (event) => {
    setisSaving(true); 
    createRecordInAirtable(sequence, sequenceParams)
  }

  return(
    <Container align='center' >
      <Heading as="h1" size="xl" textAlign="center" color="black" mb={4}>
        Here's your sequence: 
      </Heading>
       <Text mb={8}>{sequence}</Text>
       <Button bg="button1" variant="solid" onClick={handleOnClick} isDisabled={isSavedData}>
       {isSaving ? "Loading..." : isSavedData ? "Sequence Saved" : "Save Sequence"}
      </Button>
      {isSaving ? (<Spinner />) : null}
    </Container>
    
  );
}

export default SaveSequence;