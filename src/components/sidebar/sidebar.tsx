import MenuHamburguer from "components/menu-hamburguer/menu-hamburguer";
import React, { useState } from "react";
import InfoBlock from "./info-block/info-block";
import { SideBarInfo } from "mockedData/sidebar-info";
import { Container } from "./style";

const Sidebar = () => {
  const [fullMenu, setFullMenu] = useState(false);
  
  const handleChangeMenu = () => {
    setFullMenu(!fullMenu);
  }

  return (
    <Container className={fullMenu ? 'fullMenu' : 'hideMenu'} >
      <MenuHamburguer onClick={handleChangeMenu} />
      {SideBarInfo.map(info => 
        <InfoBlock 
          title={info.title} 
          secondTitle={info.secondTitle}
          content={info.content}
          hide={!fullMenu}
        />
      )}
      
    </Container>
  );
};

export default Sidebar;