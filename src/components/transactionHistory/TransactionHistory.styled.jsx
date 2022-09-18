import styled from '@emotion/styled';

export const TransactionTableBox = styled.table`
  min-width: 200px;
  width: 100%;
  max-width: 600px;
  border-collapse: collapse;
  border-radius: 4px; 
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
//   overflow: hidden;
`;

export const TransactionTh = styled.th`

  width: calc(100% / 3);
  padding: 8px;
  font-size: 20px;
  font-weight: 500;
  color: rgb(240, 240, 240);
  border: 1px solid rgb(150, 150, 150);
  background-color: rgb(33, 150, 243);
`;
