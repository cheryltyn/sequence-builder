import * as React from 'react';
import './App.css'; 
import Homepage from './homepage';
import Navbar  from './Navbar';
import SequenceInput  from './SequenceInput';

function App() {
  return (
    <>
    <Navbar /> 
    {/* <Homepage/>  */}
    <SequenceInput />
    </>
  );
}

export default App;