import { Moon, Sun } from "lucide-react";
import { UserProfile } from "../UserProfile/UserProfile";
import { useThemeContext } from "../../context/ThemeContext";
import styled from "styled-components";

type BurgerMenuProps = {
    isOpen: boolean;
    onClose: () => void;
}



export const BurgerMenu = ({isOpen, onClose}: BurgerMenuProps) => {
    const {theme, toggleTheme} = useThemeContext();

    const turnLightTheme = () =>{
        if(theme === 'dark'){
            toggleTheme();
        }
    }

    const turnDarkTheme = () =>{
        if(theme === 'light'){
            toggleTheme();
        }
    }
    return(
        <MenuOverlay $isOpen={isOpen}>
            <MenuList>

                <UserProfile firstName={"John"} lastName={"Smith"} />

                <NavLinks>
                    <NavItem onClick={onClose}>Home</NavItem>
                    <NavItem onClick={onClose}>Add post</NavItem>
                </NavLinks>

                <BottomBlock>
                    <ThemeBtn onClick={turnLightTheme}>
                        <Sun />
                    </ThemeBtn>
                    <ThemeBtn onClick={turnDarkTheme}>
                        <Moon />
                    </ThemeBtn>
                </BottomBlock>

                <LogoutBtn>
                    Log Out
                </LogoutBtn>

            </MenuList>
            
        </MenuOverlay>
    )
}


const MenuOverlay = styled.div<{ $isOpen: boolean }>`
    position: absolute;
    top: 55px;
    left: 0;
    width: 200px;
    height: calc(100vh - 55px);
    background-color: ${({ theme }) => theme.colors.pageBg};
    z-index: 1000;
    display: flex;
    flex-direction: column;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);


    transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '-100%')});
    transition: transform 0.3s ease-in-out;
`;


const MenuList = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;


const NavLinks = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1; 
    margin-top: 10px;
`;


const NavItem = styled.button`
    background: none;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    text-align: left;
    padding: 20px;
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primaryText};
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: ${({ theme }) => theme.colors.btnHover};
        color: ${({ theme }) => theme.colors.btnText};
    }
`;


const BottomBlock = styled.div`
    display: flex;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
`;


const ThemeBtn = styled.button`
    flex: 1;
    padding: 15px;
    background: none;
    border: none;
    border-right: 1px solid ${({ theme }) => theme.colors.border};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primaryText};
    transition: background-color 0.2s ease;

    &:last-child {
        border-right: none;
    }

    &:hover {
        background-color: ${({ theme }) => theme.colors.btnHover};
        color: ${({ theme }) => theme.colors.btnText};
    }
`;


const LogoutBtn = styled.button`
    width: 100%;
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.formBg};
    border: none;
    font-size: 14px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primaryText};
    cursor: pointer;
    text-align: center; 
    padding-left: 20px;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: ${({ theme }) => theme.colors.border};
    }
`;