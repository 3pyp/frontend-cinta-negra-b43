import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Routes from "./Routes";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Switch>
          <Routes />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
