import { Table, Tbody, Tr, Td, Text } from '@chakra-ui/react';
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
      setListSequence(result.records.map(item => item.fields)); 
    } catch (error) {
      console.error('Error fetching records from Airtable:', error);
    }
  }
  console.log(listSequence)

  return (
    <Table>
      <Tbody>
        {listSequence.length > 0 ? (
          listSequence.map((sequence, index) => (
            <Tr key={index}>
              <Td>{sequence.Duration}</Td>
            </Tr>
          ))
        ) : (
          <Text>Loading...</Text> // You can replace this with a spinner or any loading indicator
        )}
      </Tbody>
    </Table>
  );
  
}

export default MySequences;
