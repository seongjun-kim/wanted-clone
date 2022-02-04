import React from "react";
import Styled from "styled-components";
import colors from "../lib/colors";

const ToggleBox = Styled.button`
    display: block;    
    height: 50px;
    width: 100px;
    margin: 20px;
    background-color: ${(props) =>
      props.status ? colors.primary : colors.gray};
    transition: all 0.3s ease-in-out;
    border-radius: 25px;
`;
const ToggleButton = Styled.div`
    margin: 5px;
    height: 40px;
    width: 40px;
    background-color: ${colors.white};
    border-radius: 50%;
    position: relative;
    left: ${(props) => (props.status ? "50px" : "0px")};
    transition: all 0.3s ease-in-out;
`;

const Toggle = ({ isActive, handleClick }) => {
  return (
    <ToggleBox status={isActive} onClick={handleClick}>
      <ToggleButton status={isActive} />
    </ToggleBox>
  );
};

export default Toggle;
