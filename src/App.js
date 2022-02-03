import React from 'react';
import Styled from 'styled-components';
import NavBar from './component/NavBar';
import Slider from './component/Slider';
import Tab from './component/Tab';
import colors from './lib/colors';

const Container = Styled.div`
  height: 100vh;
  background-color: ${colors.white};
`
function App() {
  return (
    <Container>
      {/* <NavBar />
      <Slider /> */}
      <Tab />
    </Container>
  );
}

export default App;
