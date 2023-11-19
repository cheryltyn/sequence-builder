import { Table, Tbody, Tr, Td, Thead, Th, Button, useToast, list } from '@chakra-ui/react';
import { useState, useEffect } from 'react'; 

function MySequences() {
  const [listSequence, setListSequence] = useState([]);
  const [isLoading, setisLoading] = useState(false); 
  const toast = useToast();
  
  const BASE_URL = "https://api.airtable.com/v0/appoBT9Iv5LWjgpzz/tbloSz8LJMOm3C9aq";

  useEffect(() => {
    listRecords();
  }, []);

  async function listRecords() {
    const request = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_AIRTABLE_API}`,
      }
    };
    setisLoading(true)
    try {
      const response = await fetch(BASE_URL, request);
      if (!response.ok) {
        toast({
          title: "Error",
          description: `Error fetching records from Airtable: ${error.message}`,
          status: "error",
          duration: 5000,
          isClosable: true,
      }); 
      }
      const result = await response.json();
      setListSequence(result.records.map(item => ({
        id: item.id,
        fields: item.fields
      }))); 
    } catch (error) {
      toast({
        title: "Error",
        description: `Error fetching records from Airtable: ${error.message}`,
        status: "error",
        duration: 5000,
        isClosable: true,
    }); 
    } finally {
      setisLoading(false)
    }
  }
  
  return (
    <Table>
      <Thead>
      <Tr>
        <Th>Duration</Th>
        <Th>Focus Area</Th>
        <Th>Sequence</Th>
      </Tr>
      </Thead>
      <Tbody>
        {!isLoading ? (
          listSequence.map((sequence, index) => (
            <Tr key={index}>
              <Td>{sequence.fields.duration}</Td>
              <Td>{sequence.fields.focus_area}</Td>
              <Td>{sequence.fields.sequence_input}</Td>
            </Tr>
          ))
        ) : (
          <Tr>
          <Td colSpan="3"> Loading... </Td>
        </Tr>
        )}
      </Tbody>
    </Table>
  );
  
}

export default MySequences;
