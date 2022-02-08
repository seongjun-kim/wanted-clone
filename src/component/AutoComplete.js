import React, { useCallback, useEffect, useState } from "react";
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
  border: none;
  outline: none;
`;

const ResetButton = Styled.button`
  font-size: 10px;
  padding: 3px;
  background-color: ${colors.white};
  border: none;
`;

const SuggetionListContainer = Styled.div`
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  box-sizing: border-box;
  position: absolute;
  top: 50px;
  flex-direction: column;
  background-color: ${colors.white};
  width: 100%;
  max-height: 150px;
  overflow: scroll;
  border-radius: 0 0 10px  10px;
  border: 0 solid ${colors.gray};
  border-width: 0 1px;
  padding: 8px 0;
  box-shadow: 0 4px 4px ${colors.gray};
`;

const SuggestionItemContainer = Styled.button`
  width: 100%;
  height: 20px;
  text-align: start;
  padding: 4px 8px;
  background-color: ${colors.white};
  :hover{
    background-color: ${colors.gray};
  }
  border: none;
`;

const SuggestionItemText = Styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const SuggestionItem = ({ text, handleClick, ...rest }) => {
  return (
    <SuggestionItemContainer onClick={handleClick} {...rest}>
      <SuggestionItemText>{text}</SuggestionItemText>
    </SuggestionItemContainer>
  );
};

const AutoComplete = ({ keywords, handleSave }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputText, setInputText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const currentText = e.target.value;
    setInputText(currentText);
    getSuggestions(currentText);
  };

  const getSuggestions = useCallback(
    (text) => {
      if (text.length === 0) {
        setSuggestions([]);
        return;
      }
      setSuggestions(
        keywords.filter((keyword) =>
          keyword.toLowerCase().includes(text.toLowerCase())
        )
      );
    },
    [keywords]
  );

  const handleReset = () => {
    setInputText("");
  };

  const saveKeyword = (text) => {
    if (!keywords.includes(text)) handleSave([text, ...keywords]);
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

  const clearSuggetsions = () => {
    setSuggestions([]);
  };

  useEffect(() => {
    getSuggestions(inputText);
  }, [inputText, getSuggestions]);

  return (
    <Container onBlur={() => clearSuggetsions()}>
      <InputContainer isFocused={isFocused} hasSuggestions={suggestions.length}>
        <Input
          value={inputText}
          onChange={handleInputChange}
          placeholder="Press enter to save keywords"
          onFocus={() => setIsFocused(true)}
          onClick={() => getSuggestions(inputText)}
          onBlur={() => setIsFocused(false)}
          onKeyPress={handleKeyPress}
        />
        <ResetButton onClick={handleReset}>𝗫</ResetButton>
      </InputContainer>
      <SuggetionListContainer isVisible={suggestions.length > 0}>
        {suggestions.map((keyword, index) => {
          return (
            <SuggestionItem
              key={index.toString()}
              text={keyword}
              onMouseDown={(e) => e.preventDefault()}
              handleClick={() => handleClickSuggestion(keyword)}
            />
          );
        })}
      </SuggetionListContainer>
    </Container>
  );
};

export default AutoComplete;
