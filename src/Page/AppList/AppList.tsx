import React, { useCallback, useContext } from "react";
import { usePagination } from "../../Hooks/usePagination";
import { IApp } from "../../Services/App/AppInterface";
import { AppService } from "../../Services/App/AppService";
import { appListContext } from "./AppListContext";
import { Item } from "./Fragment/Item/Item";

import { Search } from "./Fragment/Search/Search";
import { Container } from "./styled";

export const AppList = () => {
  const { selected, searchByApp } = useContext(appListContext);

  const handleFetch = useCallback(async () => {
    const data = await AppService.getApp(selected, searchByApp);
    console.log(data);
    return data;
  }, [selected, searchByApp]);

  const { PageContainer, rows } = usePagination<IApp>({
    onFetch: handleFetch,
  });

  return (
    <Container>
      <Search />
      <PageContainer>
        <ul>
          {rows?.map((item) => {
            return (
              <li key={item.id}>
                <Item app={item} />
              </li>
            );
          })}
        </ul>
      </PageContainer>
    </Container>
  );
};
