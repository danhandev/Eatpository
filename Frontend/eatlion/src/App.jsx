import React from 'react';
import RenamePwPage from './Components/Pages/ResetPwPage';
import { useState } from 'react';
import SignUpPage from './Components/Pages/SignUpPage';
import LoginPage from './Components/Pages/LoginPage';

const App=()=> {
  const[token,setToken]=useState('');
  return (
    <>
    <SignUpPage />
    </>

    
  );
}

export default App;
