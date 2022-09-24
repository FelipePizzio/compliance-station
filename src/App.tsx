import Header from "components/header/header";
import MainList from "components/main-list/main-list";
import Sidebar from "components/sidebar/sidebar";
import React from "react";
import { GlobalStyle } from "styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Sidebar />
        <MainList />
      </main>
    </>
  );
}

export default App;
