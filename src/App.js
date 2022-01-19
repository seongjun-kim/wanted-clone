import React from 'react';
import Styled from 'styled-components';
import NavBar from './Components/NavBar';

const Container = Styled.div`
  display: flex;
  justify-content: center;
`;


function App() {
  return (
    <Container>
      <NavBar />
    </Container>
  );
}

export default App;
