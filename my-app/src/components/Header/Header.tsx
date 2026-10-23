import styled from 'styled-components';
import { MenuButton } from '../MenuButton/MenuButton';
import { SearchBtn } from '../SearchButton/SearchButton';
import { ProfileBtn  } from '../ProfileButton/ProfileButton';
import {useContext, useState, type SubmitEvent} from 'react';
import { UserProfile } from '../UserProfile/UserProfile';
import { Moon, Sun } from 'lucide-react';
import { ThemeContext } from '../../context/ThemeContext';
import { useSearchContext } from '../../context/SearchContext';


const user = { firstName: 'John', lastName: 'Smith' };


export const Header = () =>{
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [isSearchOpen, setIsSearchOpen] = useState(false); // открыт ли поиск
    const [text, setText] = useState(''); // что ввели в поиск
    
    const {theme, toggleTheme } = useContext(ThemeContext);
    const { setSearchValue } = useSearchContext(); 

    const handleClick = () =>{
        setIsOpen(!isOpen);
    }

    const handleSearchSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!text) return;

    setIsSearchOpen(false);
    setSearchValue(text);
    setText('');
};


    
    return(
        <StyledHeader>
            <Container>
                <MenuButton isOpen={isOpen} onClick={handleClick}/>

                        {isSearchOpen && (
                            <SearchForm onSubmit={handleSearchSubmit}>
                                <SearchInput
                                autoFocus
                                type='text'
                                value={text}
                                placeholder='Search ...'
                                onChange={(e) => setText(e.target.value)}
                                />
                                <CloseBtn type='button' onClick={() => setIsSearchOpen(false)}>
                                    X
                                </CloseBtn>
                            </SearchForm>   
                        )
                    }
                <NavGroup>
                    <SearchBtn onClick={() => setIsSearchOpen(!isSearchOpen)}/>
                    
                    {isLoggedIn ? (
                        <UserProfile 
                            firstName={user.firstName} 
                            lastName={user.lastName} 
                            onClick={() => {}} />
                        ) : <ProfileBtn />
                    }
                    <ThemeBtn onClick={toggleTheme}>
                        {theme === 'dark' ? <Sun /> : <Moon />}
                    </ThemeBtn>
                </NavGroup>
                
            </Container>
            
        </StyledHeader>
    )
    
}

const StyledHeader = styled.header`
    background-color: ${({theme}) => theme.colors.headerBg};
`;

const Container = styled.div`
    max-width: 1430px;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

`;

const NavGroup = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
`;

const SearchForm = styled.form`
    display: flex;
    flex:1;
    align-items: center;
    background: ${({theme}) => theme.colors.btnBg};
    height: 55px;

    position: relative;

    &:focus-within{
        background-color: ${({theme}) => theme.colors.btnHover};
    }

`;

const SearchInput = styled.input`
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.btnText};
    padding: 8px;
    outline: none;
    width: 200px;
    flex:1;

    &::placeholder {
        color: ${({ theme }) => theme.colors.btnText};
        font-size: 16px;
        opacity: 0.6;
    }
`;

const CloseBtn = styled.button`
    width: 55px;
    height: 55px;
    background-color: ${({theme}) => theme.colors.cardBg};
    color: ${({theme}) => theme.colors.btnText};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 0;
    border: none;

    position: absolute;
    right: 2px;
    top: 0;

`;

const ThemeBtn = styled.button`
    width: 55px;
    height: 55px;
    padding:0;
    background: ${({theme}) => theme.colors.btnBg};
    border: none;
    color: ${({theme}) => theme.colors.btnText};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    svg{
        width:20px;
        height: 20px;
    }

    &:hover{
       background: ${({theme}) => theme.colors.btnHover}; 
    }
`;




