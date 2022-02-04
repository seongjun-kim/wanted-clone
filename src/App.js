import React, { useCallback, useState } from "react";
import Styled from "styled-components";
// import NavBar from "./component/NavBar";
// import Slider from "./component/Slider";
import colors from "./lib/colors";
import Tab from "./component/Tab";
import ClickToEdit from "./component/ClickToEdit";
import Toggle from "./component/Toggle";
import Modal from "./component/Modal";
import Tag from "./component/Tag";

const RootContainer = Styled.div`
  background-color: ${colors.white};
  padding: 5%;
`;

const Label = Styled.text`
  display: block;
  justifiy-content: center;
  align-items: center;
  font-weight: bold;
  border: medium dashed ${colors.gray};
  padding: 10px;
  margin-bottom: 10px;
`;

const ComponentContainer = ({ labelText, children }) => {
  const Container = Styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 250px;
    padding: 10px;
    background-color: ${colors.background};
    margin-bottom: 20px;
  `;

  return (
    <>
      <Label>{labelText}</Label>
      <Container>{children}</Container>
    </>
  );
};

const Content = Styled.div`
    display:flex;    
    justify-content: center;
    align-items: center;
    color: gray;
    font-weight: bold;
    text-align: center;
    margin-top: 10px;
`;

function App() {
  // Tab
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const handleTabClick = useCallback((index) => {
    setSelectedTabIndex(index);
  }, []);

  const getDisplayText = () => {
    const displayText = "Tab menu ";
    switch (selectedTabIndex) {
      case 0:
        return displayText + "ONE";
      case 1:
        return displayText + "TWO";
      case 2:
        return displayText + "THREE";
      default:
        return displayText + "UNKNOWN";
    }
  };

  // ClickToEdit
  const [clickToEditInputs, setClickToEditInputs] = useState({
    name: "김코딩",
    age: "20",
  });

  const handleClickToEditInputsChange = (e) => {
    const { name, value } = e.target;
    setClickToEditInputs({
      ...clickToEditInputs,
      [name]: value,
    });
  };

  // Toggle
  const [isToggleActive, setIsToggleActive] = useState(false);
  const handleToggleClick = () => {
    setIsToggleActive(!isToggleActive);
  };

  // Tag
  const [tags, setTags] = useState([]);

  const removeTag = (index) => {
    tags.splice(index, 1);
    setTags([...tags]);
  };

  const addTag = (text) => {
    setTags([...tags, text]);
  };

  return (
    <RootContainer>
      {/* <NavBar />
      <Slider /> */}
      <ComponentContainer labelText="Tab">
        <Tab selectedIndex={selectedTabIndex} handleClick={handleTabClick} />
        <Content>{getDisplayText()}</Content>
      </ComponentContainer>
      <ComponentContainer labelText="ClickToEdit">
        <ClickToEdit
          inputs={clickToEditInputs}
          handleChange={handleClickToEditInputsChange}
        />
        <Content>
          {`이름 ${clickToEditInputs.name || "?"} 
          나이 ${clickToEditInputs.age || "?"}`}
        </Content>
      </ComponentContainer>
      <ComponentContainer labelText="Toggle">
        <Toggle isActive={isToggleActive} handleClick={handleToggleClick} />
        <Content>Toggle Switch {isToggleActive ? "ON" : "OFF"}</Content>
      </ComponentContainer>
      <ComponentContainer labelText="Modal">
        <Modal>HELLO CODESTATES!</Modal>
      </ComponentContainer>
      <ComponentContainer labelText="Tag">
        <Tag tags={tags} handleAdd={addTag} handleRemove={removeTag} />
      </ComponentContainer>
    </RootContainer>
  );
}

export default App;
