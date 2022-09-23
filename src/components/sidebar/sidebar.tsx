import MenuHamburguer from "components/menu-hamburguer/menu-hamburguer";
import React from "react";
import InfoBlock from "./info-block/info-block";
import { Container } from "./style";

const Sidebar = () => {
  return (
    <Container>
      <MenuHamburguer />
      <InfoBlock />
    </Container>
  );
};

export default Sidebar;