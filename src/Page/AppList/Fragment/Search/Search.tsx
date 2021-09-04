import React from "react";
import { Container } from "./styled";
import { InputText } from './../../../../Components/InputText/InputText';

export const Search = () => {
  return <Container>
    <InputText type="text" placeholder="Search by App"/>
  </Container>;
};
