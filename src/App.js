import React, { useState } from 'react';
import Styled from 'styled-components';
import NavBar from './component/NavBar';
import Slider from './component/Slider';
import colors from './lib/colors';
import Tab from './component/Tab';
import ClickToEdit from './component/ClickToEdit';
import Toggle from './component/Toggle';
import Modal from './component/Modal';

const Container = Styled.div`
  height: 100vh;
  width: 100vw;
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
      <ComponentContainer>
        <Label>ClickToEdit</Label>
        <ClickToEdit />
      </ComponentContainer>
      <ComponentContainer>
        <Label>Toggle</Label>
        <Toggle />
      </ComponentContainer>
      <ComponentContainer>
        <Label>Modal</Label>
        <Modal>HELLO CODESTATES!</Modal>
      </ComponentContainer>
    </Container>
  );
}

export default App;
