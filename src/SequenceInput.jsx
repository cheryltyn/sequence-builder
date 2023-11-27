import * as React from 'react';
import { useToast } from '@chakra-ui/react';
import OpenAI from 'openai';
import { useState} from 'react';
import SaveSequence from './SaveSequence';
import SequenceParameters from './SequenceParameters';

function SequenceInput() {
  /* START FOR ACTUAL PROD  
  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  });
  /* END FOR ACTUAL PROD */ 
  
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
    try {
      /* START FOR ACTUAL PROD 
      const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content:`give me a ${sequenceParams.duration} minutes yoga sequence focusing on the ${sequenceParams.focusArea} in 100 words`}],
        model: "gpt-3.5-turbo",
      });
      setSequence(completion.choices[0].message.content);
      setIsData(true); 
      /* END FOR ACTUAL PROD */ 
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
      /* NO API PORTFOLIO */
      setIsData(true); 
      setSequence("Start in a seated position with your legs extended forward. Take a deep breath in and lift your arms overhead. Exhale and engage your core as you fold forward into a seated forward bend, reaching for your toes. Inhale as you come back up to a seated position. Transition into boat pose by leaning back slightly and lifting your legs off the floor, balancing on your sit bones. Hold for a few breaths, then slowly lower back down. Finish with a final seated forward bend, focusing on lengthening your spine and stretching your hamstrings. Take a deep breath in, exhale and release.")
      /* END OF NO API PORTFOLIO */ 
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
