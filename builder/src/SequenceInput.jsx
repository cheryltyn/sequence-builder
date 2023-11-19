import * as React from 'react';
import { useToast } from '@chakra-ui/react';
import OpenAI from 'openai';
import { useState} from 'react';
import SaveSequence from './SaveSequence';
import SequenceParameters from './SequenceParameters';

function SequenceInput() {
  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  });

  const [sequenceParams, setSequenceParams] = useState({
    duration: '',
    focusArea: ''
  })
  const [sequence, setSequence] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isData, setIsData] = useState(false);
  const toast = useToast();

  async function getSequence(sequenceParams) {
    setIsLoading(true); 
    console.log(sequenceParams)
    try {
      const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content:`give me a ${sequenceParams.duration} minutes yoga sequence focusing on the ${sequenceParams.focusArea} in 100 words`}],
        model: "gpt-3.5-turbo",
      });
      setSequence(completion.choices[0].message.content);
      setIsData(true); 
    } catch (error) {
      toast({
        title: "Error",
        description: `Error fetching sequence: ${error.message}. Please try again later.`,
        status: "error",
        duration: 5000,
        isClosable: true,
    }); 
    } finally {
      setIsLoading(false); 
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSequenceParams(prevParams => ({
      ...prevParams,
      [name]: value
    }));
  };

  return (
    isData ? 
    <SaveSequence sequence={sequence} sequenceParams={sequenceParams}/> 
    : 
    <SequenceParameters getSequence={getSequence} 
    isLoading={isLoading} 
    handleChange={handleChange}
    sequenceParams={sequenceParams}/> 
  );
}

export default SequenceInput;
