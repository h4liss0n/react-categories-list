import React, { useContext, useEffect, useState } from "react";
import { Container } from "./styled";
import { InputText } from "./../../../../Components/InputText/InputText";
import { useDebounce } from "./../../../../Hooks/useDebounce";
import { appListContext } from "../../AppListContext";

export const Search = () => {
  const [search, setSearch] = useState("");
  const { setSearchByApp } = useContext(appListContext);

  const text = useDebounce<string>({
    value: search,
    delay: 2000,
    defaultValue: "",
  });

  useEffect(() => {
    setSearchByApp(text);    
  }, [setSearchByApp, text]);

  return (
    <Container>
      <InputText
        type="text"
        placeholder="Search by App"
        onTypo={(v) => setSearch(v)}
      />
    </Container>
  );
};
