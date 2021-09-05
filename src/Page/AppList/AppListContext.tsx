import React, { createContext, useState } from "react";

const defaultValue = {
  selected: "",
  setSelected: (value: string) => {},
};

const appListContext = createContext(defaultValue);

const AppListContextProvider: React.FC = ({ children }) => {
  const [selected, setSelected] = useState("");
  const value = { selected, setSelected };

  return (
    <appListContext.Provider value={value}>{children}</appListContext.Provider>
  );
};

export { AppListContextProvider, appListContext };
