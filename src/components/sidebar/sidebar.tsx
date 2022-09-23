import MenuHamburguer from "components/menu-hamburguer/menu-hamburguer";
import React from "react";
import InfoBlock from "./info-block/info-block";
import { SideBarInfo } from "mockedData/sidebar-info";
import { Container } from "./style";

const Sidebar = () => {
  return (
    <Container>
      <MenuHamburguer />
      {SideBarInfo.map(info => 
        <InfoBlock 
          title={info.title} 
          content={info.content} 
        />
      )}
    </Container>
  );
};

export default Sidebar;