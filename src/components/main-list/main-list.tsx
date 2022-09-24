import React from 'react';
import IconDelete from 'assets/delete.png';
import IconSearch from 'assets/search.png';
import { 
  BtnAdd, 
  CheckBox, 
  Container, 
  FilterContainer, 
  Header, 
  ListContainer, 
  ListHeader, 
  ListItem 
} from './style';

const MainList = () => {
  return (
    <Container>
      <Header>
        <div>
          <p>Fornecedores</p>
          <span>Lista de Fornecedores</span>
        </div>
        <BtnAdd type='button'>
          <span>+</span>
          <span>Fornecedor</span> 
        </BtnAdd>
      </Header>
      <ListContainer>
        <FilterContainer>
          <div>
            <input placeholder='Buscar por fornecedor' />
            <div>
              <img src={IconSearch} alt='Icone de pesquisa' />
            </div>
          </div>
          <ul></ul>
        </FilterContainer>
        <ListHeader>
          <CheckBox type='button' />
          <p>Nome do Fornecedor</p>
          <p>Classificação</p>
          <p>Data de Criação</p>
          <div />
        </ListHeader>
        <ListItem>
          <CheckBox type='button' />
          <p>Nome</p>
          <p>Tipo</p>
          <p>Data</p>
          <div>
            <button>
              <img src={IconDelete} alt="Icone de Lixeira" />
            </button>
          </div>
        </ListItem>
      </ListContainer>
    </Container>
  );
};

export default MainList;