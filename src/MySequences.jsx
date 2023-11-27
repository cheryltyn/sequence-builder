import { Table, Tbody, Tr, Td, Thead, Th, TableContainer, useToast, Heading, Button} from '@chakra-ui/react';
import { useState, useEffect } from 'react'; 

function MySequences() {
  const [listSequence, setListSequence] = useState([]);
  const [isLoading, setisLoading] = useState(false); 
  const [deleteCount, setDeleteCount] = useState(0);
  const toast = useToast();
  
  const BASE_URL = "https://api.airtable.com/v0/appoBT9Iv5LWjgpzz/tbloSz8LJMOm3C9aq";

  useEffect(() => {
    listRecords();
  }, [deleteCount]);

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
/* DELETE RECORD */ 
  async function deleteRecords(recordID) {
    let DELETE_URL = `${BASE_URL}/${recordID}`
    const request = {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_AIRTABLE_API}`,
      }
    };
    setisLoading(true)
    try {
      const response = await fetch(DELETE_URL, request);
      if (!response.ok) {
        toast({
          title: "Error",
          description: `Error deleting records from Airtable: ${error.message}`,
          status: "error",
          duration: 5000,
          isClosable: true,
      }); 
        return; 
      }
      setDeleteCount(count => count + 1)
    } catch (error) {
      toast({
        title: "Error",
        description: `Error deleting records from Airtable: ${error.message}`,
        status: "error",
        duration: 5000,
        isClosable: true,
    }); 
    } finally {
      setisLoading(false)
    }
  }

  const handleDelete = (sequence) => {
    deleteRecords(sequence.id)
  }

  return (
    <TableContainer  padding={10}>
    <Heading size="md">My Sequences</Heading>
    <Table >
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
              <Td whiteSpace="normal">{sequence.fields.sequence_input}</Td>
              <Td> <Button onClick={() => {handleDelete(sequence)}}> X </Button></Td>
            </Tr>
          ))
        ) : (
          <Tr>
          <Td colSpan="4"> Loading... </Td>
        </Tr>
        )
        }
      </Tbody>
    </Table>
    </TableContainer>
  );
  
}

export default MySequences;
