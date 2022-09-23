import Header from "components/header/header";
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
      </main>
    </>
  );
}

export default App;
