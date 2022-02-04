import React from "react";
import Styled from "styled-components";
import colors from "../lib/colors";

const TAB_PAGES = [1, 2, 3];
export const TAB_CONTENTS = ["ONE", "TWO", "THREE"];

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
    width: ${100 / TAB_PAGES.length}%;
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
      {TAB_PAGES.map((tab, index) => {
        return (
          <TabBox
            selected={selectedIndex === index}
            onClick={() => handleClick(index)}
          >
            Tab{tab}
          </TabBox>
        );
      })}
    </TabBar>
  );
};

export default Tab;
