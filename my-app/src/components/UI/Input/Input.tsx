import { type ChangeEvent } from 'react';
import styled from 'styled-components';

type InputProps = {
    type: 'text' | 'email' | 'password';
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    placeholder: string;
    label?: string;
}

export const Input = ({type, onChange, value, placeholder, label }: InputProps) =>{

    return (
        <Field>
            <Label>
                {label}
                <InputStyled type={type} onChange={onChange} value={value} placeholder={placeholder} />
            </Label>
        </Field>
    )
}

const Field = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 15px;
    max-width: 450px;
    width:100%;
    
`;

const Label = styled.label`
    width: 100%;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.secondaryText};
    font-weight: 700;

    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const InputStyled = styled.input`
    width:100%;
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 4px;
    font-size: 14px;
    outline: none;

    &:focus{
        border-color: ${({ theme }) => theme.colors.btnBg};
    }
`;