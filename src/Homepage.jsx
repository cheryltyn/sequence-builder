import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import yogaPicture from './assets/yogaPicture.svg'
import {
  Button,
  Text,
  VStack,
  Image,
  HStack, 
  useTheme,
} from '@chakra-ui/react';

function Homepage() {

  const goToClick = () => {
    navigate('/sequenceinput');
  };

  const theme = useTheme();
  const navigate = useNavigate();

  return (
      <VStack spacing={8} marginTop="20" padding={8}>
        <HStack> 
        <Text fontSize="3xl" fontWeight="bold" fontStyle="italic" textAlign="center" padding={8}>
          helping yoga instructors build better classes
        </Text>
        <Image boxSize='300px' src={yogaPicture} alt="from FreePik"/>
        </HStack>
        <Button bg='button1' variant="solid" onClick={goToClick}>
          Create Sequence
        </Button>
      </VStack>
  );
}

export default Homepage;