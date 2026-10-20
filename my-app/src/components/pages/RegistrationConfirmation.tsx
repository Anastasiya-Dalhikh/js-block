import styled from "styled-components";
import { Layout } from "../Layout/Layout"
import { Title } from "../Title/Title"
import { Btn } from "../UI/Button/Button";

type RegistrationConfirmationProps = {
    onGoHomeClick?: () => void;
    email?: string;
}

export const RegistrationConfirmation = ({onGoHomeClick, email}: RegistrationConfirmationProps) => {
    return(
        <Layout>
            <BackLink href="#">Back to home</BackLink>
            <Title title="Registration confirmation" />
                <Message>
                    <TextActivation>
                        Please activate your account with the activation
                        link in the email <Mail>{email}</Mail>
                    </TextActivation>
                    <TextCheckEmail>Please, check your email</TextCheckEmail>
                    <Btn type='button' onClick={onGoHomeClick}>Go to home</Btn>
                </Message>
        </Layout>
    )
}

const BackLink = styled.a`
    font-size: 12px;
    color: #6b7280;
    text-decoration: none;
    margin-bottom: 10px;
    display: inline-block;

    &:hover {
        color: #1e3a8a;
    }
`;


const Message = styled.div`
    width: 100%;
    max-width: 500px; 
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    background: #e7e5e5;
    border: 1px solid #8d8b8b;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    margin-top: 50px;
`;

const TextActivation = styled.h3`
    text-align: left;
    font-size: 15px;
    color: #6b7280;
    margin-top: 15px;
    
`;

const Mail = styled.span`
    font-size: 15px;
    color: #17181a;
    font-weight: 600;
`;

const TextCheckEmail = styled.p`
    text-align: left;
    font-size: 13px;
    color: #6b7280;
    margin: 10px 0 20px;
`;

