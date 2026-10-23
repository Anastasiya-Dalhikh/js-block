import type { ReactNode } from 'react';
import styled from 'styled-components';

type BtnProps = {
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    children: ReactNode;
}

export const Btn = ({onClick, type = 'button', children}: BtnProps) =>{
    return(
        <Button onClick={onClick} type={type}>
            {children}
        </Button>
    )
}

const Button = styled.button`
    min-width: 300px;
    display:block;
    padding: 10px 15px;
    background-color:${({ theme }) => theme.colors.btnBg};
    color: ${({ theme }) => theme.colors.btnText};
    border: none;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    font-weight: 500;
    transition: background-color 0.2s;

    &:hover{
        background-color: ${({ theme }) => theme.colors.btnHover};
    }
`
