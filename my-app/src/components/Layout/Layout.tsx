import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import type { ReactNode } from 'react';
import styled from 'styled-components';

type LayoutProps = {
    children?: ReactNode;
}

export const Layout = ({children}: LayoutProps) => {
    return(
        <>
        <Wrapper>
            <Header />
                <Main>
                    <Container>
                        {children}
                    </Container>
                </Main>
            <Footer leftText='©2022 Blogfolio' rightText='All rights reserved' />
        </Wrapper>
            
        </>
        
    )
}

const Wrapper = styled.div`
    min-height: 100vh;
    display:flex;
    flex-direction: column;
`;

const Main = styled.main`
    flex:1;
    background-color: ${({theme}) => theme.colors.pageBg };
   
`;

const Container = styled.div`
    max-width:1100px;
    width:100%;
    margin: 0 auto;
    padding-top: 20px;

`;