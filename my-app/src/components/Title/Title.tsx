import styled from 'styled-components';

type TitleProps = {
    title: string;
};

export const Title = ({ title }: TitleProps) =>{
    return (
    <TitleContainer>
        <TitleStyled>{title}</TitleStyled>
    </TitleContainer>
    );
};

const TitleContainer = styled.div`
    min-width: 150px;
    width: 100%;
    padding: 15px 20px;
    text-align: left;
    background-color: transparent;
    margin-top:10px;
`;

const TitleStyled = styled.h1`
    font-size: 35px;
    font-weight: 700;
    color: ${({theme}) => theme.colors.heading};
    margin: 0;
    /* white-space: nowrap; */
`;