import React from "react";
import IconGlobo from 'assets/globe.svg';
import { Container, Item, Spacer, Title } from "./style";

const InfoBlock = () => {
  return (
    <Container>
      <Title>GERENCIADOR STATION</Title>
      <Item>
        <img alt='globo' src={IconGlobo}/>
        <p>Painel Global</p>
      </Item>
      <Item>
        <img alt='globo' src={IconGlobo}/>
        <p>Painel Detalhado</p>
      </Item>
      <Spacer />
    </Container>
  );
}

export default InfoBlock;