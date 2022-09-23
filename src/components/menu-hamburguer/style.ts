import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;

  width: 24px;
  height: 24px;

  cursor: pointer;

  span {
    width: 100%;
    height: 3px;
    border-radius: 2px;

    background: var(--cinza-700);
  }
`;
