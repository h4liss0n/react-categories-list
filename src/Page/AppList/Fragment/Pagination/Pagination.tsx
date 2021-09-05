import React from "react";
import { List, Item, Link } from "./styled";

export const Pagination = () => {
  return (
    <List>
      <Item>
        <Link href="#">&lt;</Link>
      </Item>
      <Item>
        <Link href="#">1</Link>
      </Item>
      <Item>
        <Link href="#">2</Link>
      </Item>
      <Item>
        <Link href="#">3</Link>
      </Item>
      <Item>
        <Link href="#">&gt;</Link>
      </Item>
    </List>
  );
};
