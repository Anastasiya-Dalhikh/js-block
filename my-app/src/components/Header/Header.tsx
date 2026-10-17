import styled from 'styled-components';
import { MenuButton } from '../MenuButton/MenuButton';
import { SearchBtn } from '../SearchButton/SearchButton';
import { ProfileBtn  } from '../ProfileButton/ProfileButton';
import {useState} from 'react';
import { UserProfile } from '../UserProfile/UserProfile';


export const Header = () =>{
    const [isOpen, setIsOpen] = useState(false);

    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const user = { firstName: 'John', lastName: 'Smith' };

    const handleClick = () =>{
        setIsOpen(!isOpen);
    }
    
    return(
        <StyledHeader>
            <Container>
                <MenuButton isOpen={isOpen} onClick={handleClick}/>
                <NavGroup>
                    <SearchBtn />
                    {isLoggedIn ? (
                        <UserProfile 
                            firstName={user.firstName} 
                            lastName={user.lastName} 
                            onClick={() => {}} />
                        ) : <ProfileBtn />
                    }
                </NavGroup>
                
            </Container>
            
        </StyledHeader>
    )
    
}

const StyledHeader = styled.header`
    background-color: #1e3a8a;
`

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
`;




