import React, { useEffect, useState } from "react";
import { List, Item, Link } from "./styled";

type Props = {
  pageLength: number;
  activePage: number;
  onSelectPage: (index: number) => void;
  onSelectPageSize: (size: number) => void;
};

interface IPages {
  label: number;
  index: number;
}

export const Pagination = ({ pageLength, onSelectPage, activePage }: Props) => {
  const [pages, setPages] = useState<IPages[]>([]);

  useEffect(() => {
    let list = [];
    for (let index = 0; index < pageLength; index++) {
      const page = {
        label: index + 1,
        index,
      };
      list.push(page);
    }
    setPages(list);
  }, [pageLength]);

  if (pages.length === 0) return null;

  return (
    <List>
      <Item>
        <Link onClick={() => onSelectPage(activePage - 1)}>&lt;</Link>
      </Item>

      {pages.map((item) => (
        <Item key={item.index}>
          <Link
            active={activePage === item.index}
            onClick={() => onSelectPage(item.index)}
          >
            {item.label}
          </Link>
        </Item>
      ))}

      <Item>
        <Link onClick={() => onSelectPage(activePage + 1)}>&gt;</Link>
      </Item>
    </List>
  );
};
