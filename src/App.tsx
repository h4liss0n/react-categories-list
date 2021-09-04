import React from 'react';
import { Nav } from './Components/Nav/Nav';
import { AppList } from './Page/AppList/AppList';
import {Container} from './styled'

function App() {
  return (
    <Container>
      <Nav/>
      <AppList/>
    </Container>
  );
}

export default App;
