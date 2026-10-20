import styled from "styled-components";
import { Title } from "../Title/Title";
import { Layout } from "../Layout/Layout";
import { Input } from "../UI/Input/Input";
import { useState, type SubmitEvent } from "react";
import { Btn } from "../UI/Button/Button";

type SignUpProps = {
    onSubmit?: (email: string) => void;
}


export const SignUp = ({ onSubmit}: SignUpProps) =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) =>{
        e.preventDefault();
        onSubmit(email);
    }

    return(
        <Layout>
            <BackLink href="#">Back to home</BackLink>
            <Title title="Sign Up" />
            <Form onSubmit={handleSubmit}>
                <Input
                type='text'
                label='name'
                value={name}
                placeholder='Your name'
                onChange={(e) => setName(e.target.value)} 
                />
                <Input
                type='email'
                label='email'
                value={email}
                placeholder='Your email'
                onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                type='password'
                label='password'
                value={password}
                placeholder='Your password'
                onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                type='password'
                label='confirm password'
                value={confirmPassword}
                placeholder='Confirm password'
                onChange={(e)=> setConfirmPassword(e.target.value)}
                />

                <Btn type='submit'>Sign Up</Btn>

                <SignUpText>
                    Already have an account? <SignInLink href="/">Sign In</SignInLink>
                </SignUpText>
            </Form>
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

const Form = styled.form`
    width: 100%;
    max-width: 500px; 
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    background: #e7e5e5;
    border: 1px solid #c2bfbf;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    margin-top: 50px;
  
`;

const SignUpText = styled.p`
    text-align: center;
    font-size: 12px;
    color: #6b7280;
    margin-top: 15px;
`;

const SignInLink = styled.a`
    color: #1e3a8a;
    text-decoration: none;
    font-weight: 500;

    &:hover {
        text-decoration: underline;
    }
`;