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
    background-color: #1e3a8a;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    font-weight: 500;
    transition: background-color 0.2s;

    &:hover{
        background-color: #1e40af;
    }
`
