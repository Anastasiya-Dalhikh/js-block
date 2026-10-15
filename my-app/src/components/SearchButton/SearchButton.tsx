import { Search } from "lucide-react";
import styled from 'styled-components';

type SearchBtnProps = {
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
}

export const SearchBtn = ({type = 'button', onClick}:SearchBtnProps) =>{
    return(
        <Button type={type} onClick={onClick}>
            <SearchIcon><Search/></SearchIcon>
        </Button>
    )
}

const Button = styled.button`
    width: 55px;
    height: 55px;
    background-color: #1e3a8a;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 0;
    transition: background-color 0.2s ease, transform 0.1s ease; 

    &:hover{
        background-color: #1e40af;
    }

    &:active{
        transform: scale(0.98);
    }
`;

const SearchIcon = styled.span`
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;
    
