import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import SequenceInput from './SequenceInput';
import MySequences from './MySequences';
import SaveSequence from './SaveSequence';

function MyRouter() {
  return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sequenceinput" element={<SequenceInput />} />
        <Route path="/mysequences" element={<MySequences />} />
        <Route path="/savesequence" element={<SaveSequence />} />
      </Routes>
  );
}

export default MyRouter;
