import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './homepage';
import SequenceInput from './SequenceInput';
import MySequences from './MySequences';

function MyRouter() {
  return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sequenceinput" element={<SequenceInput />} />
        <Route path="/mysequences" element={<MySequences />} />
      </Routes>
  );
}

export default MyRouter;
