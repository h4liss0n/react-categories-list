import React from "react";

import { NavContainer, Title, List, Item, Link } from "./styled";

export const Nav = () => {
  return (
    <NavContainer>
      <Title>Categories</Title>
      <List>
        <Item>
          <Link href="#">Channels</Link>
        </Item>
        <Item>
          <Link href="#">Dialer</Link>
        </Item>
        <Item>
          <Link href="#">Optimization</Link>
        </Item>
        <Item>
          <Link href="#">Reporting</Link>
        </Item>
        <Item>
          <Link href="#">Voice Analytics</Link>
        </Item>
      </List>
    </NavContainer>
  );
};
