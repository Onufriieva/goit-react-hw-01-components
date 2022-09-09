import styled from '@emotion/styled';

export const TransactionItemBox = styled.td`

  width: calc(100% / 3);
  padding: 8px;
  font-size: 16px;
  text-align: center;
  color: rgb(150, 150, 150);
  border: 1px solid rgb(150, 150, 150);
`;


export const TransactionTrBox = styled.tr`
background-color: #ffffff;

&:nth-child(2n) {
    background-color: rgb(240, 240, 240);
}
`;