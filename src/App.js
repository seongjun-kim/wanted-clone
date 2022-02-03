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
const ComponentContainer = Styled.div`
  display: flex;
  flex-direction: row;
  height: 200px;
  padding: 10px;
`
const Label = Styled.text`
  display: flex;
  justifiy-content: center;
  align-items: center;
  font-weight: bold;
  padding: 10px;
  border: medium dashed ${colors.gray};
  margin-right: 10px;
`
function App() {
  return (
    <Container>
      {/* <NavBar />
      <Slider /> */}
      <ComponentContainer>
        <Label>Tab</Label>
        <Tab />
      </ComponentContainer>
    </Container>
  );
}

export default App;
