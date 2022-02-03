import React, { useState } from 'react'
import Styled from 'styled-components'
import colors from '../lib/colors';

const NUM_OF_TABS = 3;

const Container = Styled.div`
    height: 80%;
    background-color: ${colors.background};
`
const TabBar = Styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    border: 0;
    height: 80px;
    background-color: ${colors.gray};
    padding-left: 20px;
`
const TabBox = Styled.button`
    display:flex;    
    justify-content: center;
    align-items: center;
    width: ${(100 / NUM_OF_TABS)}%;
    height: 100%;
    background-color: ${props => props.selected ? colors.primary : colors.gray};
    color: white;
    font-weight: bold;
    text-align: center;
    transition: background 0.1s linear;
`
const Content = Styled.div`
    display:flex;    
    justify-content: center;
    align-items: center;
    height: 100px;
    margin: 20px 0px;
    color: gray;
    font-weight: bold;
    text-align: center;
`

const Tab = () => {
    const [selectedIndex, setSelectedIndex] = useState(0)

    const handleClick = (index) => {
        setSelectedIndex(index);
    }

    const getDisplayText = () => {
        const statement = 'Tab menu ';
        switch (selectedIndex) {
            case 0:
                return statement + 'ONE';
            case 1:
                return statement + 'TWO';
            case 2:
                return statement + 'THREE';
            default:
                return statement + 'UNKNOWN';
        }
    }

    return (
        <Container>
            <TabBar>
                <TabBox selected={selectedIndex === 0} onClick={() => handleClick(0)}>Tab1</TabBox>
                <TabBox selected={selectedIndex === 1} onClick={() => handleClick(1)}>Tab2</TabBox>
                <TabBox selected={selectedIndex === 2} onClick={() => handleClick(2)}>Tab3</TabBox>
            </TabBar>
            <Content>{getDisplayText()}</Content>
        </Container>
    )
}

export default Tab