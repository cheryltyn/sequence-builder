import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Button,
  Text,
  VStack,
  Image,
} from '@chakra-ui/react';

function Homepage() {

  const goToClick = () => {
    navigate('/sequenceinput');
  };
  

  const navigate = useNavigate();

  return (
      <VStack spacing={8} marginTop="20" >
        <Text fontSize="2xl" textAlign="center">
          helping yoga instructors build better classes
        </Text>
        <Button colorScheme="teal" variant="solid" onClick={goToClick}>
          Create Sequence
        </Button>
      </VStack>
  );
}

export default Homepage;