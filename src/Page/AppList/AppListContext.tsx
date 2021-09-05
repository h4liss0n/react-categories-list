import React, { createContext, useState } from "react";

const defaultValue = {
  selected: "",
  setSelected: (value: string) => {},
  searchByApp: "",
  setSearchByApp: (value: string) => {},
};

const appListContext = createContext(defaultValue);

const AppListContextProvider: React.FC = ({ children }) => {
  const [selected, setSelected] = useState("");
  const [searchByApp, setSearchByApp] = useState("");
  const value = { selected, setSelected, searchByApp, setSearchByApp };

  return (
    <appListContext.Provider value={value}>{children}</appListContext.Provider>
  );
};

export { AppListContextProvider, appListContext };
