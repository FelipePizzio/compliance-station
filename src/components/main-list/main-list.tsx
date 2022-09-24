import React from 'react';
import IconDelete from 'assets/delete.png';
import IconSearch from 'assets/search.png';
import IconFilter from 'assets/filter.png';
import { FornecedoresInfo } from 'mockedData/fornecedores-info';
import { 
  BtnAdd, 
  CheckBox, 
  Container, 
  DropdownFilter, 
  FilterContainer, 
  Header, 
  ListContainer, 
  ListHeader, 
  ListItem, 
  ListTotal
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
          <DropdownFilter>
            <img src={IconFilter} alt='Icone Filtro' />
            Filtro
          </DropdownFilter>
        </FilterContainer>
        <ListHeader>
          <CheckBox type='button' />
          <p>Nome do Fornecedor</p>
          <p>Classificação</p>
          <p>Data de Criação</p>
          <div />
        </ListHeader>
        {FornecedoresInfo.map(info =>(
          <ListItem>
            <CheckBox type='button' />
            <p>{info.nome}</p>
            <p>{info.classificacao}</p>
            <p>{info.data}</p>
            <div>
              <button>
                <img src={IconDelete} alt="Icone de Lixeira" />
              </button>
            </div>
          </ListItem>
        ))}
        <ListTotal>
          <p>{FornecedoresInfo.length} resultados encontrados</p>
        </ListTotal>
      </ListContainer>
    </Container>
  );
};

export default MainList;