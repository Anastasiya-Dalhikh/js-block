import { User } from "lucide-react";
import styled from 'styled-components';

type ProfileBtnProps = {
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
}

export const ProfileBtn = ({type = 'button', onClick}:ProfileBtnProps) =>{
    return(
        <Button type={type} onClick={onClick}>
            <ProfileIcon><User/></ProfileIcon>
        </Button>
    )
}

const Button = styled.button`
    width: 55px;
    height: 55px;
    background-color: ${({theme}) => theme.colors.btnBg};
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 0;
    transition: background-color 0.2s ease, transform 0.1s ease; 

    &:hover{
        background-color: ${({theme}) => theme.colors.btnHover};
    }

    &:active{
        transform: scale(0.98);
    }
`;

const ProfileIcon = styled.span`
    color: ${({theme}) => theme.colors.btnText};
    display: flex;
    align-items: center;
    justify-content: center;
`;
    
