import React, { useCallback } from "react";
import { usePagination } from "../../Hooks/usePagination";
import { ICategorie } from "../../Services/Categorie/CategorieInterface";
import { CategorieService } from "../../Services/Categorie/CategorieService";
import { Item } from "./Fragment/Item/Item";
import { Pagination } from "./Fragment/Pagination/Pagination";
import { Search } from "./Fragment/Search/Search";
import { Container } from "./styled";

export const AppList = () => {
  const handleFetch = useCallback(async () => {
    const { data } = await CategorieService.getCategorie();    
    return data;
  }, []);

  const { PageContainer, rows } = usePagination<ICategorie>({
    onFetch: handleFetch,
  });

  return (
    <Container>
      <Search />
      <PageContainer>
        <ul>
          {rows.map((item) => {
            return (
              <li key={item.id}>
                <Item />
              </li>
            );
          })}
        </ul>
      </PageContainer>

      <Pagination />
    </Container>
  );
};
