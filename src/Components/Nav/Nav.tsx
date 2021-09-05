import React, { useContext, useEffect, useState } from "react";
import { appListContext } from "../../Page/AppList/AppListContext";
import { AppService } from "../../Services/App/AppService";

import { NavContainer, Title, List, Item, Link } from "./styled";

export const Nav = () => {
  const { selected, setSelected } = useContext(appListContext);
  const [list, setList] = useState([""]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await AppService.getCategorie();
      setList(data);
    };

    fetchData();
  }, []);
  return (
    <NavContainer>
      <Title>Categories</Title>
      <List>
        {list.map((item) => (
          <Item key={item}>
            <Link active={selected === item} onClick={() => setSelected(item)}>
              {item ? item : "All Categories"}
            </Link>
          </Item>
        ))}
      </List>
    </NavContainer>
  );
};
