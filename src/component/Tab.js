import React from "react";
import Styled from "styled-components";
import colors from "../lib/colors";

const NUM_OF_TABS = 3;

const TabBar = Styled.div`
    display: flex;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    background-color: ${colors.gray};
    padding-left: 20px;
`;
const TabBox = Styled.button`
    justify-content: center;
    align-items: center;
    width: ${100 / NUM_OF_TABS}%;
    height: 100%;
    background-color: ${(props) =>
      props.selected ? colors.primary : colors.gray};
    color: white;
    font-weight: bold;
    text-align: center;
    transition: background 0.1s linear;
`;

const Tab = ({ selectedIndex, handleClick }) => {
  return (
    <TabBar>
      <TabBox selected={selectedIndex === 0} onClick={() => handleClick(0)}>
        Tab1
      </TabBox>
      <TabBox selected={selectedIndex === 1} onClick={() => handleClick(1)}>
        Tab2
      </TabBox>
      <TabBox selected={selectedIndex === 2} onClick={() => handleClick(2)}>
        Tab3
      </TabBox>
    </TabBar>
  );
};

export default Tab;
