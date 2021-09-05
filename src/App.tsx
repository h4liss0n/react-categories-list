import React from "react";
import { Nav } from "./Components/Nav/Nav";
import { AppList } from "./Page/AppList/AppList";
import { AppListContextProvider } from "./Page/AppList/AppListContext";
import { Container } from "./styled";

function App() {
  return (
    <Container>
      <AppListContextProvider>
        <Nav />
        <AppList />
      </AppListContextProvider>
    </Container>
  );
}

export default App;
