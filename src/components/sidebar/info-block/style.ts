import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 14.63px;

  color: var(--cinza-700);
`;

export const Item = styled.div`
  display: flex;
  gap: 20px;

  cursor: pointer;

  p {
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    color: var(--cinza-700);
  }
`;

export const Spacer = styled.div`
  border: 0.5px solid var(--cinza-300);
  margin-bottom: 10px;
  width: 90%;
`;
