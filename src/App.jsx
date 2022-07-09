import React, { useState } from 'react';
import Container from './components/Container';
import InputForm from './components/InputForm';
import Message from './components/Message';
import './App.css';

function App() {

  const [ isSuccessfullySubmitted, setIsSuccessfullySubmitted ] = useState(false);

  const onSubmit = (data) => {
    // alert(JSON.stringify(data));
    console.log(data);
    setIsSuccessfullySubmitted(true);
  };

 
  return (
    <>
      <Container title="Sign Up Today!">
        <InputForm 
          onSubmit={onSubmit}
        />
        <Message 
        submitted={isSuccessfullySubmitted}
        />
      </Container>
    </>
  );


}

export default App;
