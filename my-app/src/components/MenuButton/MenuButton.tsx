import styled from 'styled-components';

type MenuButtonProps = {
    isOpen: boolean;
    onClick: () => void;
}

export const MenuButton = ({isOpen, onClick}: MenuButtonProps) =>{
    return(
        <BurgerBtn onClick={onClick}>
            {isOpen ? (
                <CloseIcon>✕</CloseIcon>) : (
                <BurgerIcon>
                    <BurgerLine></BurgerLine>
                    <BurgerLine></BurgerLine>
                    <BurgerLine></BurgerLine>
                </BurgerIcon>
            )}
        </BurgerBtn>
    )
}

const BurgerBtn = styled.button`
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

    &:hover {
    background-color: ${({theme}) => theme.colors.btnHover};
    }

    &:active {
    transform: scale(0.98);
    }
`;

const BurgerIcon = styled.span`
    display: flex;
    flex-direction: column;
    gap: 6px; 
`;
const BurgerLine = styled.span`
    display: block;
    width: 26px;
    height: 3px;
    background-color: ${({theme}) => theme.colors.btnText};
`;

const CloseIcon =styled.span`
    color: ${({theme}) => theme.colors.btnText};
    font-size: 32px;
    line-height: 1;
    font-weight: bold;
`;

