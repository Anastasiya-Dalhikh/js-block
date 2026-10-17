import styled from "styled-components";
import { ChevronDown } from "lucide-react";

type UserProfileProps = {
    firstName: string;
    lastName: string;
    onClick?: () => void;
}

export const UserProfile = ({firstName, lastName, onClick}:UserProfileProps) =>{
    const initials = `${firstName[0]}${lastName[0]}`.toUpperCase();
    const fullName = `${firstName} ${lastName}`;
    return (
        <UserProfileBtn onClick={onClick}>
            <Avatar>{initials}</Avatar>
            <Name>{fullName}</Name>
            <StyledChevron><ChevronDown /></StyledChevron>
        </UserProfileBtn>
    )
}

const UserProfileBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;
    cursor: pointer;
    padding: 10px 15px;
    background-color: #1e3a8a;
    gap: 10px;

    &:hover{
        background-color: #1e40af;
    }
`;

const Avatar = styled.span`
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 14px;

    background-color: #dbeafe; 
    color: #1e3a8a; 

`;

const Name = styled.span`
    font-weight: 600;
    font-size: 14px;
    color: #dbeafe;
    white-space: nowrap;
`;

const StyledChevron = styled.span`
    color: #f7f7f7;
    transition: transform 0.2s ease;

`;