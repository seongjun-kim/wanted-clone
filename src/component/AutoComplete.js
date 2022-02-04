import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import colors from "../lib/colors";

const Container = Styled.div`
  position: relative;
  width: 100%;
`;
const InputContainer = Styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: space-around;
  align-items: center;
  background-color: ${colors.white};
  border: 1px solid ${colors.gray};
  height: 50px;
  border-radius: ${(props) =>
    props.hasSuggestions ? "10px  10px 0 0" : "10px"};
  padding: 8px;
  box-shadow: ${(props) =>
    props.isFocused ? `0 4px 4px ${colors.gray}` : "none"};
`;

const Input = Styled.input`
  width: 100%;
  height: 100%;
  border: 0;
`;

const ResetButton = Styled.button`
  font-size: 10px;
  padding: 3px;
  background-color: ${colors.white};
`;

const SuggetionListContainer = Styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 30;
  flex-direction: column;
  background-color: ${colors.white};
  width: 100%;
  max-height: 150px;
  overflow: scroll;
  border-radius: 0 0 10px  10px;
  border: 0 solid ${colors.gray};
  border-width: 0 1px 0 1px;
  padding: 8px 0;
  box-shadow: 0 4px 4px ${colors.gray};
`;

const SuggestionItemContainer = Styled.button`
    width: 100%;
    height: 20px;
    text-align: start;
    padding: 4px 8px;
    :hover{
      background-color: ${colors.gray};
    }
`;

const SuggestionItemText = Styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const SuggestionItem = ({ text, handleClick }) => {
  return (
    <SuggestionItemContainer
      onClick={() => {
        console.log("onCLick");
        handleClick();
      }}
    >
      <SuggestionItemText>{text}</SuggestionItemText>
    </SuggestionItemContainer>
  );
};

const AutoComplete = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputText, setInputText] = useState("");
  const [savedKeywords, setSavedKeywords] = useState([
    "antique",
    "refurbished",
    "vintage",
    "중고A급",
    "rustic",
  ]);
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const currentText = e.target.value;
    setInputText(currentText);
    getSuggestions(currentText);
  };

  const getSuggestions = (text) => {
    if (text.length === 0) {
      setSuggestions([]);
      return;
    }
    setSuggestions(
      savedKeywords.filter(
        (keyword) => keyword.toLowerCase().includes(text) && keyword
      )
    );
  };
  const handleReset = () => {
    setInputText("");
  };
  const saveKeyword = (text) => {
    if (!savedKeywords.includes(text))
      setSavedKeywords([text, ...savedKeywords]);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      saveKeyword(inputText);
      handleReset();
    }
  };
  const handleClickSuggestion = (text) => {
    setInputText(text);
  };

  useEffect(() => {
    getSuggestions(inputText);
  }, [inputText]);

  return (
    <Container>
      <InputContainer isFocused={isFocused} hasSuggestions={suggestions.length}>
        <Input
          value={inputText}
          onChange={handleInputChange}
          placeholder="Press enter to save keywords"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyPress={handleKeyPress}
        />
        <ResetButton onClick={handleReset}>𝗫</ResetButton>
      </InputContainer>
      {suggestions.length > 0 && (
        <SuggetionListContainer>
          {suggestions.map((keyword) => {
            return (
              <SuggestionItem
                text={keyword}
                handleClick={() => handleClickSuggestion(keyword)}
              />
            );
          })}
        </SuggetionListContainer>
      )}
    </Container>
  );
};

export default AutoComplete;
