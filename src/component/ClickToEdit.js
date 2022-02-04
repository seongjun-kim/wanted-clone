import React, { useState } from "react";
import Styled from "styled-components";
import colors from "../lib/colors";

const Container = Styled.label`
    display: flex;    
    padding: 10px;
`;
const Input = Styled.input`
    margin-left: 10px;
    border: solid 1px ${colors.gray};
    &:focus {
      border: solid 2px ${colors.highlight};
    }
`;

const ClickToEdit = ({ data, handleClickOutside }) => {
  const [inputs, setInputs] = useState(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <div>
      <Container>
        이름
        <Input
          type="text"
          name="name"
          onChange={handleChange}
          onBlur={() => handleClickOutside(inputs)}
          value={inputs.name}
        />
      </Container>
      <Container>
        나이
        <Input
          type="text"
          name="age"
          onChange={handleChange}
          onBlur={() => handleClickOutside(inputs)}
          value={inputs.age}
        />
      </Container>
    </div>
  );
};

export default ClickToEdit;
