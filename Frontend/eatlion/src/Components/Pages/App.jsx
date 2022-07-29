import React from 'react';

import { useState } from 'react';
import SignUpPage from './SignUpPage';


const App=()=> {
  const[token,setToken]=useState('');
  return (
    <>
    <SignUpPage />
    </>

    
  );
}

export default App;
