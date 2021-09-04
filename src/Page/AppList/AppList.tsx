import React from "react";
import { Item } from "./Fragment/Item/Item";
import { Search } from "./Fragment/Search/Search";
import { Container } from "./styled";

export const AppList = () => {
  return (
    <Container>
      <Search />
      <ul>
        <li>
          <Item />
        </li>
      </ul>
    </Container>
  );
};
