import styled from '@emotion/styled';

export const ContainerProfile = styled.div`
width: 330px;
margin-bottom: 24px;
background-color: #ffffff;
text-align: center;
justify-content: center;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15); 
border-radius: 4px;
`;

export const ContainerImg = styled.div`
padding: 16px;
`;

export const ImageProfile = styled.img`
margin: 0px auto 24px;
border-radius: 50%;
width: 200px;
height: auto;
display: block;
background-color: rgb(240, 240, 240);
`;

export const NameProfile = styled.p`
margin: 0px 0px 16px 0px;
font-size: 24px;
font-weight: 700;
`;

export const TagProfile = styled.p`
margin: 0px 0px 16px 0px;
font-size: 20px;
font-weight: 500;
color: rgb(100, 100, 100);
`;

export const LocationProfile = styled.p`
margin: 0px;
font-size: 20px;
font-weight: 500;
color: rgb(100, 100, 100);
`;


export const ListProfile = styled.ul`
display: flex;
justify-content: center;
align-items: center;
padding: 0px;
list-style: none;
margin: 0px;
border-top: 2px solid  rgb(200, 200, 200);
`;

export const ItemListProfile = styled.li`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 16px;
margin: 0px;
width: 110px;
border-right: 2px solid  rgb(200, 200, 200);

&:last-child {
    border-right: none;
}
`;

export const CategorySpan = styled.span`
font-size: 16px;
font-weight: 500;
color: rgb(100, 100, 100);
margin-bottom: 8px;
`;

export const QuantitySpan = styled.span`
font-size: 20px;
font-weight: 500;
color: #000000;
`;