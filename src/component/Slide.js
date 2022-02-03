import React from "react";
import styled from "styled-components";

const SlideImage = styled.img`
  cursor: pointer;
  vertical-align: middle;
  margin: 10px;
  padding: 0px;
  width: 80%;
  height: 100%;
  border-radius: 4px;
  object-fit: cover;
  display: inline-block;
`;

export default function Slide({ image }) {
  return <SlideImage src={image} />;
}
