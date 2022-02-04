import React, { useState } from "react";
import Styled from "styled-components";
import colors from "../lib/colors";

const Container = Styled.label`
    display: flex;    
    padding: 10px;
`;
const Input = Styled.input`
    margin-left: 10px;
    &:focus {
        border: solid 2px ${colors.primary};
    }
`;

const ClickToEdit = ({ inputs, handleChange }) => {
  return (
    <div>
      <Container>
        이름
        <Input
          type="text"
          name="name"
          onChange={handleChange}
          value={inputs.name}
        />
      </Container>
      <Container>
        나이
        <Input
          type="text"
          name="age"
          onChange={handleChange}
          value={inputs.age}
        />
      </Container>
    </div>
  );
};

export default ClickToEdit;
