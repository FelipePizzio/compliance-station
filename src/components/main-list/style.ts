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

  height: 54px;

  padding-right: 40px;

  div {
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
      background: var(--azul);
      width: 28px;
      height: 28px;
      justify-content: center;
    }
  }
`;

export const ListHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  height: 54px;

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

export const CheckBox = styled.button`
  border: 1px solid var(--cinza-300);
  background: var(--branco);

  height: 16px;
  width: 16px;

  cursor: pointer;
`;
