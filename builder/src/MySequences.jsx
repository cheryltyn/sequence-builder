import { Table, Tbody, Tr, Td, Thead, Th, Button } from '@chakra-ui/react';
import { useState, useEffect } from 'react'; 

function MySequences() {
  const [listSequence, setListSequence] = useState([]);
  
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

    try {
      const response = await fetch(BASE_URL, request);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setListSequence(result.records.map(item => ({
        id: item.id,
        fields: item.fields
      }))); 
    } catch (error) {
      console.error('Error fetching records from Airtable:', error);
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
        {listSequence.length > 0 ? (
          listSequence.map((sequence, index) => (
            <Tr key={index}>
              <Td>{sequence.fields.duration}</Td>
              <Td>{sequence.fields.focus_area}</Td>
              <Td>{sequence.fields.sequence_input}</Td>
              <Td> <Button> X </Button> </Td>
            </Tr>
          ))
        ) : (
          <Tr>
          <Td colSpan="3">Loading...</Td>
        </Tr>
        )}
      </Tbody>
    </Table>
  );
  
}

export default MySequences;
