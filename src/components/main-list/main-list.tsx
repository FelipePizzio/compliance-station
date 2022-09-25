import React, { useState } from 'react';
import IconDelete from 'assets/delete.png';
import IconFilter from 'assets/filter.png';
import IconSearch from 'assets/search.png';
import { Classificacoes } from 'mockedData/classificacoes';
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
  ListTotal,
  ModalDropdown,
  SearchContainer
} from './style';

const MainList = () => {
  const [openDropdown ,setOpenDropdown] = useState(false);
  const [checkedStateList, setCheckedStateList] = useState(new Array(FornecedoresInfo.length).fill(false));
  const [checkedStateFilter, setCheckedStateFilter] = useState(new Array(Classificacoes.length).fill(false));
  const [checkAll, setCheckAll] = useState(false);

  const handleOnChangeList = (position: number) => {
    const updateCheckedState = 
      checkedStateList.map((item, index) =>
        index === position ? !item : item);

    setCheckedStateList(updateCheckedState);
  }

  const handleChangeAllList = () => {
    setCheckAll(!checkAll);
    const updateCheckedState = checkedStateList.map(item => !checkAll);
    setCheckedStateList(updateCheckedState);
  }

  const handleOnChangeFilter = (position: number) => {
    const updateCheckedState = 
      checkedStateFilter.map((item, index) =>
        index === position ? !item : item);

    setCheckedStateFilter(updateCheckedState);
  }

  const cleanAllFilter = () => {
    const updateCheckedState = checkedStateFilter.map(item => false);
    setCheckedStateFilter(updateCheckedState);
  }

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
          <SearchContainer>
            <input placeholder='Buscar por fornecedor' />
            <div>
              <img src={IconSearch} alt='Icone de pesquisa' />
            </div>
          </SearchContainer>
          <DropdownFilter onClick={() => setOpenDropdown(!openDropdown)}>
            <img src={IconFilter} alt='Icone Filtro' />
            <span>Filtro</span>
          </DropdownFilter>
          {openDropdown && (
            <ModalDropdown>
              <span>Classificações</span>
              {Classificacoes.map((c, index) => (
                <div key={index} className={checkedStateFilter[index] ? 'activeFilter' : ''}>
                  <CheckBox 
                    type='checkbox'
                    onChange={() => handleOnChangeFilter(index)}
                    checked={checkedStateFilter[index]}
                    />
                  <li>{c}</li>
                </div>
              ))}
              <button type='button' onClick={cleanAllFilter}>Limpar todos os filtros</button>
            </ModalDropdown>
          )}
        </FilterContainer>
        <ListHeader>
          <CheckBox 
            type='checkbox'
            onChange={handleChangeAllList}
            checked={checkAll}
          />
          <p>Nome do Fornecedor</p>
          <p>Classificação</p>
          <p>Data de Criação</p>
          <div />
        </ListHeader>
        {FornecedoresInfo.map((info, index) =>(
          <ListItem key={index}>
            <CheckBox 
              type='checkbox'
              onChange={() => handleOnChangeList(index)} 
              checked={checkedStateList[index]}
              />
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