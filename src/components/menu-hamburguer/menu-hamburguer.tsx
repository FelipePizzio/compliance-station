import React from "react";
import { Container } from "./style";

const MenuHamburguer = ({ onClick }) => {
  return(
    <Container onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
    </Container>
  );
};

export default MenuHamburguer;