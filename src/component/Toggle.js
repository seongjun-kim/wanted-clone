import React from "react";
import Styled from "styled-components";
import colors from "../lib/colors";

const ToggleBox = Styled.button`
    display: flex;    
    align-items: center;
    justify-content: ${(props) => (props.status ? "flex-end" : "flex-start")};
    height: 50px;
    width: 100px;
    margin: 20px;
    background-color: ${(props) =>
      props.status ? colors.primary : colors.gray};
    transition: all 0.3s ease-in-out;
    border-radius: 25px;
    border: none;
`;
const ToggleButton = Styled.div`
    height: 40px;
    width: 40px;
    background-color: ${colors.white};
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
`;

const Toggle = ({ isActive, handleClick }) => {
  return (
    <ToggleBox status={isActive} onClick={handleClick}>
      <ToggleButton />
    </ToggleBox>
  );
};

export default Toggle;
