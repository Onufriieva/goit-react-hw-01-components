import styled from '@emotion/styled';

export const ListContainer = styled.ul`
display: flex;
margin: 0px;
padding: 0px; 
list-style: none;
`;

const getRandomColor = () =>
`#${Math.floor(Math.random() * 16777215)
  .toString(16)
  .padEnd(6, '0')}`;


export const ItemContainer = styled.li`
display: flex;
flex-direction: column;
width: 110px;
padding: 16px 0 16px;
font-weight: 500;
color: #ffffff;
background-color: ${getRandomColor};
`;

export const LabelSpan = styled.span`
margin-bottom: 8px;
font-size: 16px;
`;

export const PercentSpan = styled.span`
font-size: 20px;
`;