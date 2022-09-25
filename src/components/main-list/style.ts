import styled from 'styled-components';

export const Container = styled.section`
  width: 982px;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  margin-bottom: 43px;

  p {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;

    color: var(--cinza-900);
  }

  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;

    color: var(--cinza-700);
  }
`;

export const BtnAdd = styled.button`
  background: var(--roxo);
  color: var(--branco);

  border: none;
  border-radius: 25px;

  height: 40px;
  width: 164px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  cursor: pointer;

  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;

    color: var(--branco);
  }
`;

export const ListContainer = styled.div`
  width: 100%;

  background: var(--branco);
  border: 0.5px solid var(--cinza-100);
  box-shadow: 0px 2px 4px rgba(156, 156, 156, 0.3);
  border-radius: 10px;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;

  height: 54px;

  padding-right: 40px;
`;

export const SearchContainer = styled.div`
  background: var(--cinza-100);
  border-radius: 25px;
  border: none;

  width: 233px;
  height: 32px;

  display: flex;
  align-items: center;

  display: flex;
  justify-content: space-between;

  input {
    margin-left: 10px;
    width: 90%;
    background: var(--cinza-100);
    border: none;

    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
  }

  div {
    display: flex;
    background: var(--azul);
    width: 28px;
    height: 28px;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
  }
`;

export const DropdownFilter = styled.ul`
  border: 1px solid var(--cinza-100);
  border-radius: 5px;
  width: 89px;
  height: 32px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: var(--azul);
  }
  cursor: pointer;
`;

export const ModalDropdown = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  top: 350px;
  background: var(--branco);

  z-index: 2;

  border: 0.5px solid var(--cinza-100);
  border-radius: 10px;
  padding: 10px;
  width: 224px;

  span {
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: var(--cinza-700);
    margin-bottom: 10px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 10px;
    padding-left: 10px;

    height: 36px;
    width: 99%;

    li {
      list-style: none;
    }
  }

  div.activeFilter {
    background: #f2f5ff;
  }

  div:hover {
    background: #f2f5ff;
  }

  button:last-child {
    color: var(--azul);
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    background: none;
    border: none;
    border-top: 0.5px solid var(--cinza-100);

    height: 40px;
    cursor: pointer;
  }
`;

export const ListHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  height: 54px;

  border-top: 1px solid #e6e6e6;

  p {
    color: var(--roxo);
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    width: 200px;
  }

  div {
    width: 50px;
  }
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  height: 54px;

  border-top: 1px solid #e6e6e6;

  p {
    color: var(--cinza-700);
    width: 200px;
  }

  div {
    width: 50px;

    button {
      background: none;
      border: none;
      cursor: pointer;

      width: 14px;
      height: 14px;
    }
  }
`;

export const ListTotal = styled.div`
  display: flex;
  align-items: center;

  padding-left: 30px;
  height: 54px;

  border-top: 1px solid #e6e6e6;

  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 24px;
    color: var(--cinza-700);
  }
`;

export const CheckBox = styled.input`
  background: var(--branco);

  height: 16px;
  width: 16px;

  cursor: pointer;
`;
