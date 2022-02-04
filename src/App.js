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
import AutoComplete from "./component/AutoComplete";

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

const ContentContainer = Styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 250px;
  padding: 10px;
  background-color: ${colors.background};
  margin-bottom: 20px;
`;
const ComponentContainer = ({ labelText, children }) => {
  return (
    <>
      <Label>{labelText}</Label>
      <ContentContainer>{children}</ContentContainer>
    </>
  );
};

const SubContent = Styled.div`
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

  // AutoComplete
  const [savedKeywords, setSavedKeywords] = useState([
    "antique",
    "refurbished",
    "vintage",
    "중고A급",
    "rustic",
  ]);

  return (
    <RootContainer>
      {/* <NavBar />
      <Slider /> */}
      <ComponentContainer labelText="Tab">
        <Tab selectedIndex={selectedTabIndex} handleClick={handleTabClick} />
        <SubContent>{getDisplayText()}</SubContent>
      </ComponentContainer>
      <ComponentContainer labelText="ClickToEdit">
        <ClickToEdit
          inputs={clickToEditInputs}
          handleChange={handleClickToEditInputsChange}
        />
        <SubContent>
          {`이름 ${clickToEditInputs.name || "?"} 
          나이 ${clickToEditInputs.age || "?"}`}
        </SubContent>
      </ComponentContainer>
      <ComponentContainer labelText="Toggle">
        <Toggle isActive={isToggleActive} handleClick={handleToggleClick} />
        <SubContent>Toggle Switch {isToggleActive ? "ON" : "OFF"}</SubContent>
      </ComponentContainer>
      <ComponentContainer labelText="Modal">
        <Modal>HELLO CODESTATES!</Modal>
      </ComponentContainer>
      <ComponentContainer labelText="Tag">
        <Tag tags={tags} handleAdd={addTag} handleRemove={removeTag} />
      </ComponentContainer>
      <ComponentContainer labelText="AutoComplete">
        <AutoComplete keywords={savedKeywords} handleSave={setSavedKeywords} />
      </ComponentContainer>
    </RootContainer>
  );
}

export default App;
