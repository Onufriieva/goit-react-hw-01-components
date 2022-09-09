import styled from '@emotion/styled';

export const DivBox = styled.div`
display: flex;
align-items: center;
`;

export const ActivityBox = styled.span`
width: 16px;
height: 16px;
margin-right: 8px;
margin-left: 8px;
border-radius: 50%;
background-color: ${p =>
    p.isOnline ? p.theme.colors.online : p.theme.colors.offline};
`;

export const FriendsImg = styled.img`
margin-right: 8px;
`;

export const FriendsName = styled.p`
color: #00000;
font-size: 20px;
font-weight: 500;
`;