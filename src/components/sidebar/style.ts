import styled from 'styled-components';

export const Container = styled.div`
  width: 100px;
  height: calc(100vh - 68px);
  background: var(--branco);

  display: flex;
  flex-direction: column;

  padding-left: 35px;
  padding-top: 28px;

  &.fullMenu {
    width: 248px;
  }
`;
