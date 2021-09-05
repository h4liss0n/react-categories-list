import React, { useEffect, useState } from "react";
import { List, Item, Link } from "./styled";

type Props = {
  pageLength: number;
  onSelectPage: (index: number) => void;
  onSelectPageSize: (size: number) => void;
};

interface IPages {
  label: number;
  index: number;
}

export const Pagination = ({ pageLength, onSelectPage }: Props) => {
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

  return (
    <List>
      <Item>
        <Link onClick={() => onSelectPage(pages[0].index)}>&lt;</Link>
      </Item>

      {pages.map((item) => (
        <Item>
          <Link onClick={() => onSelectPage(item.index)}>{item.label}</Link>
        </Item>
      ))}

      <Item>
        <Link onClick={() => onSelectPage(pages[pages.length-1].index)}>
          &gt;
        </Link>
      </Item>
    </List>
  );
};
