import React, { useCallback, useContext, useState } from "react";
import { Loading } from "../../Components/Loading/Loading";
import { usePagination } from "../../Hooks/usePagination";
import { IApp } from "../../Services/App/AppInterface";
import { AppService } from "../../Services/App/AppService";
import { appListContext } from "./AppListContext";
import { Item } from "./Fragment/Item/Item";

import { Search } from "./Fragment/Search/Search";
import { Container } from "./styled";

export const AppList = () => {
  const { selected, searchByApp } = useContext(appListContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleFetch = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await AppService.getApp(selected, searchByApp);
      return data;
    } finally {
      setIsLoading(false);
    }
  }, [selected, searchByApp]);

  const { PageContainer, rows } = usePagination<IApp>({
    onFetch: handleFetch,
  });

  return (
    <Container>
      <Loading isLoading={isLoading} />
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
