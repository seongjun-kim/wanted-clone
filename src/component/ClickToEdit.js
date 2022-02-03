import React, { useState } from 'react'
import Styled from 'styled-components'
import colors from '../lib/colors';

const Container = Styled.div`
    display:flex;
    flex-direction: column;    
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: ${colors.background};
`

const Label = Styled.label`
    display: flex;    
    padding: 10px;
`
const Input = Styled.input`
    margin-left: 10px;
    &:focus {
      border: solid 2px ${colors.primary};
    }
`

const Content = Styled.text`
    font-weight: bold;
    padding: 10px;
`

const ClickToEdit = () => {
    const [inputs, setInputs] = useState({
        name: "김코딩",
        age: "20",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    return (
        <Container>
            <Label>
                이름
                <Input type="text" name="name" onChange={handleChange} value={inputs.name} />
            </Label>
            <Label>
                나이
                <Input type="text" name="age" onChange={handleChange} value={inputs.age} />
            </Label>
            <Content>
                이름 {inputs.name || '?'} 나이 {inputs.age || '?'}
            </Content>
        </Container>
    );
}

export default ClickToEdit;