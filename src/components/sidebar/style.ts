import styled from 'styled-components';

export const Container = styled.div`
  width: 100px;
  height: calc(100vh - 68px);
  background: var(--branco);

  display: flex;
  flex-direction: column;
  position: absolute;

  padding-left: 35px;
  padding-top: 28px;

  &.fullMenu {
    width: 248px;
  }

  @media (max-width: 821px) {
    &.hideMenu {
      height: 70px;
    }
  }
`;
