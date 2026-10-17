import styled from "styled-components"


export type TabValue = 'All' | 'My favorite'| 'Popular';

export type TabItems = {
    value: TabValue,
    label: string,
    disabled?: boolean
}

export type TabsProps = {
    items: TabItems[],
    activeTab: TabValue,
    onChange?: (activeTab: TabValue) => void

}

export const Tabs = ({items, activeTab, onChange}: TabsProps) =>{
   
    return(
        <TabsContainer>
            {items.map((tab) => {
                return <TabsButton
                key={tab.value}
                $isActive={tab.value === activeTab}
                onClick={() => onChange(tab.value)}
                >{tab.label}
                </TabsButton>
            })}
        </TabsContainer>
    )
}

const TabsContainer = styled.div`
    max-width: 500px;
    display: flex;
    align-items: center;
    margin: 20px 0;
    
`;

const TabsButton = styled.button<{$isActive: boolean}>`
    min-width:150px;
    width:100%;
    padding: 10px;
    border: none;
    background-color: transparent;
    font-size: 16px;
    font-weight: 600;
    transition: color 0.2s ease;

    border-bottom: 1px solid ${({$isActive}) => ($isActive ? '#1e3a8a' : '#9e9b9b')};
    color: ${({$isActive}) => ($isActive ? '#1e3a8a' : '#9e9b9b')};

    &:disabled{
        color: #615e5e;
        cursor: not-allowed;
    }
`;