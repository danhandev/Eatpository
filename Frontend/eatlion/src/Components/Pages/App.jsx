import React from 'react';

import { useState } from 'react';
import SignUpPage from './SignUpPage';
import Header from '../Header';
import Router from '../../Router';

const App=()=> {
  const[token,setToken]=useState('');
  return (
    <>
    <Header token={token} setToken={setToken} />
    <Router token={token} setToken={setToken}/>
    </>

    
  );
}

export default App;
