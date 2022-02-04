import React, { useState } from "react";
import Styled from "styled-components";
import colors from "../lib/colors";

const InputContainer = Styled.div`
  display: flex;
  width: 300px;
  max-width: 80%;
  overflow: scroll;
  border: 1px solid ${(props) => (props.active ? colors.primary : colors.gray)};
  border-radius: 5px;
  padding: 10px;
  background-color: ${colors.white};
`;

const Input = Styled.input`
  border: none;
  background-color: transparent;
`;

const ChipContainer = Styled.div`
    display: flex;
    align-items: center;
    color: ${colors.white};
    box-sizing: border-box;
    height: 30px;
    border-radius: 10px;
    padding: 0 10px;
    background-color: ${colors.primary};
    margin-right: 10px;
`;
const ChipText = Styled.text`
    display: block;
    max-width: 90px;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
`;
const RemoveButton = Styled.button`
    font-size: 5px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-left: 5px;
    color: ${colors.primary};
    background-color: ${colors.white};
`;
const TagChip = ({ text, onRemove }) => {
  return (
    <ChipContainer>
      <ChipText>{text}</ChipText>
      <RemoveButton onClick={onRemove}>𝗫</RemoveButton>
    </ChipContainer>
  );
};

const Tag = ({ tags, handleAdd, handleRemove }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputText, setInputText] = useState("");
  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAdd(inputText);
      setInputText("");
    }
  };

  return (
    <InputContainer active={isFocused}>
      {tags.map((tag, index) => (
        <TagChip text={tag} onRemove={() => handleRemove(index)} />
      ))}
      <Input
        value={inputText}
        placeholder="Press enter to add tags"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
    </InputContainer>
  );
};

export default Tag;
