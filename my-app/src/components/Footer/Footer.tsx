import styled from 'styled-components';

type FooterProps = {
    leftText?: string;
    rightText?: string;

}

export const Footer = ({leftText, rightText}: FooterProps) =>{
    return (
        <StyledFooter>
            <Container>
                <Text>{leftText}</Text>
                <Text>{rightText}</Text>
            </Container>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    background-color: #e7e5e5;
`;

const Container = styled.div`
    max-width: 1230px;
    width: 100%;
    margin: 0 auto;
    padding: 20px 15px;
    border-top:1px solid #c2bfbf;
    

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Text = styled.p`
    margin: 0;
    color: #9a9a9a;
    font-size: 12px;
    font-family: inherit;
`;